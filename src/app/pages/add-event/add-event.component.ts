import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app-state.model';
import {Observable} from 'rxjs';
import {EventModel} from '../../models/event.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  newEvent: Observable<EventModel>;

  constructor(private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.newEvent = this.store.select(store => store.events.newEvent);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
