# Angular2 Training 
by Rangle.IO {.subtitle}

## Why Angular?

Angular 2 is a more streamlined framework that allows programmers to focus on simply building JavaScript classes. Views and controllers are replaced with components, which can be described as a refined version of directives. Even experienced Angular programmers are not always aware of all the capabilities of Angular 1.x directives. Angular 2 components are considerably easier to read, and their API features less jargon than Angular 1.x's directives. Additionally, to help ease the transition to Angular 2, the Angular team has added a `.component` method to Angular 1.5, which has been [back-ported by community member Todd Motto to v1.3](https://toddmotto.com/angular-component-method-back-ported-to-1.3/).

By focusing on making the framework easier for computers to process, Angular 2 allows for a much richer development ecosystem. Programmers using sophisticated text editors (or IDEs) will notice dramatic improvements with auto-completion and type suggestions. These improvements help to reduce the cognitive burden of learning Angular 2. Fortunately for traditional ES5 JavaScript programmers this does _not_ mean that development must be done in TypeScript or ES2015: programmers can still write vanilla JavaScript that runs without transpilation.

Angular 2 was designed for mobile from the ground up. Aside from limited processing power, mobile devices have other features and limitations that separate them from traditional computers. Touch interfaces, limited screen real estate and mobile hardware have all been considered in Angular 2.

Angular 2.x makes use of the ES2015 module system, and modern packaging tools like webpack or SystemJS. Modules are far less coupled to the "Angular way", and it's easier to write more generic JavaScript and plug it into Angular. The removal of minification workarounds and the addition of rigid prescriptions make maintaining existing applications simpler. The new module system also makes it easier to develop effective tooling that can reason better about larger projects.

Some of the other interesting features in Angular 2 are:

-   Form Builder
-   Change Detection
-   Templating
-   Routing
-   Annotations
-   Observables
-   Shadow DOM

## Bootstrapping an Angular Application

```javascript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

Why does Angular bootstrap itself in this way? Well there is actually a very good reason. Since ==Angular is not a web-only based framework==, we can write components that will run in NativeScript, or Cordova, or any other environment that can host Angular applications.

The magic is then in our bootstrapping process - we can import which platform we would like to use, depending on the environment we're operating under. In our example, since we were running our Angular application in the browser, we used the bootstrapping process found in  `@angular/platform-browser-dynamic`.

It's also a good idea to leave the bootstrapping process in its own separate  _main.ts_  file. This makes it easier to test (since the components are isolated from the  `bootstrap`call), easier to reuse and gives better organization and structure to our application.


## Forms

Angular 2 is much more flexible than Angular 1.x for handling forms — we are no longer restricted to relying solely on ngModel. Instead, we are given degrees of simplicity and power, depending on the form's purpose.

- **Template-Driven Forms**, places most of the form handling logic within that form's template
- **Reactive Forms**, places form handling logic within a component's class properties and provides interaction through observables

### Template-Driven Forms

_signup-form.component.html_

```html
<form #signupForm="ngForm" (ngSubmit)="registerUser(signupForm)">
  <label for="email">Email</label>
  <input type="text" name="email" id="email" ngModel>

  <label for="password">Password</label>
  <input type="password" name="password" id="password" ngModel>

  <button type="submit">Sign Up</button>
</form>
```

_signup-form.component.ts_

```javascript
import { NgForm } from '@angular/forms';
...
export class SignupFormComponent {
  registerUser(form: NgForm) {
    console.log(form.value);
  }
}
```

#### Nesting Form Data

When building a template-driven form in Angular, we can lean on the `ngModelGroup` directive to arrive at a cleaner implementation, while Angular does the heavy lifting of converting form-fields into nested data.

```html
  <fieldset ngModelGroup="contact">
    <legend>Contact</legend>

    <label>
      First Name <input type="text" name="firstname" ngModel>
    </label>
```

#### Using Template Model Binding

```html
<form #signupForm="ngForm" (ngSubmit)="register(signupForm)">
  <label for="username">Username</label>
  <input type="text" name="username" id="username" [(ngModel)]="username">
```

#### Validating Template-Driven Forms

Using the template-driven approach, form validation is a matter of following HTML5 practices:

```html
<!-- a required field -->
<input type="text" required>

<!-- an optional field of a specific length -->
<input type="text" pattern=".{3,8}">

<!-- a non-optional field of specific length -->
<input type="text" pattern=".{3,8}" required>

<!-- alphanumeric field of specific length -->
<input type="text" pattern="[A-Za-z0-9]{0,5}">
```

Note that the `pattern` attribute is a less-powerful version of JavaScript's RegEx syntax.

### Reactive/Model-Driven Forms

While using directives in our templates gives us the power of rapid prototyping without too much boilerplate, we are restricted in what we can do. Reactive forms on the other hand, lets us define our form through code and gives us much more flexibility and control over data validation.

There is a little bit of magic in its simplicity at first, but after you're comfortable with the basics, learning its building blocks will allow you to handle more complex use cases.

#### Reactive Forms Basics

For this, we need to ensure that the `ReactiveFormsModule` was imported in the bootstrap phase of the application module.

```javascript
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export class AppComponent {
  username = new FormControl('')
  password = new FormControl('')

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) { }

  login() {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }
```

_app/login-form.component.html_

```
<form [formGroup]="loginForm" (ngSubmit)="login()">
  <label for="username">username</label>
  <input type="text" name="username" id="username" [formControl]="username">
  <br>

  <label for="password">password</label>
  <input type="password" name="password" id="password" [formControl]="password">
  <br>

  <button type="submit">log in</button>
</form>
```

The form fields can otherwise be reached in the template by using `loginForm.controls.username` and `loginForm.controls.password`. Likewise, any instance of FormControl in this situation can access its parent group by using its `.root` property (e.g. `username.root.controls.password`).
