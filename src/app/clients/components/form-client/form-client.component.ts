import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  public states = Object.values(StateClient);
  @Input() init!: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter<Client>();

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log('init :', this.init);
    this.form = this.fb.group({
      state: [this.init.state],
      tva: [this.init.tva],
      id: [this.init.id],
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      comment: [this.init.commment],
    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}
