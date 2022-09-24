import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: 'clean code',
      author: 'robert martin',
      image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      amount : 30

    },
    {

      name: "the pragmatic programmer",
      author: "andrew hunt",
      image: "https://images-eu.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
      amount : 40

    },
    {

      name: "The Art of Computer Programming",
      author: "donald knuth",
      image: "https://images-na.ssl-images-amazon.com/images/I/41YakMLJktL._SY429_BO1,204,203,200_.jpg",
      amount : 391

    },
    {

      name: "introduction to algorithm",
      author: "T cormen",
      image: "https://images-eu.ssl-images-amazon.com/images/I/41VZ-6Vy7HL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
      amount : 122

    }
  ]




  isShowing: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }




}
