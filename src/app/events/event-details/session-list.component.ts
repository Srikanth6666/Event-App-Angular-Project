import { Component, Input, ╔ÁisListLikeIterable } from "@angular/core";

@Component({
    selector:'session-list',
    templateUrl:'./session-list.component.html'
})
export class SessionListComponent{
@Input() sessions:any
}