import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { UserService } from './user.service';

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
      const user = await (await this.userService.getByID(userID)).toPromise();
      // tslint:disable-next-line: curly
      if (!user) this.router.navigateByUrl('/notfound');

      return user;
    } catch (err) {
      console.error(err);
      this.router.navigateByUrl('/notfound');
    }
  }
}
