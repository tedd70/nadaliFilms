import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// Modules
import { SharedModule } from "./shared/shared.module";
import { HomeModule } from './home/components/home.module';
import { GaleryModule } from './galery/components/galery.module';
import { OurServicesModule } from './our-services/components/our-services.module';
import { ContactModule } from './contact/components/contact.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

// Components
import { AppComponent } from './app.component';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    GaleryModule,
    OurServicesModule,
    ContactModule,
    SharedModule,
    ScrollToModule.forRoot()
  ],
  providers: [ScrollToService],
  bootstrap: [AppComponent]
})
export class AppModule {}
