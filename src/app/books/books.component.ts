import { Component, OnInit } from '@angular/core';

interface Book {
  name: string,
  author: string,
  image: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [
    {
      name: 'Clean code',
      author: 'Robert Martin',
      image: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",

    },
    {

      name: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      image: "https://images-eu.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_ML2_.jpg"
    }
  ]




  isShowing: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }




}
