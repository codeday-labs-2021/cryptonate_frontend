import { Component, OnInit } from '@angular/core';
import { CAMPAIGNS } from '../campaigns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  campaigns=CAMPAIGNS;
  constructor() { }

  ngOnInit(): void {
  }

}
