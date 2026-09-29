import {Directive} from "@angular/core";

@Directive({
  standalone: true,
  selector: 'a[appSafeLink]'
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLink Directive is active')
  }
}
