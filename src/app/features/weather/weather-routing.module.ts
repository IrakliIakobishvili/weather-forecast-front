import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';
import * as fromContainers from './containers';

const appRoutes: Routes = [
    {
        path: '',
        children: [
          {
            path: '',
            component: fromContainers.WeatherComponent
          }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class WeatherRoutingModule {
    static components = [
        ...fromContainers.containers,
        ...fromComponents.components
    ];
}