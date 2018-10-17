import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { css } from 'emotion';

import { button, colors, text, flex, height, input } from '../../../styles';

@Component({
  selector: 'gj-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  notesForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  @Output() submitted: EventEmitter<object> = new EventEmitter<object>();

  textClass: string = css`
    ${text.md};
    color: ${colors.primary};
    margin-bottom: 30px;
  `

  formClass: string = css`
    ${flex};
    ${flex.column};
  `

  inputClass: string = css`
    ${height(150)}
    margin-bottom: 20px;
  `

  buttonClass: string = css`
    ${button.largePrimary};
  `
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.notesForm = this.fb.group({
      muscles: [''],
    })
  }

  submit(value: object) {
    console.log('submitting value....')
    this.submitted.emit(value);
  }

}
