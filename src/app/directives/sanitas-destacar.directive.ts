import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[sanitas-destacar]"
})
export class SanitasDestacarDirective {

  constructor(
    private elementRef: ElementRef, private renderer: Renderer2
  ) {
      renderer.setStyle(elementRef.nativeElement, "color", "blue");
      renderer.setStyle(elementRef.nativeElement, "font-size", "50px");
      // renderer.setStyle(elementRef.nativeElement, "border", "2px solid blue");
  }

}
