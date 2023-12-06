import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

export const components: any[] = [
  DefaultLayoutComponent,
  AuthLayoutComponent
];

export * from './layouts/default-layout/default-layout.component';
export * from './layouts/auth-layout/auth-layout.component';