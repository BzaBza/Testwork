import {EventState} from './store/reducers/event.reducer';

export interface AppState {
  readonly events: EventState;
}
