import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';

import { UserService } from './services/user.service';
import { SingleUserViewComponent } from './users/single-user-view/single-user-view.component';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { HomeViewComponent } from './home-view/home-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';

const appRoutes: Routes = [
  { path: 'users', canActivate:[AuthGuard], component: UsersListComponent},
  { path: 'users/new', canActivate:[AuthGuard], component: UsersFormComponent},
  { path: 'users/:id', canActivate:[AuthGuard], component: SingleUserViewComponent},
  { path: 'auth/signup', component: SignupComponent},
  { path: 'auth/signin', component: SigninComponent},
  { path: '', component: HomeViewComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SingleUserViewComponent,
    NotFoundComponent,
    HomeViewComponent,
    SigninComponent,
    SignupComponent,
    UsersListComponent,
    UsersFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }