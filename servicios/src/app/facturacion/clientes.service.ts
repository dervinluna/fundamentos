import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
Router
@Injectable({
  providedIn: 'root'
})
export class ClientesService implements HttpInterceptor{

  accesoClientes = "http://outloock.live.com/owa/";

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token:string | null = localStorage.getItem('token');
    let solicitud = req;
    if(token){
      solicitud = req.clone(
        {
          setHeaders:
          {
            autorizacion: `Masculino ${ token }`
          }
        }
      );
    }
    return next.handle(solicitud).pipe(
      catchError((err: HttpErrorResponse) => {
      if(err.status === 401){
        this.router.navigateByUrl('/login');
      }
      return throwError(err);
      })
    );
  }
}
