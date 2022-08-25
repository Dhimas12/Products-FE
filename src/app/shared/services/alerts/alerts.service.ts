import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  async mixin(text:string, icon:SweetAlertIcon, timer:number = 2000){
    const Toast = Swal.mixin({
      icon:icon,
      toast: true,
      position: 'top-end',
      timer: timer,
      timerProgressBar: true,
      showConfirmButton:false
    })

    return await Toast.fire(text)
  }

}
