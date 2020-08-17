import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})

export class MenuComponent {
  @Output() scroll = new EventEmitter();
  @Output() galery = new EventEmitter();
  @Output() home = new EventEmitter();
  @Output() wedding = new EventEmitter();
  @Output() christening = new EventEmitter();
  @Output() eveniments = new EventEmitter();
  @Output() contact = new EventEmitter();

  // public isHomeRoute: boolean = false;

  constructor(private router: Router) {}

  // showContactItem() {
  //   const isHome = this.router.isActive('acasa', true);
  //   if(isHome === true) {
  //     this.isHomeRoute = true;
  //   } else {
  //     this.isHomeRoute = false;
  //   }
  // }

  // scrollToContact() {
  //   this.scroll.emit();
  // }

  goToGaleryPage() {
    this.galery.emit();
  }

  goToHomePage() {
    this.home.emit();
  }

  goToWeddingPage() {
    this.wedding.emit();
  }

  goToChristeningPage() {
    this.christening.emit();
  }

  goToEvenimentsPage() {
    this.eveniments.emit();
  }

  goToContactPage() {
    this.contact.emit();
  }
}