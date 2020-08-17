import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interface
import { OurServicesInterface } from '../../business/interfaces/our-services.interface';

@Component({
  selector: 'app-eveniments',
  templateUrl: './eveniments.component.html',
  styleUrls: ['./eveniments.component.scss']
})

export class EvenimentsComponent implements OnInit {
  public evenimentsServicesData: OurServicesInterface[];
  public show: boolean = false;

  constructor(
    private evenimentsActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.evenimentsActivatedRoute.data.subscribe(data => {
      this.evenimentsServicesData = data.response.eveniments;
    });
  }
}