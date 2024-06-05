import { Component } from '@angular/core';
import { RootService } from '../../providers/services/root.service';
interface IStyle {
  [prop: string]: string
}
@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  protected isActive: boolean = false;
  protected currentStyles: IStyle = {};
  text: string;
  constructor(private service: RootService){
    this.text = service.persistentData;

  }
  setCurrentStyles(){
    this.currentStyles = {
      'color': this.isActive ? 'red' : 'black'
    };
  }
  toggleActive = () => {
    this.isActive = !this.isActive;
    this.setCurrentStyles();
  }
}
