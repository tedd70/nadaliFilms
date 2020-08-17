import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routing
import { OurServicesRoutingModule } from "./our-services-routing.module";

// Modules
import { SharedModule } from "../../shared/shared.module";

// Components
import { WeddingComponent } from "./wedding-container/wedding.components";
import { ChristeningComponent } from './christening-container/christening.component';
import { EvenimentsComponent } from './eveniments-container/eveniments.component';

import { AppErrorHandler } from "src/assets/errors/app-error-handler";

@NgModule({
  declarations: [WeddingComponent, ChristeningComponent, EvenimentsComponent],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  imports: [
    CommonModule,
    SharedModule,
    OurServicesRoutingModule,
  ],
  exports: [WeddingComponent, ChristeningComponent, EvenimentsComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class OurServicesModule {}
