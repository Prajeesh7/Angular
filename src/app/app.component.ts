import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  imports: [
    RouterOutlet,
    FormsModule
  ]
})
export class AppComponent {

  title = 'project1';
  name ='String interpolation'
  password = 'Password'
  buttonClick = true

  sample(){
    alert("Button clicked")
  }
}
