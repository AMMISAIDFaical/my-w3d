import { AuthGuard } from './services/auth.guard';
import { HomeworkService } from './services/homework.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { TeacherSpaceComponent } from './teacher-space/teacher-space.component';
import { MySpaceComponent } from './my-space/my-space.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowComponent } from './show/show.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    TeacherSpaceComponent,
    MySpaceComponent,
    NavBarComponent,
    ShowComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
   ],
  providers: [HomeworkService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
