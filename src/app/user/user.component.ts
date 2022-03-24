import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() lastNameUser: string | undefined;
  @Input() firstNameUser: string | undefined;
  @Input() indexUser: number | undefined;
  @Input() id: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
