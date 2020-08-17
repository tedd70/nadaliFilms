import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

// Services
import { GaleryService } from './galery.service';

@Injectable({ providedIn: "root" })

export class GaleryResolver implements Resolve<any> {
  constructor(
    private galeryService: GaleryService,
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    const galeryInfoData = await this.getGaleryDataResponse();

    return galeryInfoData;
  }

  private async getGaleryDataResponse() {
    return this.galeryService.getGaleryData().toPromise();
  }
}
