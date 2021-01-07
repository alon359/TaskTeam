import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { ProjectService } from '../project.service';
import { MemberService } from '../member.service';
import { Project } from 'src/app/models/project.model';


@Injectable({
  providedIn: 'root'
})
export class OneProjectResolveService implements Resolve<any>{

  constructor(private projectService: ProjectService, private router: Router) { }

  async resolve(route: ActivatedRouteSnapshot) {
    const { projectID } = route.params;

    if (!projectID) {
      this.router.navigateByUrl('/notfound');
      return false;
    }

    try {
      const project: Project = await (await this.projectService.getByID(projectID)).toPromise();
      if (!project) this.router.navigateByUrl('/notfound');

      return project;
    } catch (err) {
      console.error(err);
      this.router.navigateByUrl('/notfound');
    }
  }

}
