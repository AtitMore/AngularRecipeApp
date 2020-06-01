import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
selector: 'app-header',
templateUrl: './header.component.html',
styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output('homepageOp') homepageOp = new EventEmitter<{ isHomepage: boolean}>();
    @Input('homepageIp') homepageIp: { homePage: boolean };
    
    homepage: boolean;

    constructor(private location: Location){}
    
    ngOnInit(){
        this.homepage = this.location.path() === '';
        this.homepageOp.emit({
            isHomepage: this.homepage
        })
    }
}