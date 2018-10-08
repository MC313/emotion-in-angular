import { Directive, Input, HostBinding } from '@angular/core';

import { css } from 'emotion';

import { center, fillSpace, flex } from '../../styles';

@Directive({
  selector: '[entry-step]'
})
export class EntryStepDirective {
  cssClasses: string = css`
    ${fillSpace};
    ${center};
    ${flex.column};
  `
  @HostBinding('class')
  stepClass: string = this.cssClasses;

  @Input()
  step: number;

  constructor() { }

}
