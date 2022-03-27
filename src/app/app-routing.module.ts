import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: 'users',
        canActivate:[AuthGuard],
        loadChildren: () => import('./users/users.module')
            .then(m => m.UsersModule),
    },
    {
        path: 'auth',
        component: SigninComponent,
        children: [
            {
                path: '',
                component: SigninComponent,
            },
            {
                path: 'login',
                component: SigninComponent,
            },
            {
                path: 'register',
                component: SignupComponent,
            },
        ],
    },
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: '**', redirectTo: 'users' },
];

const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}