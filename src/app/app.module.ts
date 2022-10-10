import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkOrdersTableComponent } from './components/work-orders-table/work-orders-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AssignedToNamesPipe } from './pipes/assigned-to-names.pipe'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    WorkOrdersTableComponent,
    AssignedToNamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
