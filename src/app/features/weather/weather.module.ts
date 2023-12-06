import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherService } from "./services";
import { FormsModule } from "@angular/forms";
import { TimeExtractPipe, WeatherByCodePipe, WeatherByIconPipe } from "./pipes";

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        WeatherRoutingModule
    ],
    declarations: [
        WeatherByCodePipe,
        TimeExtractPipe,
        WeatherByIconPipe,
        WeatherRoutingModule.components
    ],
    providers: [
        WeatherService
    ]
})
export class WeatherModule { }