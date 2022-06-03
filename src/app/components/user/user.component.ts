import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  name : any;
  email: any;
  phone: any;
  cpf  : any;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.showUsers();
  }

  showUsers(): void {
    this.userService.list()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const user = {
      name : this.name,
      email: this.email,
      phone: this.phone,
      cpf  : this.cpf
    };
    console.log(user);
    this.userService.create(user)
      .subscribe(
        response => {
          console.log(response);
          this.showUsers();
          this.router.navigate(['/userlist']);
        },
        error => {
          console.log(error);
        });
  }
}
