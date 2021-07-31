import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  currentUser: any;
  userUid = "";
  constructor(
    private router: Router,
   ) {


  }

  ngOnInit() {
  
  }

  logout() {
  
  }

}
