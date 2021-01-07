import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cloudinaryConfig } from '../../configs/cloudinary.config';

@Injectable({
  providedIn: 'root'
})
export class CustomInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // tslint:disable-next-line: curly
    if (request.url === cloudinaryConfig.UPLOAD_URL) return next.handle(request);

    const copiedReq = request.clone({ withCredentials: true });
    return next.handle(copiedReq);
  }
}
