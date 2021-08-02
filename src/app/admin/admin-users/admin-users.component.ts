import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {
  constructor(private _userService: UserService,
    private router:Router) { }
  
  users = [];
  total_users : number;

  ngOnInit(): void {
    //call backend APIs 
    // save into campaigns and display campaigns 

    this._userService.getUser()
      .subscribe(users => {
        this.users = users;
        this.total_users = Object.keys(users).length
      });
  }

}
