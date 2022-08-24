/*import { Component,OnInit } from "@angular/core";
import { EventService } from "src/app/shared/events.shared";

@Component({
    selector:'event-details',
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit{
    event:any;
constructor(private eventService:EventService){

}

ngOnInit(){
this.event = this.eventService.getEvent(5)
}
}*/

import {Component,OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {EventService}  from "src/app/shared/events.shared";

@Component({
    selector:'event-details',
    templateUrl:'./event-details.components.html'
})

export class EventDetailsComponent implements OnInit{
    event:any;
    constructor(private eventService:EventService, private route:ActivatedRoute){

    }
    ngOnInit(): void {
this.event =this.eventService.getEvent(+ this.route.snapshot.params['id'])
    }
    
}