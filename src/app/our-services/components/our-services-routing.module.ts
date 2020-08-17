import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { WeddingComponent } from './wedding-container/wedding.components';
import { ChristeningComponent } from './christening-container/christening.component';
import { EvenimentsComponent } from './eveniments-container/eveniments.component';

// Resolver
import { OurServicesResolver } from '../services/our-services-resolver.service';

const routes: Routes = 
[
  {
    path: '',
    children: [
      {
        path: '1',
        component: WeddingComponent,
      },
      {
        path: '2',
        component: ChristeningComponent,
      },
      {
        path: '3',
        component: EvenimentsComponent,
      }
    ],
    resolve: { response: OurServicesResolver}
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServicesRoutingModule {}



