import { Component } from '@angular/core';

interface Fruit {
  id: number;
  title: string;
  price: number;
}
@Component({
  selector: 'inst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fruits: Fruit[] = [
    { id: 1, title: 'apple', price: 10 },
    { id: 2, title: 'orange', price: 20 },
    { id: 3, title: 'watermelon', price: 30 },
    { id: 4, title: 'banana', price: 40 },
    { id: 5, title: 'pears', price: 50 },
    { id: 6, title: 'raspberries', price: 60 },
    { id: 7, title: 'avocados', price: 70 },
    { id: 8, title: 'mangoes', price: 80 },
    { id: 9, title: 'kiwi', price: 90 },
  ];

  date = new Date(2022, 5, 12, 10);
}
