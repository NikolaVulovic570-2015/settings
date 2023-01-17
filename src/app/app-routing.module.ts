import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { RecruitingComponent } from './recruiting/recruiting.component';

const routes: Routes = [
  {path: 'settings', component: SettingsComponent},
  {path: 'recruiting', component: RecruitingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
