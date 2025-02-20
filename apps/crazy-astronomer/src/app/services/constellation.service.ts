import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CONSTELLATIONS } from '../mocks/constellations.mock';
import { Star } from '../interfaces/star.interface';
import { STARS } from '../mocks/stars.mock';
import { Observable, of, Subject } from 'rxjs';
import { Constellation } from '../interfaces/constellation.interface';

@Injectable({
  providedIn: 'root',
})
export class ConstellationService {
  router: Router = inject(Router);
  private activeConstellation: Constellation = CONSTELLATIONS[0];
  activeConstellation$ =new  Subject<Constellation>();
  //activeStar: Star;
  navigateToConstellation(id: string) {
    this.router.navigate(['/constellations', id]);
  }
  getConstellation(abbr: string): Constellation {
    this.activeConstellation =
      CONSTELLATIONS.find((obj) => obj.abbr === abbr) ?? CONSTELLATIONS[0];
    this.activeConstellation$.next(this.activeConstellation);
    return this.activeConstellation;
  }
  getStarsfromConst(abbr: string): Star[] {
    return STARS.filter((obj) => obj.con === abbr);
  }
  getActiveConstellation$(): Observable<Constellation>{
    return this.activeConstellation$;
  }
}
