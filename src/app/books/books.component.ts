import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  name :string = 'Clean code';
  author:string = 'Robert Martin';
  src:string = "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg";

  name2 :string = "The Pragmatic Programmer";
  author2 : string= "Andrew Hunt";
  src2 : string = "https://images-eu.ssl-images-amazon.com/images/I/51W1sBPO7tL._SX218_BO1,204,203,200_QL40_ML2_.jpg";

  isDisabled : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.isDisabled = true;
    console.log("hello");
  }

  myName :string = "";

}
