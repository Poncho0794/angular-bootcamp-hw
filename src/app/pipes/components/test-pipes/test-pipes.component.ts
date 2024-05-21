import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  templateUrl: './test-pipes.component.html',
  styleUrl: './test-pipes.component.scss',
})
export class TestPipesComponent {
  protected price: number = 0;
  protected label: string = 'Hello world';
}
