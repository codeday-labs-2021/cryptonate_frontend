import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
    templateUrl: 'admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    isOnHeader : boolean = true;
    isOnMilestone : boolean = true;
    constructor(private cd: ChangeDetectorRef) {
    }

    ngOnInit() {
     
    }
    ngAfterViewInit() {
        this.cd.detectChanges();
    
    }
}