import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { EventsComponent } from './components/pages/events/events.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { FederationComponent } from './components/pages/federation/federation.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { EventsListComponent } from './components/modules/events-list/events-list.component';
import { PhotosComponent } from './components/modules/photos/photos.component';

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
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
