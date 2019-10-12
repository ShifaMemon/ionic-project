import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  // },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeePageModule' },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'employee-survey', loadChildren: './employee-survey/employee-survey.module#EmployeeSurveyPageModule' },
  { path: 'survey-detail/:id', loadChildren: './survey-detail/survey-detail.module#SurveyDetailPageModule' },
  { path: 'employee-detail', loadChildren: './employee-detail/employee-detail.module#EmployeeDetailPageModule' }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
