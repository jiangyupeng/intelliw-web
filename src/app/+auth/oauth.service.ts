import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
// import {Observable} from 'rxjs';
// import 'rxjs/Rx';
import {OauthToken} from './oauth-token';
import {WebpackResourceLoader} from '@ngtools/webpack/src/resource_loader';

const oauth2 = {
  url: 'http://localhost:9088/oauth/token',
  clientId: 'app',
  clientSecret: '123456'
};

@Injectable()
export class OauthService {
  authKey = 'auth';

  constructor(private http: HttpClient,
              @Inject(PLATFORM_ID) private platformId: any) {
  }

  login2(username: string, password: string): Observable<TokenResponse> {
    const headers = new HttpHeaders(
      {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa(oauth2.clientId + ':' + oauth2.clientSecret)
      }
    );

    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('client_id', oauth2.clientId)
      .set('scope', 'read');

    const options = {headers: headers, params: params};

    return this.http.post<TokenResponse>(oauth2.url, params.toString(), options);

    // .map(
    //   res => {
    //     console.log(res);
    //   }
    // );
  }

  getAuthFromServer(params: HttpParams): Observable<boolean> {
    const headers = new HttpHeaders(
      {
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'Authorization': 'Basic ' + btoa(oauth2.clientId + ':' + oauth2.clientSecret)
      }
    );

    const options = {headers: headers, params: params};

    return this.http.post<TokenResponse>(oauth2.url, params.toString(), options)
      .map((res) => {
        const token = res && res.access_token;

        if (token) {
          this.setAuth(res);
          return true;
        }
        return Observable.throw('授权错误！');
      })
      .catch(error => {
        return new Observable<any>(error);
      });

  }

  // 用户登录获取
  login(username: string, password: string): Observable<boolean> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('client_id', oauth2.clientId)
      .set('scope', 'read');

    // console.log(params.toString());
    return this.getAuthFromServer(params);
  }

  // performs the logout
  logout(): boolean {
    this.setAuth(null);
    return true;
  }

  // 刷新access_token
  refreshToken(): Observable<boolean> {
    const params = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', this.getAuth().refresh_token)
      .set('client_id', oauth2.clientId)
      .set('scope', 'read');

    return this.getAuthFromServer(params);
  }

  setAuth(auth: TokenResponse | null): boolean {
    if (isPlatformBrowser(PLATFORM_ID)) {
      if (auth) {
        localStorage.setItem(this.authKey, JSON.stringify(auth));
      } else {
        localStorage.removeItem(this.authKey);
      }
      return true;
    }
  }

  // Retrieves the auth JSON object (or NULL if none)
  getAuth(): TokenResponse | null {
    if (isPlatformBrowser(PLATFORM_ID)) {
      const a = localStorage.getItem(this.authKey);
      if (a) {
        return JSON.parse(a);
      }
    }
    return null;
  }

  // Returns TRUE if the user is logged in, FALSE otherwise.
  isLoggin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.authKey) != null;
    }
    return false;
  }

}
