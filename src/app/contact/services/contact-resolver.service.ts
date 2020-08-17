import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

// Services
import { ContactService } from "./contact.service";

@Injectable({ providedIn: "root" })
export class ContactResolver implements Resolve<any> {
  constructor(
    private contactService: ContactService,
  ) {}

  async resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
  }
}
