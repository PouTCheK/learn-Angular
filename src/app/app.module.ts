import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { UserViewComponent } from './user-view/user-view.component';

import { UserService } from './services/user.service';
import { UserComponent } from './user/user.component';
import { SingleUserViewComponent } from './single-user-view/single-user-view.component';
import { AuthService } from './services/auth.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';

const appRoutes: Routes = [
  { path: 'users', canActivate:[AuthGuard], component: UserViewComponent},
  { path: 'users/:id', canActivate:[AuthGuard], component: SingleUserViewComponent},
  { path: 'auth', component: AuthComponent},
  { path: '', component: UserViewComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    UserViewComponent,
    UserComponent,
    SingleUserViewComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
