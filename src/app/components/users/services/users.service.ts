import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiUrl = environment.apiUrl;
  private clearFormSource = new Subject<boolean>();
  clearForm$ = this.clearFormSource.asObservable();

  constructor(
    private http: HttpClient,
  ) {
  }

  clearForm() {
    this.clearFormSource.next(true);
  }

   getUsers(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}`
    ).pipe(map((data: any) => {
      // console.log(data , 'data S')
      return data
    }));
  }

}
