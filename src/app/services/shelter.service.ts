import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Shelter} from "../models/shelter.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class ShelterService {
  constructor(private httpClient: HttpClient) {

  }

  shelters(): Observable<Shelter[]> {
    return this.httpClient.get<Shelter[]>(`${environment.apiUrl}/rest/shelter`);
  }

  create(newShelter: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/rest/subscribe`, newShelter);
  }

  changeAvailability(id: any): Observable<any> {
    return this.httpClient.put<any>(`${environment.apiUrl}/rest/shelter/${id}/change-availability`,{});
  }

}
