import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sample-component.component.html',
  styleUrl: './sample-component.component.css'
})
export class SampleComponentComponent {

  num = 20
  values = ['prajeesh','Deepak','rahul']
  object = [{name:'Prajeesh',place:'kerala'},{name:'Deepak',place:'kerala'}]

}
