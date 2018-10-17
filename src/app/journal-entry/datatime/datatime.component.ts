import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { css } from 'emotion';

import { flex, text, input, button, colors } from '../../../styles';

@Component({
  selector: 'gj-datatime',
  templateUrl: './datatime.component.html',
})
export class DatatimeComponent implements OnInit {
  dataTimeForm: FormGroup;
  textClass: string = css`
    ${text.mdPrimary};
    margin-bottom: 30px;
  `
  formClass: string = css`
    ${flex.column};
    input { 
      ${input.largePrimary};
      margin-bottom: 20px;
    }
  `
  buttonClass: string = css`
    ${button.largePrimary};
  `
  constructor(private fb: FormBuilder) { }
  @Output() submitted: EventEmitter<object> = new EventEmitter<object>();

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.dataTimeForm = this.fb.group({
      entryDate: [''],
      entryTime: ['']
    })
  }

  submit(value: object) {
    console.log('submitting value....')
    this.submitted.emit(value);
  }

}
