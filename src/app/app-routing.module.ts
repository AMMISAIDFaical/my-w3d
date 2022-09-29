import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MySpaceComponent } from './my-space/my-space.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeacherSpaceComponent } from './teacher-space/teacher-space.component';

const routes: Routes = [
  {path:'auth', component:AuthComponent},
  {path:'home', component:HomeComponent},
  {path:'my-space', component:MySpaceComponent},
  {path:'teacher-space', component:TeacherSpaceComponent},
  {path:'nav-bar', component:NavBarComponent},
  {path:'',redirectTo:'/auth', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
