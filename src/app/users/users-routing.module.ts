import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { SingleUserViewComponent } from './single-user-view/single-user-view.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../services/auth-guard.service';

const routes: Routes = [{
    path: '',
    component: UsersComponent,
    children: [
        {
            path: 'list',
            component: UsersListComponent
        },
        {
            path: 'new',
            component: UsersFormComponent
        },
        {
            path: ':id',
            component: SingleUserViewComponent
        },
        {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          },
          {
            path: '**',
            component: NotFoundComponent,
          },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {

}