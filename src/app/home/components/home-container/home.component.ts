import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

// Services
import { CarouselInterface } from 'src/app/shared/components/carousel/carousel.interface';
import { AnimationType } from 'src/app/shared/components/carousel/carousel.animations';

// Components
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component'
import { AboutUsComponent } from '../about-us/about-us.component';
import { AboutUsInterface } from '../../business/interfaces/about-us.interface';
import { BoxServicesInterface } from '../../business/interfaces/box-services.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild(CarouselComponent) carousel: CarouselComponent;
  @ViewChild('our-services') ourServices: ElementRef;

  public animationType: AnimationType = AnimationType.Fade;
  public aboutUsData: AboutUsInterface[];
  public boxServicesData: BoxServicesInterface[];
  public slides: CarouselInterface[];

  animationTypes = [
    {
      name: "Fade",
      value: AnimationType.Fade
    }
  ];

  constructor(
    private homeRoute: Router,
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
    private homeActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.homeActivatedRoute.data.subscribe(data => {
      this.aboutUsData = data.response.aboutUsData;
      this.boxServicesData = data.response.boxServicesData;
      this.slides = data.response.slides;
    });
  }

  goToGalery() {
    this.homeRoute.navigateByUrl('/galerie');
  }

  openModal(): void {
    if (this.aboutUsData.length == 0) {
      this.snackbar.open("No data available", "Undo", { duration: 5000 });
    } else {
      let dialogRef = this.dialog.open(AboutUsComponent, {
        width: '844px',
        data: this.aboutUsData,
        disableClose: true
      });
      dialogRef.afterClosed().subscribe((result: string) => {
        if (typeof result !== "undefined") {
          result = "No available informations";
        }
      });
    }
  }
}