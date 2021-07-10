import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    isOnHeader : boolean = true;
    isOnMilestone : boolean = true;
    constructor( private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
      
    }
    ngAfterViewInit() {
        this.cd.detectChanges();
    
    }
}