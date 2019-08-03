import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'client-selection',
    pathMatch: 'full'
  },
  { 
    path: 'client-selection', 
    loadChildren: './client-selection/client-selection.module#ClientSelectionPageModule' 
  },
  { path: 'company-login', 
    loadChildren: './company-login/company-login.module#CompanyLoginPageModule'
  },
  { path: 'company-registration',
    loadChildren: './company-registration/company-registration.module#CompanyRegistrationPageModule' },
/*  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  }, */
  
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'company-login', loadChildren: './company-login/company-login.module#CompanyLoginPageModule' },
  
  { path: 'employee-login', loadChildren: './employee-login/employee-login.module#EmployeeLoginPageModule' },
  { path: 'employee-registration', loadChildren: './employee-registration/employee-registration.module#EmployeeRegistrationPageModule' },
  //{ path: 'company', loadChildren: './company/company.module#CompanyPageModule' },
  { path: 'employee', loadChildren: './employee/employee.module#EmployeePageModule' },
  { path: 'company-employee', loadChildren: './company-employee/company-employee.module#CompanyEmployeePageModule' },
  { path: 'c-login-register', loadChildren: './c-login-register/c-login-register.module#CLoginRegisterPageModule' },
  { path: 'e-login-register', loadChildren: './e-login-register/e-login-register.module#ELoginRegisterPageModule' },
  { path: 'company-menu', loadChildren: './company-menu/company-menu.module#CompanyMenuPageModule' },
  { path: 'company-deshboard', loadChildren: './company-deshboard/company-deshboard.module#CompanyDeshboardPageModule' },
  { path: 'menu-pages-company', loadChildren: './menu-pages-company/menu-pages-company.module#MenuPagesCompanyPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'company-profile', loadChildren: './company-profile/company-profile.module#CompanyProfilePageModule' },
  { path: 'company-survey', loadChildren: './company-survey/company-survey.module#CompanySurveyPageModule' },
  { path: 'company-department', loadChildren: './company-department/company-department.module#CompanyDepartmentPageModule' },
  { path: 'company-employees', loadChildren: './company-employees/company-employees.module#CompanyEmployeesPageModule' },
  { path: 'company-feedback', loadChildren: './company-feedback/company-feedback.module#CompanyFeedbackPageModule' },
  //{ path: 'client-selection', loadChildren: './client-selection/client-selection.module#ClientSelectionPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
