import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
// Models
import { User } from 'src/app/models/user.model';
// Services
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<any> {
  constructor(private userService: UserService, private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { userID } = route.params;

    if (!userID) {
      this.router.navigateByUrl('/notfound');
      return false;
    }

    try {
      const user: User = await (await this.userService.getByID(userID)).toPromise();
      if (!user) this.router.navigateByUrl('/notfound');

      return user;
    } catch (err) {
      console.error(err);
      this.router.navigateByUrl('/notfound');
    }
  }
}
