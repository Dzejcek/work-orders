import { WorkOrdersFullResponse } from './../models/work-orders-response';
import { MOCK_DATA } from '../models/mock-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkOrdersService {

  mockData = MOCK_DATA;

  constructor() { }

  fetchWorkOrders(): Promise<WorkOrdersFullResponse> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.mockData)
      }, 500)
    });
  }

}
