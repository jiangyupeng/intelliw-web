import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {config} from '../../shared/tiadmin.config';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class JsonApiService {

  constructor(private http: HttpClient) {
  }

  public fetch(url): Observable<any> {
    return this.http.get(this.getBaseUrl() + config.API_URL + url)
      // .delay(100)
      .map((data: any) => (data.data || data))
      .catch(this.handleError);
  }

  private getBaseUrl() {
    // return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
    return 'http://localhost:9088/';
  }

  // private updateHeaders(headers?: Headers) {
  //   headers = headers || new Headers();
  //
  //   if (this.authenticationStateService.isAuthenticated() && !headers.has('Authorization')) {
  //     headers.append('Authorization', 'Bearer ' + this.authenticationStateService.getToken());
  //   }
  //   return headers;
  // }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}


