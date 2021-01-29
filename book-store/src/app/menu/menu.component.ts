import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';


import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLoggedIn = false;

  constructor(public loginService:AuthenticationService
   ) { }

  ngOnInit(): void {
    
  }
 

 
}
