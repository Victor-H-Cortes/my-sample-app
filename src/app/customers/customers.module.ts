import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';

@NgModule({
  imports: [ CommonModule ],  // never import browserModule more than once
  declarations : [ CustomersComponent ],  // no need for bootstrap
  exports: [ CustomersComponent ] // temporary solution --
})
export class CustomersModule { }
