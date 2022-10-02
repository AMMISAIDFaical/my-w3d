import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MySpaceComponent } from './my-space/my-space.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthGuard } from './services/auth.guard';
import { AuthService } from './services/auth.service';
import { HomeworkService } from './services/homework.service';
import { TeacherSpaceComponent } from './teacher-space/teacher-space.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'my-space',
    component: MySpaceComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'teacher-space',
    component: TeacherSpaceComponent,
    canActivate:[AuthGuard]
  },
  { path: 'nav-bar', component: NavBarComponent },
];

@NgModule({
  providers: [HomeworkService,AuthService,AuthGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
