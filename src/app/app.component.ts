import {Component, OnInit} from '@angular/core';
import {AppState} from './app-state.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {EventState} from './store/reducers/event.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Testwork';

  eventItems: Observable<EventState>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.eventItems = this.store.select(store => store.events);
  }
}
