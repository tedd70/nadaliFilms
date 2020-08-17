import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

// Components
import { HeaderComponent } from "../shared/components/header/header.component";
import { MenuComponent } from '../shared/components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
// import { NavComponent } from "../shared/components/nav/nav.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { BoxComponent } from './components/box/box.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scrollToTop/scroll.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CarouselComponent,
    // NavComponent,
    // ModalComponent,
    SpinnerComponent,
    BoxComponent,
    ContactFormComponent,
    FooterComponent,
    ScrollTopComponent,
    // FormComponent,
    // ReactiveFormComponent,
    VideoModalComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    MatIconModule,
    CarouselComponent,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    // NavComponent,
    // ModalComponent,
    SpinnerComponent,
    BoxComponent,
    ContactFormComponent,
    FooterComponent,
    ScrollTopComponent,
    VideoModalComponent
    // FormComponent,
    // ReactiveFormComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
