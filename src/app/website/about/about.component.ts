import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
    templateUrl: 'about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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