import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutComponent } from 'src/components/about/about.component';
import { RealisationsComponent } from 'src/components/realisations/realisations.component';
import { StudioComponent } from 'src/components/studio/studio.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { AgendaComponent } from 'src/components/agenda/agenda.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { FooterComponent } from 'src/components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'realisaties', component: RealisationsComponent },
  { path: 'studio', component: StudioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'agenda', component: AgendaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    RealisationsComponent,
    StudioComponent,
    ContactComponent,
    AgendaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
