import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  users!: User[];
  usersSubscribption!: Subscription;

  constructor(private usersService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usersSubscribption = this.usersService.userSubject.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.usersService.getUsersFromServer().then(
      (users: User[]) => {
        this.users = users;
      }
    );
    this.usersService.emitUsers();
  }

  onNewUser() {
    this.router.navigate(['/users', 'new']);
  }

  onDeleteUser(user: User) {
    this.usersService.removeUser(user);
  }

  onViewUser(id: number) {
    this.router.navigate(['/users', 'view', id]);
  }

  ngOnDestroy(): void {
    this.usersSubscribption.unsubscribe();
  }
}
