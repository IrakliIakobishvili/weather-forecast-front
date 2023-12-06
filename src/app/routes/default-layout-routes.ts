import { Routes } from "@angular/router";

export const DEFAULT_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "/weather",
    pathMatch: "full",
  },
  {
    path: "weather",
    loadChildren: () => import("@features/weather/weather.module").then((m) => m.WeatherModule),
    data: { preload: true },
  },
];