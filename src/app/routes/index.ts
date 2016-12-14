import { MainComponent } from '../components/pages/main/main.component';
import { EventsComponent } from '../components/pages/events/events.component';
import { GalleryComponent } from '../components/pages/gallery/gallery.component';
import { FederationComponent } from '../components/pages/federation/federation.component';
import { ContactsComponent } from '../components/pages/contacts/contacts.component';

export default function configRoutes() {
  return [
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
        path: '**', 
        redirectTo: '/',
        }
    ];

}
