import { Component, Input, OnInit } from '@angular/core';
import { CarouselInterface } from "./carousel.interface";
import { trigger, transition, useAnimation } from "@angular/animations";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { VideoModalComponent } from '../video-modal/video-modal.component';

import {
  AnimationType,
  fadeIn,
  fadeOut
} from "./carousel.animations";

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['carousel.component.scss'],
  animations: [
    trigger("slideAnimation", [
      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "1000ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "1000ms" } })
      ])
    ])
  ]
})

export class CarouselComponent implements OnInit {
  @Input() slides: CarouselInterface[];
  @Input() animationType = AnimationType.Fade;

  public currentSlide: number = 0;

  constructor (
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

  ngOnInit() {
    this.preloadImages();
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  openVideoModal(): void {
    if (this.slides.length === 0) {
      this.snackbar.open("No data available", "Undo", { duration: 5000 });
    } else {
      let dialogRef = this.dialog.open(VideoModalComponent, {
        data: {data: this.slides, currentSlide: this.currentSlide},
        disableClose: true
      });
      // dialogRef.afterClosed().subscribe((result: string) => {
      //   if (typeof result !== "undefined") {
      //     result = "No available informations";
      //   }
      // });
    }
  }

   /* {
       "headline": "Other Eveniments",
       "ghilimele": "/assets/images/ghilimele.png",
       "src":
       "/assets/images/alte-evenimente2.jpg",
       "text": "Încă nu s-a înţeles că doar prin distracţie, pasiune şi râs se obţine o adevărată creştere culturală.",
       "authorName": "Dario Fo"
     } */
}