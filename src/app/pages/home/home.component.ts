import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from '../../app-state.model';
import {Observable} from 'rxjs';
import {EventModel} from '../../models/event.model';
import {LoadEventsAction} from '../../store/actions/event.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events: Observable<Array<EventModel>>;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  constructor(private router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadEventsAction());

    this.events = this.store.select(store => store.events.events);
    this.loading$ = this.store.select(store => store.events.loading);
    this.error$ = this.store.select(store => store.events.error);
  }

  redirectToCreateNewEvent() {
    this.router.navigate(['/add-event']);
  }
}
