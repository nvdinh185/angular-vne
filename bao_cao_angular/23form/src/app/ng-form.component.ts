import { Component } from '@angular/core';

@Component({
  selector: 'app-ngform',
  template: `
        <p>This is ngForm</p>
        <form (ngSubmit)="onSubmit(SignInForm)" #SignInForm="ngForm">
            <input placeholder="Email" ngModel name="email" required />
            <p *ngIf="SignInForm.controls.email?.errors?.required">
            Email is invalid
            </p>
            <br />
            <input type="password" placeholder = "Password" ngModel name="password" />
            <br /><br />
            <button [disabled]="SignInForm.invalid">Submit</button>
        </form>
  `,
})
export class ngForm {
    onSubmit(SignInForm){
        console.log(SignInForm);
        throw new Error("Form is invalid!");
    }
}
