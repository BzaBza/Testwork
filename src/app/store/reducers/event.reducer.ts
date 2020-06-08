import {EventModel} from '../../models/event.model';
import {EventAction} from '../actions/event.action';
import {EventActionTypes} from '../actions/action-types/event-action-types';

export interface EventState {
  events: EventModel[];
  loading: boolean;
  error: Error;

  newEvent: {
    name: string,
    date: string,
    address: string,
  };
}

const initialState: EventState = {
  events: [],
  loading: false,
  error: undefined,

  newEvent: {
    name: '',
    date: '',
    address: '',
  }
};

export function EventReducer(state: EventState = initialState, action: EventAction) {
  switch (action.type) {
    case EventActionTypes.LOAD_EVENTS:
      return {
        ...state,
        loading: true
      };
    case EventActionTypes.LOAD_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        loading: false
      };

    case EventActionTypes.LOAD_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case EventActionTypes.ADD_EVENT:
      return {
        ...state,
        loading: true
      };

    case EventActionTypes.ADD_EVENT_SUCCESS:
      return {
        ...state,
        events: [...state.events, action.payload],
        loading: false
      };

    case EventActionTypes.ADD_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    case EventActionTypes.BUILD_EVENT:
      return {
        ...state,
        newEvent: action.payload
      };

    default:
      return state;
  }
}


