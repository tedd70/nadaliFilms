import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
// import "rxjs/add/operator/catch";
// import "rxjs/add/observable/throw";
import { AppError } from "src/assets/errors/app-error";
import { NotFoundError } from "src/assets/errors/not-found-error";
import { AboutUsInterface } from '../business/interfaces/about-us.interface';
import { BoxServicesInterface } from '../business/interfaces/box-services.interface';
import { HomeInterface } from '../business/interfaces/home.interface';

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  // public getAboutUsInfo(): Observable<AboutUsInterface[]> {
  //   return this.http.get<AboutUsInterface[]>('./assets/mocks/about-us.json');
  // }

  // public getBoxServicesInfo(): Observable<BoxServicesInterface[]> {
  //   return this.http.get<BoxServicesInterface[]>('./assets/mocks/box.json')
  // }

  public getHomeData(): Observable<HomeInterface[]> {
    return this.http.get<HomeInterface[]>('./assets/mocks/home.json')
  }
}
