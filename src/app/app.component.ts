import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot, RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import { SampleComponentComponent } from "./sample-component/sample-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    
    imports: [
        RouterOutlet,
        FormsModule,
        SampleComponentComponent
    ]
})
export class AppComponent {
  constructor(private data:DataService){}
  increment(){
    console.log(this.data.count++)
  }
  decrement(){
    console.log(this.data.count--)
  }

  title = 'project1';
  name ='String interpolation'
  password = 'Password'
  buttonClick = true

  sample(){
    alert("Button clicked")
  }
  conditions(){
    let num = 50

    if ( num<50 ){
      alert("number is lessthan 50")
    }else{
      alert("number is greaterthan 50")
    }
  }
}
