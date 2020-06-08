import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';

import {of} from 'rxjs';
import {
  AddEventAction,
  AddEventFailureAction,
  AddEventSuccessAction,
  LoadEventsAction,
  LoadEventsFailureAction,
  LoadEventsSuccessAction
} from '../actions/event.action';
import {EventActionTypes} from '../actions/action-types/event-action-types';
import {EventService} from '../../services/event/event.service';

@Injectable()
export class EventEffects {

  @Effect() loadEvents$ = this.actions$
    .pipe(
      ofType<LoadEventsAction>(EventActionTypes.LOAD_EVENTS),
      mergeMap(
        () => this.eventService.getEvents()
          .pipe(
            map(data => {
              return new LoadEventsSuccessAction(data);
            }),
            catchError(error => of(new LoadEventsFailureAction(error)))
          )
      ),
    );

  @Effect() addEvent$ = this.actions$
    .pipe(
      ofType<AddEventAction>(EventActionTypes.ADD_EVENT),
      mergeMap(
        (data) => this.eventService.addEvent(data.payload)
          .pipe(
            map(() => new AddEventSuccessAction(data.payload)),
            catchError(error => of(new AddEventFailureAction(error)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private eventService: EventService
  ) {
  }
}
