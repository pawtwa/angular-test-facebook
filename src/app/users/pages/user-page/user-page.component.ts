import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  user: User = null;
  error: any = null;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupUser(this.activatedRoute.snapshot.params.id);
  }

  private setupUser(id: string) {
    this.usersService.getUserById(id).subscribe({
      next: (user: User) => {
        timer(1000).subscribe((_) => {
          this.user = user;
        })
      },
      error: (err) => {
        console.error(err);
        this.user = null;
        this.error = err;
      }
    });
  }
}
