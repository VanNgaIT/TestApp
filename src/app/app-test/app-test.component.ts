import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-app-test',
  imports: [FormsModule, NgIf, HttpClientModule, NgFor],
  templateUrl: './app-test.component.html',
  styleUrls: ['./app-test.component.scss'],
  standalone : true,
  providers : [UserService]
})
export class AppTestComponent implements OnInit {
  users: any[] = [];
  search: string = ''; 
  selectedUser: any = null;
  showUsersList: boolean = false; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  get filteredUsers() {
    return this.users.filter(user => 
      user.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }

  onUserClick(user: any): void {
    this.selectedUser = user;
  }

  closePopup(): void {
    this.selectedUser = null;
  }
}
