import { Component, OnInit } from '@angular/core';
import { Message } from './../app/message/message';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [MessageService]
})
export class AppComponent implements OnInit {
  
 ngOnInit(){
  //  console.log(this.messages);
 }
}
