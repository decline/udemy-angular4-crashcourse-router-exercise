import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    archives = [
        {year: 2017, month: 1},
        {year: 2017, month: 2},
        {year: 2017, month: 3}
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
