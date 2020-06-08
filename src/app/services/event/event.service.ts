import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {EventModel} from '../../models/event.model';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private EVENT_API = 'api/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.EVENT_API).pipe(
      catchError(this.handleError<EventModel[]>('getEvents', []))
    );
  }

  addEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.EVENT_API, event).pipe(
      catchError(this.handleError<EventModel>('createEvent'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
