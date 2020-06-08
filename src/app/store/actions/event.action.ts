import {Action} from '@ngrx/store';
import {EventActionTypes} from './action-types/event-action-types';
import {EventModel} from '../../models/event.model';

export class LoadEventsAction implements Action {
  readonly type = EventActionTypes.LOAD_EVENTS;
}

export class LoadEventsSuccessAction implements Action {
  readonly type = EventActionTypes.LOAD_EVENTS_SUCCESS;

  constructor(public payload: Array<EventModel>) {
  }
}

export class LoadEventsFailureAction implements Action {
  readonly type = EventActionTypes.LOAD_EVENTS_FAILURE;

  constructor(public payload: Error) {
  }
}

export class AddEventAction implements Action {
  readonly type = EventActionTypes.ADD_EVENT;

  constructor(public payload: EventModel) {
  }
}

export class AddEventSuccessAction implements Action {
  readonly type = EventActionTypes.ADD_EVENT_SUCCESS;

  constructor(public payload: EventModel) {
  }
}

export class AddEventFailureAction implements Action {
  readonly type = EventActionTypes.ADD_EVENT_FAILURE;

  constructor(public payload: Error) {
  }
}

export class BuildEventAction implements Action {
  readonly type = EventActionTypes.BUILD_EVENT;

  constructor(public payload: EventModel) {
  }
}

export type EventAction = LoadEventsAction |
  LoadEventsSuccessAction |
  LoadEventsFailureAction |
  AddEventAction |
  AddEventSuccessAction |
  AddEventFailureAction |
  BuildEventAction;
