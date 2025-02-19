import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CONSTELATIONS } from '../../mocks/constelations.mock';
import { Constelation } from '../../interfaces/constelation.interface';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { ConstelationService } from '../../services/constelation.service';

@Component({
  selector: 'app-constelation-list',
  imports: [CommonModule,MatTableModule,MatPaginatorModule, MatSortModule],
  templateUrl: './constelation-list.component.html',
  styleUrl: './constelation-list.component.scss'
})
export class ConstelationListComponent implements OnInit {
  constelationDataSource =  new MatTableDataSource<Constelation>(CONSTELATIONS);
  displayedColumns: string[] = ['name','abbr', 'en'];
  constelationService: ConstelationService = inject(ConstelationService);
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    // this.constelationDataSource.paginator = this.paginator;
    // this.constelationDataSource.sort = this.sort;
    console.log(this.constelationDataSource.data);
  }

  selectConstelation(id: string){
    this.constelationService.navigateToConstelation(id);
    //route.navigate
  }

}
