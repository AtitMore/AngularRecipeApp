import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() message: string;
  @Output() close = new EventEmitter
  constructor(private route: Router) { }

  ngOnInit() {
  }


  onClose() {
    this.close.emit();
  }

}
