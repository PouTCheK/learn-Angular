import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: any[] | undefined;
  usersSubscription: Subscription | undefined;
  constructor(private userService: UserService) {
    
  }

  ngOnInit(): void {
    this.usersSubscription = this.userService.userSubject.subscribe(
      (users: any[]) => {
        this.users = users;
      }
    )
    this.userService.emitUserSubject();
  }
}
