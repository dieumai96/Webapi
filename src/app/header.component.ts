import { Component } from '@angular/core';
@Component({
    selector  : 'app-header',
    template : `
        <header class="row">
            <div class="col-md-8 col-md-offset-2">
                <ul>
                    <li routerLinkActive = "active"><a [routerLink]="['/auth']">Authentication</a></li>
                    <li routerLinkActive = "active"><a [routerLink]="['/messages']">Message</a></li>
                </ul>
           </div>
           </header>
    `, styles: ['ul { list-style: none }' , 'ul li { display : inline-block}']
})
export class HeaderComponent {

}