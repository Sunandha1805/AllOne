# `src/app/app.ts`

```typescript id="f1k8mx"
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
```

---

# `src/app/app.html`

```html id="m4v2qt"
<router-outlet></router-outlet>
```

---

# `src/app/app.routes.ts`

```typescript id="x7m1pr"
import { Routes } from '@angular/router';

import { RegisterComponent } from './register/register';
import { LoginComponent } from './login/login';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
    { path: '', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent }
];
```

---

# `src/app/app.config.ts`

```typescript id="p9k4ws"
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideForms } from '@angular/forms';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideForms()
  ]
};
```

---

# `src/app/register/register.ts`

```typescript id="r2m8vx"
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  registerUser() {

    localStorage.setItem('user', JSON.stringify(this.user));

    alert("Registration Successful");

    this.router.navigate(['/login']);

  }

}
```

---

# `src/app/register/register.html`

```html id="u6k1qw"
<div class="container">

    <h2>Register User</h2>

    <form (ngSubmit)="registerUser()">

        <input 
            type="text"
            placeholder="Enter Name"
            [(ngModel)]="user.name"
            name="name"
            required
        >

        <input 
            type="email"
            placeholder="Enter Email"
            [(ngModel)]="user.email"
            name="email"
            required
        >

        <input 
            type="password"
            placeholder="Enter Password"
            [(ngModel)]="user.password"
            name="password"
            required
        >

        <button type="submit">Register</button>

    </form>

    <br>

    <a routerLink="/login">Go to Login</a>

</div>
```

---

# `src/app/register/register.css`

```css id="c5m9pt"
.container {
    width: 300px;
    margin: 80px auto;
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: blue;
    color: white;
    border: none;
}
```

---

# `src/app/login/login.ts`

```typescript id="n8x3wr"
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {

    const userData = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      this.email === userData.email &&
      this.password === userData.password
    ) {

      alert("Login Successful");

      this.router.navigate(['/profile']);

    } else {

      alert("Invalid Credentials");

    }

  }

}
```

---

# `src/app/login/login.html`

```html id="v1m7qs"
<div class="container">

    <h2>Login User</h2>

    <form (ngSubmit)="loginUser()">

        <input 
            type="email"
            placeholder="Enter Email"
            [(ngModel)]="email"
            name="email"
            required
        >

        <input 
            type="password"
            placeholder="Enter Password"
            [(ngModel)]="password"
            name="password"
            required
        >

        <button type="submit">Login</button>

    </form>

</div>
```

---

# `src/app/login/login.css`

```css id="q4k8pv"
.container {
    width: 300px;
    margin: 80px auto;
    text-align: center;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

button {
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background-color: green;
    color: white;
    border: none;
}
```

---

# `src/app/profile/profile.ts`

```typescript id="g7m2wx"
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class ProfileComponent implements OnInit {

  user: any = {};

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

  }

}
```

---

# `src/app/profile/profile.html`

```html id="k3x9mt"
<div class="container">

    <h2>User Profile</h2>

    <table>

        <tr>
            <th>Name</th>
            <td>{{user.name}}</td>
        </tr>

        <tr>
            <th>Email</th>
            <td>{{user.email}}</td>
        </tr>

    </table>

</div>
```

---

# `src/app/profile/profile.css`

```css id="z6m1qr"
.container {
    width: 400px;
    margin: 80px auto;
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid black;
    padding: 10px;
}
```

---

# Run Project

Open terminal:

```bash id="y8k4ps"
ng serve
```

Open browser:

```text id="t2m7vx"
http://localhost:4200
```
