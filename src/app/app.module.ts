import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeatureComponent } from './components/feature/feature.component';
import { AboutComponent } from './components/about/about.component';
import { InstructorCardsComponent } from './components/about/instructor-cards/instructor-cards.component';
import { ClassComponent } from './components/class/class.component';
import { ClassCardsComponent } from './components/class/class-cards/class-cards.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FeatureComponent,
    AboutComponent,
    InstructorCardsComponent,
    ClassComponent,
    ClassCardsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
