import { Component } from "@angular/core";
import { Router } from '@angular/router';

import { 
  ScrollToService, 
  ScrollToConfigOptions 
} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  public appLogo: string = 'NadaliFilms';

  constructor(
    private router: Router,
    private _scrollToService: ScrollToService
  ) {}

  // triggerScrollTo(){
  //   const config: ScrollToConfigOptions = {
  //     target: 'contact'
  //   };
 
  //   this._scrollToService.scrollTo(config);
  // }

  goToHomePage() {
    this.router.navigateByUrl('/acasa');
  }

  goToGaleryPage() {
    this.router.navigateByUrl('/galerie');
  }

  goToWeddingPage() {
    this.router.navigateByUrl('/servicii/1')
  }

  goToChristeningPage() {
    this.router.navigateByUrl('/servicii/2')
  }

  goToEvenimentsPage() {
    this.router.navigateByUrl('/servicii/3')
  }

  goToContactPage() {
    this.router.navigateByUrl('/contact');
  }
}
