import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    //AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProjectsComponent },
      { path: 'p1', component: P1Component },
      { path: 'p2', component: P2Component },
      //{ path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
