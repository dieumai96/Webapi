import { Component } from '@angular/core';
@Component({
    selector  : 'app-authentication',
    template : `
    <header class="row">
    <div class="col-md-8 col-md-offset-2">
        <ul>
            <li routerLinkActive = "active"><a [routerLink]="['/messages']">SignIn</a></li>
            <li routerLinkActive = "active"><a [routerLink]="['/auth']">SignUp</a></li>
        </ul>
   </div>
   </header>
    `    
    
})
export class AuthenticationComponent {

}