import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

// Services
import { HomeService } from "./home.service";

@Injectable({ providedIn: "root" })
export class HomeResolver implements Resolve<any> {
  constructor(
    private homeService: HomeService,
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    // const aboutUsInfoData = await this.getAboutUsInfoResponse();
    // const boxServicesInfoData = await this.getBoxServicesInfoResponse();
    // console.warn(aboutUsInfoData)
    // return aboutUsInfoData && boxServicesInfoData;
    
    const homeInfoData = await this.getHomeDataResponse();
    return homeInfoData;
  }

  // private async getAboutUsInfoResponse() {
  //   return this.homeService.getAboutUsInfo().toPromise();
  // }

  // private async getBoxServicesInfoResponse() {
  //   return this.homeService.getBoxServicesInfo().toPromise();
  // }

  private async getHomeDataResponse() {
    return this.homeService.getHomeData().toPromise();
  }
}
