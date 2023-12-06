import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCustomPreloader } from '@core/strategies';
import { AuthLayoutComponent, DefaultLayoutComponent} from "@core/components";
import { AUTH_ROUTES, DEFAULT_ROUTES } from './routes';

const routes: Routes = [
    { path: '',
      component: DefaultLayoutComponent,
      children: DEFAULT_ROUTES
    },
    { path: 'profile',
      component: AuthLayoutComponent,
      children: AUTH_ROUTES
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: AppCustomPreloader
        })
    ],
    exports: [
        RouterModule
    ],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule { }