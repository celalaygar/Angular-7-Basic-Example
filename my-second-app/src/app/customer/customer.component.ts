import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title: string;
  message: string;
  cnt = 0;
  customers: Customer[] = [];
  selectedCustomer: Customer;
  constructor(){ 
    this.title = 'Customer Package';
    // this.customers = [
    //   {id: 1 , name: 'Hacı Celal Aygar' , city: 'Ankara'},
    //   {id: 2 , name: 'Fatih Terim' , city: 'İstanbul'},
    //   {id: 3 , name: 'Arda Turan' , city: 'Karabük'},
    //   {id: 4 , name: 'Necati Ateş' , city: 'Eskişehir'},
    // ];
    this.customers=[
      new Customer(1 , 'Hacı Celal Aygar' , 'Ankara', 22),
      new Customer(2 , 'Fatih Terim' , 'İstanbul', 33),
      new Customer(3 , 'Arda Turan' , 'Karabük', 32),
      new Customer(4 , 'Talha Bal' , 'Eskişehir', 41),
      new Customer(5 , 'Nejla Uygur' , 'İzmir', 16),
      new Customer(6 , 'Dilara Uygur' , 'Amasya ', 75),
      new Customer(7 , 'Fulya Yürek' , 'Aydın', 19),
      new Customer(8 , 'Kezban Cesur' , 'Malatya', 57),
      new Customer(9 , 'Kemal Sunal' , 'İzmit', 51),
      new Customer(10 , 'Fahriye Evcan' , 'Karabük', 27),
      new Customer(11 , 'Oya Yaşar' , 'Eskişehir', 45),
      new Customer(12 , 'Fatma ilayda Yaşar' , 'Bursa', 61),
      new Customer(13 , 'Kemal Yaşar' , 'Kütahya', 38),
    ]
  }

  ngOnInit() {
    this.cnt = 5;
    this.message = 'Hello. Customer section is starting after ' + this.cnt + ' second';
  }

  selectCustomer(customer: Customer){
    this.selectedCustomer = customer;
  }

}
