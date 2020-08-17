import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { GaleryInterface } from '../business/interfaces/galery.interface';

@Injectable({
  providedIn: "root"
})

export class GaleryService {
  constructor(private http: HttpClient) {}

  public getGaleryData(): Observable<GaleryInterface[]> {
    return this.http.get<GaleryInterface[]>('./assets/mocks/galery.json')
  }
}
