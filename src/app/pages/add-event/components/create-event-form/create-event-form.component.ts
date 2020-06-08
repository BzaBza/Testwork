import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../app-state.model';
import {AddEventAction, BuildEventAction} from '../../../../store/actions/event.action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-event-form',
  templateUrl: './create-event-form.component.html',
  styleUrls: ['./create-event-form.component.scss']
})
export class CreateEventFormComponent implements OnInit {

  constructor(fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router) {
    this.event = fb.group({
      name: this.name,
      address: this.address,
      date: this.date,
    });
  }

  event: FormGroup;
  name = new FormControl('');
  address = new FormControl('');
  date = new FormControl('');

  ngOnInit(): void {
    this.event.valueChanges.subscribe(v => this.update(v));
  }

  update(data) {
    this.store.dispatch(new BuildEventAction(data));
  }

  submit() {
    if (this.isValid(this.name.value) && this.isValid(this.address.value) && this.isValid(this.date.value)) {
      this.store.dispatch(new AddEventAction(this.event.value));
      this.router.navigate(['/']);
    }
  }

  isValid(param: string) {
    return param !== '';
  }
}
