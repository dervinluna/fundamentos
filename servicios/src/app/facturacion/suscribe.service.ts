import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuscribeService {
  asignarValor(){
    const suscribeObservable = new Observable((observar) => {
      observar.next("*** ANGULAR ***");
    });
    return suscribeObservable;
  }

  constructor() { }
}
