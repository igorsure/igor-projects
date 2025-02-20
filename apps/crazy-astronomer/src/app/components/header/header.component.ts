import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ConstellationService } from '../../services/constellation.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit,OnDestroy {
  constellationService=inject(ConstellationService);
  //constellationName:string;
  starName= 'starName';
  activeConstellation$ =  this.constellationService.getActiveConstellation$();
  activeConstellationName$= this.activeConstellation$.pipe(map(cnstl=>cnstl.name))
  constructor(){
   
  }
  ngOnInit(): void {
    //this.activeConstalation$.subscribe(cnstl=>this.constellationName=cnstl.name);
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
