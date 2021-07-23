import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from '../campaigns';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() campaign!: Campaign;
  constructor() { }

  ngOnInit(): void {
  }

}
