import { AfterContentInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective implements AfterContentInit {

  constructor(private el: ElementRef) { }

  capitalize = (word: string) =>  word.charAt(0).toLocaleUpperCase() + word.slice(1);

  ngAfterContentInit() {
    const text: string   = this.el.nativeElement.innerHTML;
    this.el.nativeElement.textContent = text.split(" ").map((word) => this.capitalize(word)).join(" ");
  }

}
