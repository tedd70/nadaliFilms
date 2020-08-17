import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interface
import { OurServicesInterface } from '../../business/interfaces/our-services.interface';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.scss']
})

export class WeddingComponent implements OnInit {
  public weddingServicesData: OurServicesInterface[];
  public show: boolean = false;

  constructor(
    private weddingActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.weddingActivatedRoute.data.subscribe(data => {
      this.weddingServicesData = data.response.wedding;
    });
  }
}