export interface WorkOrder {
    work_order_id: number,
    description: string,
    received_date: string,
    assigned_to: Assignation [],
    status: string,
    priority: string
}

export interface Assignation {
    person_name: string;
    status: string;
}