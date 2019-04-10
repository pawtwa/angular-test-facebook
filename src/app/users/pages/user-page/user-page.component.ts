import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
import { ActivatedRoute } from '@angular/router';
import { timer, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  user: User = null;
  error: any = null;

  destroy$ = new Subject();

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setupUser(this.activatedRoute.snapshot.params.id);
  }

  ngOnDestroy() {
    this.destroy$.next(null);
  }

  private setupUser(id: string) {
    this.usersService.getUserById(id)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (user: User) => {
        console.warn('UserPageComponent user', user);
        this.user = user;
      },
      error: (err) => {
        console.error(err);
        this.user = null;
        this.error = err;
      }
    });
  }
}
