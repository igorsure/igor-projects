import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Constelation } from '../interfaces/constelation.interface';
import { CONSTELATIONS } from '../mocks/constelations.mock';
import { Star } from '../interfaces/star.interface';
import { STARS } from '../mocks/stars.mock';

@Injectable({
  providedIn: 'root',
})
export class ConstelationService {
  router: Router = inject(Router);
  constelation:Constelation = CONSTELATIONS[0];
  navigateToConstelation(id: string) {

    this.router.navigate(['/constelations', id]);
  }
  getConstelation(abbr:string): Constelation{
    return CONSTELATIONS.find(obj=>obj.abbr===abbr) ??  CONSTELATIONS[0];
  }
  getStarsfromConst(abbr:string): Star[] {
    return STARS.filter(obj=>obj.con===abbr)
  }
}
