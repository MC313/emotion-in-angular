import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { css } from 'emotion';

import { flex, font, input, button, colors } from '../../../styles';

@Component({
  selector: 'gj-datatime',
  templateUrl: './datatime.component.html',
})
export class DatatimeComponent implements OnInit {
  dataTimeForm: FormGroup;
  textClass: string = css`
    ${font.md};
    color: ${colors.primary};
    margin-bottom: 30px;
  `
  formClass: string = css`
    ${flex.column};
    input { 
      ${input.large};
      font-size: 20px;
      margin-bottom: 20px;
      padding-left: 20px;
    }
  `
  buttonClass: string = css`
    ${button.large};
    ${button.primary};
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
