import { Component, Inject} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Interfaces
import { SlidesInterface } from '../../interfaces/slides.interface';
import { GaleryInterface } from 'src/app/galery/business/interfaces/galery.interface';

export interface DialogData {
  data: SlidesInterface[];
  currentSlide: number;
}

@Component({
  selector: "app-video-modal",
  templateUrl: "./video-modal.component.html",
  styleUrls: ["./video-modal.component.scss"]
})
export class VideoModalComponent {
  public dataVideoModal: SlidesInterface[];
  public whichSlide: number = 0;

  public state: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<VideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.dataVideoModal = this.data.data;
    this.whichSlide = this.data.currentSlide;

    let isVideo = this.dataVideoModal.filter(e => e.video === '');
    isVideo.forEach(el => {
      if (el.id === this.whichSlide) {
        return this.state = false;
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
