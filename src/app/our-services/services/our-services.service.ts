import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Interfaces
import { OurServicesInterface } from '../business/interfaces/our-services.interface';

@Injectable({
  providedIn: "root"
})

export class OurServicesService {
  constructor(private http: HttpClient) {}

  public getOurServicesData(): Observable<OurServicesInterface[]> {
    return this.http.get<OurServicesInterface[]>('./assets/mocks/our-services.json');
  }
}
