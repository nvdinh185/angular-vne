import { Component } from '@angular/core';

@Component({
    selector: 'app-ngform',
    template: `
        <p>This is ngForm</p>
        <form (ngSubmit)="onSubmit(SignInForm)" #SignInForm="ngForm">
            <input placeholder="Email" ngModel #txtEmail="ngModel" name="email" required email />
            <p *ngIf="txtEmail.errors?.required && txtEmail.touched">
            Email is required
            </p>
            <p *ngIf="txtEmail.errors?.email && txtEmail.touched">
            Email is invalid
            </p>
            <br />
            <input 
                type="password"
                placeholder = "Password"
                ngModel
                #txtPassword = "ngModel"
                name="password"
                minlength = "6"
                pattern = "[a-z]*"
            />
            <br /><br />
            <div ngModelGroup="subjects">
                <label><input type="checkbox" [ngModel]="false" name="NodeJS">NodeJS</label>
                <label><input type="checkbox" [ngModel]="false" name="Angular">Angular</label>
                <label><input type="checkbox" [ngModel]="false" name="ReactJS">ReactJS</label>
            </div>
            <button [disabled]="SignInForm.invalid">Submit</button>
        </form>
        <p>{{ txtEmail.errors | json }}</p>
        <p>{{ txtPassword.errors | json }}</p>
        <p>{{ SignInForm.value | json }}</p>
  `,
})
export class ngForm {
    onSubmit(SignInForm) {
        console.log(SignInForm);
        throw new Error("Form is invalid!");
    }
}
