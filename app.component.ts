import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';

  list:string[]=[];
  msg: string='Hello!';
  
  sayHi(){
    this.list =[];
    this.msg;
    for(let i=0; i<this.msg.length;i++){
      this.list.push(this.msg[i]);
    }
  }
}   






