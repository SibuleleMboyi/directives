import {Directive, HostListener} from "@angular/core";

@Directive({
  standalone: true,
  selector: 'a[appSafeLink]',
  // Remove this 'host' attribute if you want to use the
  // Second method with @HostListener
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
  constructor() {
    console.log('SafeLink Directive is active')
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you want to leave the app')
    if(wantsToLeave) {
      return;
    }

    event?.preventDefault();
  }

  // @HostListener('click', ['$event'])
  // onConfirmLeavePage(event: MouseEvent) {
  //   console.log('Clicked')
  //   const wantsToLeave = window.confirm(
  //     'Do you want to leave the app?'
  //   );
  //
  //   if (!wantsToLeave) {
  //     event.preventDefault();
  //   }
  // }
}
