import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  user: any = {};
  bgColor: string = '';

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  // to get a random user from all users
  getUsers() {
    this.api.getAllUsers().subscribe((data: any) => {
      this.users = data.users;
      this.getRandomUser();
    });
  }

  // get one random user
  getRandomUser() {
    var index = Math.floor(Math.random() * this.users.length - 1) + 1;
    this.user = this.users[index];
    this.bgColor = Math.floor(Math.random() * 16777215).toString(16);
  }
}
