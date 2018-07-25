import { Routes ,RouterModule } from '@angular/router';
import { Messagescomponent } from './../message/messages.component';
import { AuthenticationComponent } from './../auth/authentication.component';
const APP_ROUTES: Routes = [
    { path : '' , redirectTo : '/messages' , pathMatch : 'full'},
    { path: 'messages', component: Messagescomponent },
    { path: 'auth', component: AuthenticationComponent }
];
export const routing = RouterModule.forRoot(APP_ROUTES);
