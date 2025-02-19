import { Component, inject, OnInit } from '@angular/core';
import { Constelation } from '../../interfaces/constelation.interface';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ConstelationService } from '../../services/constelation.service';
import { CommonModule } from '@angular/common';
import { Star } from '../../interfaces/star.interface';

import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@Component({
  selector: 'app-constelation',
  imports: [RouterModule, CommonModule, MatTableModule],
  templateUrl: './constelation.component.html',
  styleUrl: './constelation.component.scss'
})
export class ConstelationComponent implements OnInit{
  route= inject(ActivatedRoute);
  constelationService = inject(ConstelationService);
  constelationAbbr ='' ;
  constelation: Constelation | null = null;
  starList: Star[] | null = null;
  starDataSource = new MatTableDataSource<Star>();
  displayedColumns: string[] = ['name','desig', 'spk','mag','bvc','ra','de'];
 
  ngOnInit(): void {  
    this.constelationAbbr = this.route.snapshot.paramMap.get('id') || '';
    this.constelation = this.constelationService.getConstelation(this.constelationAbbr) ;
    this.starList =  this.constelationService.getStarsfromConst(this.constelationAbbr) ;
    this.starDataSource  =  new MatTableDataSource<Star>(this.starList) || null;
  }


}
