import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

// Routing
import { GaleryRoutingModule } from "./galery-routing.module";

// Modules
import { SharedModule } from "../../shared/shared.module";

// Components
import { GaleryComponent } from "./galery-container/galery.component";
import { AppErrorHandler } from "src/assets/errors/app-error-handler";
import { GaleryVideoModalComponent } from './galery-video-modal/galery-video-modal.component';

@NgModule({
  declarations: [GaleryComponent, GaleryVideoModalComponent],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  imports: [
    CommonModule,
    SharedModule,
    GaleryRoutingModule,
  ],
  exports: [GaleryComponent, GaleryVideoModalComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class GaleryModule {}
