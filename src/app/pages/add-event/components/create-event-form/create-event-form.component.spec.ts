import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateEventFormComponent} from './create-event-form.component';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {provideMockStore} from '@ngrx/store/testing';

describe('CreateEventFormComponent', () => {
  let component: CreateEventFormComponent;
  let fixture: ComponentFixture<CreateEventFormComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEventFormComponent],
      providers: [FormBuilder, provideMockStore()],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
