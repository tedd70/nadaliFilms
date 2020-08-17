import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { ContactComponent } from './contact-container/contact.component';

// Resolver
import { ContactResolver } from '../services/contact-resolver.service';

const routes: Routes = [
  { 
    path: '', component: ContactComponent, 
    resolve: { response: ContactResolver} 
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}



