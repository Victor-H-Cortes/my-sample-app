import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
import { ICustomer } from '../../shared/interfaces';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';

@Component ({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
    // @Input() customers: any[];

    private _customers: ICustomer[] = [];

    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';
    
    constructor() {}
    ngOnInit(): void {
    } 

    // this works for a lot of properties, but we'll use something different for one property
    // ngOnChanges(changes: SimpleChanges) {
    // }
    
    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    }

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                    cust.orderTotal.toString().indexOf(data) > -1;
            })            
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders();
    }

    sort(prop: string) {
        //  A sorter service will handle the sorting
    }
}