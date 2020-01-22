import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  imports: [ CommonModule, SharedModule, FormsModule ],  // never import browserModule more than once
  declarations : [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],  // no need for bootstrap
  exports: [ CustomersComponent ] // temporary solution --
})
export class CustomersModule { }
