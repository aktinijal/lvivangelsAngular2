import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FileDropModule } from 'angular2-file-drop';

import { AppComponent } from './app.component';
// PAGES conmonents
import { MainComponent } from './components/pages/main/main.component';
import { EventsComponent } from './components/pages/events/events.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FederationComponent } from './components/pages/federation/federation.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { LogInComponent } from './components/pages/log-in/log-in.component';
// LAYUOTS conmonents
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
// MODULES conmonents
import { EventsListComponent } from './components/modules/events-list/events-list.component';
import { PhotosComponent } from './components/modules/photos/photos.component';
import { AddNewComponent } from './components/modules/add-new/add-new.component';
// Services
import { DatabaseService } from './services/database/database.service';
import { ShareService } from './services/share/share.service';
import { AuthService } from './services/auth/auth.service';
// Routes
// import configRoutes from './routes';
// let routes = configRoutes();

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EventsComponent,
    GalleryComponent,
    FederationComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    EventsListComponent,
    PhotosComponent,
    EventsListComponent,
    AddNewComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FileDropModule,
    RouterModule.forRoot([
        {
        path: '',
        component: MainComponent
        },
        {
        path: 'events',
        component: EventsComponent
        },
        {
        path: 'gallery',
        component: GalleryComponent 
        },
        {
        path: 'federation',
        component: FederationComponent
        },
        {
        path: 'contacts',
        component: ContactsComponent
        },
        {
        path: 'login_admin',
        component: LogInComponent
        },
        {
        path: '**', 
        redirectTo: '/',
        }
    ]),
  ],
  providers: [
     DatabaseService,
     ShareService,
     AuthService
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
