import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users:Observable<any[]> = new Observable<any[]>();

  constructor(private userService: UserService) {
   }

  ngOnInit(): void {
    /*this.userService.getAllGithubUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });*/

    this.users = this.userService.getAllGithubUsers();
  }

}
