import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-constellation-map',
  imports: [],
  templateUrl: './constellation-map.component.html',
  styleUrl: './constellation-map.component.scss'
})
export class ConstellationMapComponent implements OnInit {



 constructor() { }

 ngOnInit(): void {
   this.createBarChart();
 }

 private createBarChart(): void {
   const data = [30, 200, 100, 400, 150, 250];
   const svg = d3.select("app-bar-chart").append("svg")
                 .attr("width", 700)
                 .attr("height", 300);
   
   svg.selectAll("rect")
     .data(data)
     .enter()
     .append("rect")
     .attr("x", (d, i) => i * 70)
     .attr("y", d => 300 - d)
     .attr("width", 65)
     .attr("height", d => d)
     .attr("fill", "blue");
 }
}