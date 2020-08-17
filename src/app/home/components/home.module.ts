import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Routing
import { HomeRoutingModule } from "./home-rounting.module";

// Modules
import { SharedModule } from "../../shared/shared.module";
import { ContactModule } from 'src/app/contact/components/contact.module';

// Components
import { HomeComponent } from "./home-container/home.component";
import { AppErrorHandler } from "src/assets/errors/app-error-handler";
import { AboutUsComponent } from '../components/about-us/about-us.component';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    ContactModule
  ],
  exports: [HomeComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomeModule {}
