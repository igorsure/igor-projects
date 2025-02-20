import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Star } from '../../interfaces/star.interface';

import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Constellation } from '../../interfaces/constellation.interface';
import { ConstellationService } from '../../services/constellation.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { ConstellationMapComponent } from '../constellation-map/constellation-map.component';
@Component({
  selector: 'app-constellation',
  imports: [RouterModule, CommonModule, MatTableModule, MatToolbarModule, MatButtonModule, ConstellationMapComponent],
  templateUrl: './constellation.component.html',
  styleUrl: './constellation.component.scss'
})
export class ConstellationComponent implements OnInit{
  route= inject(ActivatedRoute);
  constellationService = inject(ConstellationService);
  constellationAbbr ='' ;
  constellation: Constellation | null = null;
  starList: Star[] | null = null;
  starDataSource = new MatTableDataSource<Star>();
  displayedColumns: string[] = ['name','desig', 'spk','mag','bvc','ra','de'];
  isStarList = true;
  isConstellationMap = true;
 
  ngOnInit(): void {  
    this.constellationAbbr = this.route.snapshot.paramMap.get('id') || '';
    this.constellation = this.constellationService.getConstellation(this.constellationAbbr) ;
    this.starList =  this.constellationService.getStarsfromConst(this.constellationAbbr) ;
    this.starDataSource  =  new MatTableDataSource<Star>(this.starList) || null;
  }
  toggleStarList(): void{
    this.isStarList = !this.isStarList;
   }

   toggleConstellationMap(): void{
    this.isConstellationMap = !this.isConstellationMap;
   }
  

}
