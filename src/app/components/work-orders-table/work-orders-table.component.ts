import { WorkOrdersService } from '../../services/work-orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkOrder } from '../../models/work-order';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { WorkOrdersFullResponse, WorkOrdersResponse } from 'src/app/models/work-orders-response';

@Component({
  selector: 'app-work-orders-table',
  templateUrl: './work-orders-table.component.html',
  styleUrls: ['./work-orders-table.component.scss']
})
export class WorkOrdersTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  workOrdersSource: MatTableDataSource<WorkOrder> = new MatTableDataSource();
  workOrdersData: WorkOrder[] = [];
  tableHeaders = ['wo_id', 'description', 'received_date', 'assigned_to',  'status', 'priority'];

  constructor(private workOrdersService: WorkOrdersService) { }

  ngOnInit(): void {
    this.workOrdersService.fetchWorkOrders().then((serverFullResponse: WorkOrdersFullResponse) => {
      this.workOrdersSource.data = serverFullResponse.response.data;
      this.workOrdersData = serverFullResponse.response.data;
      this.setPagination(serverFullResponse.response)
    })
  }

  setPagination(serverResponse: WorkOrdersResponse): void {
    this.paginator.pageIndex = serverResponse.current_page - 1;
    this.paginator.pageSize = serverResponse.per_page;
    this.paginator.length = serverResponse.total;
    this.workOrdersSource.paginator = this.paginator;
  }

  filterRows(filterValue: string): void {
    this.workOrdersSource.data = this.workOrdersData.filter(el => el.description.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
