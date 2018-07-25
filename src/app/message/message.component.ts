import { Component  , Input, Output,  EventEmitter  , OnInit} from '@angular/core';
import { Message } from './message';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  constructor() { }
  @Input() message : Message; 
  // @Output() onClickEdit: EventEmitter<string> = new EventEmitter();
  ngOnInit(){
    // console.log(this.message);
  }
  onEdit(){
    // this.onClickEdit.emit('A new Value');
  }
}
