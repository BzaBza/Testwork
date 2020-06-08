import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {

  @Input() eventData: EventModel;
  constructor() { }
}
