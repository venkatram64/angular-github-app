import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {  

  //user2:Observable<any> = new Observable<any>();
  user: User = new User();

  constructor(private userService: UserService, private route: ActivatedRoute){
  }

  ngOnInit(): void{
    this.route.params.subscribe(params =>{
      const username = params['username'];
      this.getUser(username);
    });
  }

  getUser(username:string){    
    this.userService.getGithubUserByUsername(username).subscribe(data =>{
      //this.user.login = data.login;
      //this.user.avatar_url = data.avatar_url
      this.user = data;
    });
    
  }

  

}
