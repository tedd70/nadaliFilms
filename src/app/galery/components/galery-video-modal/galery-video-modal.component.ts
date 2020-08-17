import { Component, Inject, Input} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// Interfaces
import { GaleryInterface } from 'src/app/galery/business/interfaces/galery.interface';
import { globalAgent } from 'http';

@Component({
  selector: "app-galery-video-modal",
  templateUrl: "./galery-video-modal.component.html",
  styleUrls: ["./galery-video-modal.component.scss"]
})

export class GaleryVideoModalComponent {
  public galeryVideo: string;
  public state: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<GaleryVideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.galeryVideo = this.data.videoValue;

    if(this.galeryVideo === '') {
      this.state = false;
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
