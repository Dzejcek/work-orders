import { WorkOrder } from "./work-order";

export interface WorkOrdersFullResponse {
    exec_time: number,
    response: WorkOrdersResponse
}

export interface WorkOrdersResponse {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number
    data: WorkOrder [];
}