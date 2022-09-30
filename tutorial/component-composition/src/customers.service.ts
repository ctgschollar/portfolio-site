import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  getCustomers() {
    return [
    { display: "Big Bank", value: 1 },
    { display: "Small Startup", value: 2 },
    { display: "Medium Great Shop", value: 3 },
    { display: "Big Bank 2", value: 4 },
    { display: "Small Startup 2", value: 5 },
    { display: "Medium Great Shop 2", value: 6 }
  ];
  }

}