import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  @Output('homepageOp') homepageOp = new EventEmitter<{ isHomepage: boolean}>();
  page = new Subject<boolean>();
  homepage: boolean;
  loadFeature = 'example1';

  constructor(private location: Location) {

  }

  ngOnInit(){
    this.loadPage();
  }

  onNavigate(feature: string){
    this.loadFeature = feature;
  }

  loadPage(){
    this.homepage = this.location.path() === '';
  }
}
