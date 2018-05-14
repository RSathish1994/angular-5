import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

viewsignup = true;
viewlogin = false;

signup(){
  this.viewsignup = false;
  this.viewlogin = true;
}

signin(){
  this.viewsignup = true;
  this.viewlogin = false;
}

}