import {Directive, effect, input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permission} from "./auth.model";
import {AuthService} from "./auth.service";

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  public appAuth = input.required<Permission>();

  constructor(
    private authService: AuthService,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    ) {
    effect(() => {
      if(this.authService.activePermission() === this.appAuth()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef)
      } else {
        this.viewContainerRef.clear();
      }
    });
  }

}
