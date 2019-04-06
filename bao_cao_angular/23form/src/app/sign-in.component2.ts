import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in2',
  template: `
        <p>This is Sign in Form2</p>
        <form (submit)="onSubmit(SignInForm)" #SignInForm="ngForm">
            <input placeholder="Email" ngModel name="email" />
            <br /><br />
            <input type="password" placeholder = "Password" ngModel name="password" />
            <br /><br />
            <input type="submit" value="Submit">
        </form>
  `,
})
export class SignInComponent2 {
    onSubmit(SignInForm){
        console.log("sign in form2: ", SignInForm.value.email, SignInForm.value.password);
    }
}
