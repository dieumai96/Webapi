import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {  FormsModule } from '@angular/forms';

import { UserComponent } from './auth/user.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './../app/message/message-list-component';
import { MessageInputComponent } from './../app/message/message-input.component';
import {Messagescomponent } from './../app/message/messages.component';
import { AuthenticationComponent } from './../app/auth/authentication.component';
import { HeaderComponent } from './../app/header.component';
import { routing } from './routes/app.routing';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MessageComponent,
    MessageListComponent,
    MessageInputComponent,
    Messagescomponent,
    AuthenticationComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
