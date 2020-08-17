import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AboutUsInterface } from '../../business/interfaces/about-us.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  public dataAboutUs: AboutUsInterface[];

  constructor(
    public dialogRef: MatDialogRef<AboutUsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AboutUsInterface[]) { }

  ngOnInit() {
    this.dataAboutUs = this.data;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
