import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenancePageComponent } from './maintenance-page/maintenance-page.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    MaintenancePageComponent,
  ],
  exports: [
    MaintenancePageComponent,
  ]
})
export class SharedModuleModule { }
