import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WelcomePageComponent } from './Components/welcome-page/welcome-page.component';
import { RouterComponent } from './Components/router/router.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';
import { DemoComponent } from './Components/demo/demo.component';
import { TimeLineComponent } from './Components/time-line/time-line.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  // { path: '', component:RouterComponent  }, // Landing page route
  { path: 'home', component: WelcomePageComponent },
  { path: 'about', component: ProgressBarComponent },
  { path: 'contact', component: DemoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WelcomePageComponent,
    RouterComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    ProgressBarComponent,
    DemoComponent,
    TimeLineComponent,
    LoaderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
