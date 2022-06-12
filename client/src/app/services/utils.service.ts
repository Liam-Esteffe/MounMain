import { Injectable } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
  export class UtilsService {
    constructor(protected router: Router) { }

    routerComponents(page: string) {
        this.router.navigateByUrl(page);
    }
  
    validRequest(text: string) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: text,
        showConfirmButton: false,
        timer: 1500
      })
    }
  
    LogoutModal() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Etes vous sûr ?',
        text: "Voulez vous vous déconnecter ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Me deconneter',
        cancelButtonText: 'Annuler',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Déconection en cours ...',
            'Vous êtes déconnecter',
            'success'
          )
          window.localStorage.removeItem('token');
          this.routerComponents('/home');
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Annuler',
            'Vous avez encore des choses à faire !',
            'error'
          )
        }
      })
  
    }
  
    checkTokenPathValidation(): boolean {
      if (window.localStorage.getItem('token') == null) {
        this.routerComponents('/admin');
        return false;
      }
      return true;
    }
  
    errorRequest(err: string) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        footer: '<a href="">Why do I have this issue?</a>'
      });
    }
}