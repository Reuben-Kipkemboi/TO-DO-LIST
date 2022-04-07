import { Directive, ElementRef, HostListener } from '@angular/core'; //ElementRef to inject a reference to the host DOM element 

@Directive({
  selector: '[appCross]'
})
export class CrossDirective {


  constructor(private elem:ElementRef) { 
    // this.elem.nativeElement.style.textDecoration='line-through';
  }

  

  @HostListener("click") onClicks(){
    this.crossAfterCompletion("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.crossAfterCompletion("None")
  }
  private crossAfterCompletion(action:string){
    this.elem.nativeElement.style.textDecoration=action;

    
  }

}
