import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Constellation } from '../../interfaces/constellation.interface';
import { CONSTELLATIONS } from '../../mocks/constellations.mock';
import { ConstellationService } from '../../services/constellation.service';

@Component({
  selector: 'app-constellation-list',
  imports: [CommonModule,MatTableModule,MatPaginatorModule, MatSortModule],
  templateUrl: './constellation-list.component.html',
  styleUrl: './constellation-list.component.scss'
})
export class ConstellationListComponent implements OnInit {
  constellationDataSource =  new MatTableDataSource<Constellation>(CONSTELLATIONS);
  displayedColumns: string[] = ['name','abbr', 'en'];
  constellationService: ConstellationService = inject(ConstellationService);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    // this.constellationDataSource.paginator = this.paginator;
    // this.constellationDataSource.sort = this.sort;
    //console.log(this.constellationDataSource.data);
  }

  selectConstellation(id: string){
    this.constellationService.navigateToConstellation(id);
    return false;
    //route.navigate
  }

}
