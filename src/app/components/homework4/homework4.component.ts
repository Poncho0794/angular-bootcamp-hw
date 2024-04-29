import { Component } from '@angular/core';

@Component({
  selector: 'homework4',
  templateUrl: './homework4.component.html',
  styleUrl: './homework4.component.scss'
})
export class Homework4Component {

  protected textVariable = "Hello World"
  handleClick = function(){
    alert("I was triggered by an event")
  }
}
