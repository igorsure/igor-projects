import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as d3 from 'd3';
import { Constellation } from '../../interfaces/constellation.interface';
import { Star } from '../../interfaces/star.interface';
import { ConstellationService } from '../../services/constellation.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-constellation-map',
  imports: [RouterModule, CommonModule],
  templateUrl: './constellation-map.component.html',
  styleUrl: './constellation-map.component.scss',
})
export class ConstellationMapComponent implements OnInit {
  route = inject(ActivatedRoute);
  constellationService = inject(ConstellationService);
  constellationAbbr = '';
  constellation: Constellation | null = null;
  starList: Star[] = [];
  starDataSource = new MatTableDataSource<Star>();

  ngOnInit(): void {
    //this.createBarChart();
    this.constellationAbbr = this.route.snapshot.paramMap.get('id') || '';
    this.constellation = this.constellationService.getConstellation(
      this.constellationAbbr
    );
    this.starList = this.constellationService.getStarsfromConst(
      this.constellationAbbr
    );
    //this.starList.map(star=>({...star, de:star.de>0?star.de:90-star.de }))
    console.log(this.starList);
    this.createConstellationMap();
  }

  private createBarChart(): void {
    const data = [30, 200, 100, 400, 150, 250];
    const svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('width', 700)
      .attr('height', 300);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d) => 300 - d)
      .attr('width', 65)
      .attr('height', (d) => d)
      .attr('fill', 'blue');
  }
  createConstellationMap() {
    // Specify the chart’s dimensions.
    const width = 928;
    const height = 600;
    const marginTop = 25;
    const marginRight = 20;
    const marginBottom = 35;
    const marginLeft = 40;
    // Prepare the scales for positional encoding.
    const x = d3.scaleLinear(
      this.getDomain(this.starList.map((d) => d.ra)),
      //[0,24],
      [marginLeft, width - marginRight]
    );
    const y = d3.scaleLinear(
      this.getDomain(this.starList.map((star) => (this.deToMap(star.de)))),
      //[-90,90],
      [marginLeft, width - marginRight]
    );

    // const y = d3.scaleLinear()
    //   //.domain(d3.extent(cars, d => d.hp)).nice()
    //   .range([height - marginBottom, marginTop]);

    // Create the SVG container.
    const svg = d3
      .select('figure#bar')
      .append('svg')
      .attr('viewBox', [0, 0, width, height])
      .attr('style', 'max-width: 100%; height: auto; font: 10px sans-serif;');

    // Create the axes.
    svg
      .append('g')
      .attr('transform', `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(x).ticks(width / 80))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .append('text')
          .attr('x', width)
          .attr('y', marginBottom - 4)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'end')
          .text('Right Ascension →')
      );

    svg
      .append('g')
      .attr('transform', `translate(${marginLeft},0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select('.domain').remove())
      .call((g) =>
        g
          .append('text')
          .attr('x', -marginLeft)
          .attr('y', 10)
          .attr('fill', 'currentColor')
          .attr('text-anchor', 'start')
          .text('↑ Declination')
      );

    // Create the grid.
    svg
      .append('g')
      .attr('stroke', 'currentColor')
      .attr('stroke-opacity', 0.1)
      .call((g) =>
        g
          .append('g')
          .selectAll('line')
          .data(x.ticks())
          .join('line')
          .attr('x1', (d) => 0.5 + x(d))
          .attr('x2', (d) => 0.5 + x(d))
          .attr('y1', marginTop)
          .attr('y2', height - marginBottom)
      )
      .call((g) =>
        g
          .append('g')
          .selectAll('line')
          .data(y.ticks())
          .join('line')
          .attr('y1', (d) => 0.5 + y(d))
          .attr('y2', (d) => 0.5 + y(d))
          .attr('x1', marginLeft)
          .attr('x2', width - marginRight)
      );

    // Add a layer of dots.
    svg
      .append('g')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('fill', 'none')
      .selectAll('circle')
      .data(this.starList)
      .join('circle')
      .attr('cx', (d) => x(d.ra))
      .attr('cy', (d) => y(d.de))
      .attr('r', (d) => this.magnitudeToMapSize(d.mag));

    // Add a layer of labels.
    svg
      .append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .selectAll('text')
      .data(this.starList)
      .join('text')
      .attr('dy', '0.35em')
      .attr('x', (d) => x(d.ra) + 7)
      .attr('y', (d) => y(d.de))
      .text((d) => d.name || '');
  }

  magnitudeToMapSize(mag: number): number {
    return 12 / (mag + 4);
  }
  getDomain(ar:number[]):number[]{
    const x1=Math.min( ...ar );
    const x2 =  Math.max( ...ar );
     console.log('domain',x1,x2)
    return [x1,x2];
  }
  deToMap(de:number){
    return de;
    //return de>0?de:90+de;
  }
}

function arrayToIterableNumberValue(array: number[]) {
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => {
          if (index < array.length) {
            return { value: { value: array[index++] }, done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
