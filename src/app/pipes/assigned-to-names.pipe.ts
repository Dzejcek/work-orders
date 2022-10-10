import { Pipe, PipeTransform } from '@angular/core';
import { Assignation } from '../models/work-order';

@Pipe({
  name: 'assignedToNames'
})
export class AssignedToNamesPipe implements PipeTransform {

  transform(assignee: Assignation[], ...args: unknown[]): string {
    return assignee.length > 0 ? assignee.map(el => el.person_name).join('\n') : '[]';
  }

}
