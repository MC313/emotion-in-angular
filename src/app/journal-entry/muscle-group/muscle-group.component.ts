import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { css } from 'emotion';

import { button, colors, text, flex, height, input } from '../../../styles';

@Component({
  selector: 'gj-muscle-group',
  templateUrl: './muscle-group.component.html'
})
export class MuscleGroupComponent implements OnInit {
  muscleForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  @Output() submitted: EventEmitter<object> = new EventEmitter<object>();
  musclesList: string[] = [
    'Arms',
    'Back',
    'Shoulders',
    'Chest',
    'Legs',
    'Abs'
  ];

  textClass: string = css`
    ${text.mdPrimary};
    margin-bottom: 30px;
  `

  formClass: string = css`
    ${flex};
    ${flex.column};
  `

  inputClass: string = css`
    ${input.largePrimary};
    ${height(50)};
    margin-bottom: 20px;
  `

  buttonClass: string = css`
    ${button.large};
    ${button.primary};
  `

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.muscleForm = this.fb.group({
      muscles: [this.musclesList[0], Validators.required],
    })
  }

  submit(value: object) {
    console.log('submitting value....')
    this.submitted.emit(value);
  }

}
