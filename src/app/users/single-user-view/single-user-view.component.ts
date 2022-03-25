import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-single-user-view',
  templateUrl: './single-user-view.component.html',
  styleUrls: ['./single-user-view.component.css']
})
export class SingleUserViewComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = new User('', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.userService.getSingleUserFromServer(+id).then(
      (user: User) => {
        this.user = user;
      }
    );
  }

}
