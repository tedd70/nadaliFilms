import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

// Interfaces
import { GaleryInterface } from '../../business/interfaces/galery.interface';

// Components
import { GaleryVideoModalComponent } from '../galery-video-modal/galery-video-modal.component';

@Component({
  selector: 'app-galery',
  templateUrl: 'galery.component.html',
  styleUrls: ['galery.component.scss']
})

export class GaleryComponent implements OnInit {
  public galeryData: GaleryInterface[];
  public galeryTitle: string = '';

  constructor (
    private galeryActivatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.galeryActivatedRoute.data.subscribe(data => {
      this.galeryData = data.response.videos;
      this.galeryTitle = data.response.title;
    });
  }

  openVideoModal(index: any): void {
    if (this.galeryData.length === 0) {
      this.snackbar.open("No data available", "Undo", { duration: 5000 });
    } else {
      let dialogRef = this.dialog.open(GaleryVideoModalComponent, {
        data: this.galeryData[index],
        disableClose: true
      });
      // dialogRef.afterClosed().subscribe((result: string) => {
      //   if (typeof result !== "undefined") {
      //     result = "No available informations";
      //   }
      // });
    }
  }
}