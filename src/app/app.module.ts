import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/event-list-resolver.service';
import { Error404Component } from './errors/Error404.component';
import { EventService } from './shared/events.shared';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './shared/duration.pipe';
import { FormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';


@NgModule({

  declarations: [

    AppComponent,

    EventsListComponent,

    EventThumbnailComponent,

    EventDetailsComponent,

    NavBarComponent,

    CreateEventComponent,

    Error404Component,
    SessionListComponent,
    DurationPipe,
  
   

  ],
  imports: [

 





    BrowserModule,
 
     AppRoutingModule,
     FormsModule
 
   ],
 
  
 
   providers: [
 
     EventService,
 
     EventRouteActivator,
 
    EventsListResolver,
    AuthService,
 
  
 
     {
 
         provide: 'canDeactivateCreateEvent',
 
         useValue: checkDirtyState
 
 
 
     }
 
  
 
   ],
 
 
 
   bootstrap: [AppComponent]
 
 })

 export class AppModule { }





function checkDirtyState(component:CreateEventComponent) {

  if (component.isDirty)

    return window.confirm('You have not saved this event, do you really want to cancel?')

  return true

}