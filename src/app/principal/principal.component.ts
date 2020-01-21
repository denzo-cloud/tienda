import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  product1 = [
    {
      "id":1,"name":"Conjunto flores vestido y leotardo.",
      "description":"Lorem ipsum dolor sit amet consectetur.",
      "price":"75.00","quantity":10
    }
  ];
  product2 = [
    {
      "id":2,"name":"Conjunto blue sudadera y pantalon.",
      "description":"Lorem ipsum dolor sit amet consectetur.",
      "price":"65.00","quantity":10
    }
  ];
  product3 = [
    {
      "id":3,"name":"Conjunto con volantes y leotardo.",
      "description":"Lorem ipsum dolor sit amet consectetur.",
      "price":"70.00","quantity":10
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
