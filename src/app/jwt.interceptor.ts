import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = sessionStorage.getItem('access_token');
        if (token) {
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
