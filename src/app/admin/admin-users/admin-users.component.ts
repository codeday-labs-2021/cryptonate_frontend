import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})

export class AdminUsersComponent implements OnInit {
  users = [];
  total_users : number;
  closeResult : string
  user_ind : any
  data_user;

  constructor(private modalService: NgbModal,
    private router:Router, 
    private _userService: UserService,
    private formBuilder:FormBuilder,) {
      this.data_user = this.formBuilder.group({
        first_name : [''],
        last_name : [''],
        email : [''],
        occupation : [''],
        organization : [''],
        location : [''],
        socmed : [''],
        website_url : [''],
        organization_email : [''],
        about : [''],
        author_id: ['']
      });
    }

  ngOnInit(): void {
    this._userService.getUser()
      .subscribe(users => {
        this.users = users;
        this.total_users = Object.keys(users).length
      });
  }

  open(content, user_id : string) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
      this._userService.getUserById(user_id)
        .subscribe(user_ind => {
          this.user_ind = user_ind;
        });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(){
    let values = this.data_user.value

    this._userService.updateUser(
      values.first_name,
      values.last_name,
      values.email,
      values.occupation,
      values.organization,
      values.location,
      values.socmed,
      values.website_url,
      values.organization_email,
      values.about,
      values.author_id
    );
    this.modalService.dismissAll(); 
  }
}
