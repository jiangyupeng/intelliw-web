import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {OauthService} from '../+auth/oauth.service';

@Injectable()
export class AuthResponseInterceptor implements HttpInterceptor {

  currentRequest: HttpRequest<any>;
  auth: OauthService;

  constructor(private injector: Injector) {
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth = this.injector.get(OauthService);
    const accessToken = this.auth.isLoggin() ? this.auth.getAuth() : null;

    if (accessToken) {
      this.currentRequest = req;

      return next.handle(req)
        .do((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            console.log('------- instanceof HttpResponse --------');
            // do nothing
          }
        })
        .catch(error => this.handleError(error, next));
    } else {
      return next.handle(req);
    }
  }

  handleError(err: any, next: HttpHandler) {

    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        console.log('Token expired. Attempting refresh...');
        let previousRequest = this.currentRequest;

        return this.auth.refreshToken()
          .flatMap((refreshed) => {
              const accessToken = this.auth.isLoggin() ? this.auth.getAuth() : null;
              if (accessToken) {
                previousRequest = previousRequest.clone(
                  {
                    setHeaders: {Authorization: `Bearer ${accessToken}`}
                  }
                );
                console.log('header token reset');
              }

              return next.handle(previousRequest);
            }
          );
      }
    }

    return Observable.throw(err);
  }

}
