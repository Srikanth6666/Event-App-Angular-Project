

import { Resolve } from '@angular/router';

import { Injectable } from '@angular/core';
import { EventService } from '../shared/events.shared';

@Injectable()

export class EventsListResolver implements Resolve<any>{

constructor(private eventService:EventService){


}

   resolve() {

 return this.eventService.getEvents()

}

}

