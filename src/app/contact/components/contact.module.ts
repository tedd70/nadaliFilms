import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routing
import { ContactRoutingModule } from "./contact-routing.module";

// Modules
import { SharedModule } from "../../shared/shared.module";

// Components
import { ContactComponent } from "./contact-container/contact.component";
import { AppErrorHandler } from "src/assets/errors/app-error-handler";

@NgModule({
  declarations: [ContactComponent],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  imports: [
    CommonModule,
    SharedModule,
    ContactRoutingModule,
  ],
  exports: [ContactComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ContactModule {}
