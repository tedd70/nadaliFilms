import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { GaleryComponent } from './galery-container/galery.component';
import { GaleryResolver } from '../services/galery-resolver.service';

const routes: Routes = [
  { 
    path: '', component: GaleryComponent, 
    resolve: { response: GaleryResolver} 
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GaleryRoutingModule {}



