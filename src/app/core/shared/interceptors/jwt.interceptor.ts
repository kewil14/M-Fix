import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private localStorageService: LocalStorageService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var auth = this.localStorageService.currentTokenValue;
        const xhr = request.clone({ headers: request.headers.set('authorization', `${auth.prefix}${auth.jwt}`) });
        return next.handle(xhr);
    }
}
