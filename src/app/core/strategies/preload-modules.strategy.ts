import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export class AppCustomPreloader implements PreloadingStrategy {
    preload(route: Route, load: () => Observable<any>): Observable<any> {
      const loadRoute = (delay: number) =>
        delay
          ? timer(delay).pipe(switchMap(() => load()))
          : load();
  
      return route.data && route.data['preload']
        ? loadRoute(route.data['delay'] || 0)
        : of(null);
    }
}