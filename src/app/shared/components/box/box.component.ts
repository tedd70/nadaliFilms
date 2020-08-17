import { Component, Input, OnInit, Output } from "@angular/core";
import { BoxServicesInterface } from 'src/app/home/business/interfaces/box-services.interface';
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: "app-box",
  templateUrl: "./box.component.html",
  styleUrls: ["./box.component.scss"]
})
export class BoxComponent implements OnInit{
  @Input() dataBox: BoxServicesInterface[];
  // @Output() wedding = new EventEmitter();
  // @Output() christening = new EventEmitter();
  // @Output() eveniments = new EventEmitter();

  constructor(public boxRouter: Router) {}

  ngOnInit() {
  }
}
