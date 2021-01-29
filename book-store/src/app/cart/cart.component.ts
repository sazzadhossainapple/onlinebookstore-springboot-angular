import { Component, OnInit } from '@angular/core';
import {Book} from 'src/app/model/Book';
import { HttpClientService } from 'src/app/service/http-client.service';
import {ActivatedRoute,  Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  books: Array<Book>;
  booksRecieved: Array<Book>;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
  }

}
