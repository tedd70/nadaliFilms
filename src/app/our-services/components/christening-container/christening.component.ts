import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interface
import { OurServicesInterface } from '../../business/interfaces/our-services.interface';

@Component({
  selector: 'app-christening',
  templateUrl: './christening.component.html',
  styleUrls: ['./christening.component.scss']
})

export class ChristeningComponent {
  public christeningServicesData: OurServicesInterface[];
  public show: boolean = false;

  constructor(
    private christeningActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.christeningActivatedRoute.data.subscribe(data => {
      this.christeningServicesData = data.response.christening;
    });
  }
}