import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

// Services
import { OurServicesService } from "./our-services.service";

@Injectable({ 
  providedIn: "root" 
})

export class OurServicesResolver implements Resolve<any> {
  constructor(
    private ourServicesService: OurServicesService,
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    const ourServicesInfoData = await this.getOurServicesDataResponse();
    
    return ourServicesInfoData;
  }

  private async getOurServicesDataResponse() {
    return this.ourServicesService.getOurServicesData().toPromise();
  }
}
