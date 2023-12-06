
import { NgModule, Optional, SkipSelf, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NGXLogger } from 'ngx-logger';
// import { AppInitService, ConfigService, EnvConfigurationService, AppConfigService } from '@core/services';
// import { httpInterceptorProviders } from '@core/interceptors';
import { throwIfAlreadyLoaded } from '@core/guards';
import * as fromComponents from './components';
// import {CacheMapService} from '@core/services';
// import{Cache} from '@core/models';
// import {GlobalErrorHandler} from '@core/handlers';

// import {ToastrModule} from 'ngx-toastr';
import {RouterModule} from "@angular/router";
// import { HelpCloseComponent } from './components/help/help-close/help-close.component';
// import { HelpContentComponent } from './components/help/help-content/help-content.component';
// import { HelpFormComponent } from './components/help/help-form/help-form.component';
// import { HelpListComponent } from './components/help/help-list/help-list.component';
import {ReactiveFormsModule} from "@angular/forms";
/////////////////////////////////// როუტერ აუტლეტის კორე მოდულში გამოყენების მერე დამჭირდა //გადატანაშეიძელაბ1

// const initializeApp = (appInitService: AppInitService) => {
//     return (): Promise<any> => {
//       return appInitService.Init();
//     }
// }

// const loadConfig = (configService: ConfigService) => {
//   // return () => configService.load();
//   return (): Promise<any> => {
//     return configService.load().then(res => {
//       console.log(res);
//     });
//   }
// }

// // ერთი კონფიგ ინიციალიზერი დატოვე ბოლოს!!!!!
// const appInitializerAppConfig = (configService: AppConfigService) => {
//   return () => {
//     return configService.setConfig();
//   };
// };


@NgModule({
  declarations: [
    ...fromComponents.components,
    // HelpCloseComponent,
    // HelpContentComponent,
    // HelpFormComponent,
    // HelpListComponent,
  ],
  providers: [
    // httpInterceptorProviders,
    // {
    //     provide: NGXLogger,
    //     useClass: NGXLogger
    // },

    // CacheMapService,
    // { provide: Cache, useClass: CacheMapService },

    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (envConfigService: EnvConfigurationService) => () => envConfigService.load().toPromise(),
    //   deps: [EnvConfigurationService],
    //   multi: true
    // },

    // {
    //     provide: APP_INITIALIZER,
    //     useFactory: initializeApp,
    //     deps: [AppInitService],
    //     multi: true
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: loadConfig,
    //   deps: [ConfigService],
    //   multi: true
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializerAppConfig,
    //   multi: true,
    //   deps: [AppConfigService]
    // },

    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler
    // },

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: OfflineInterceptor,
    //   multi: true
    // },
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-right'
    // }),
    RouterModule,
    ReactiveFormsModule
  ],
  exports: []
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      console.log('CoreModule Loaded');
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}