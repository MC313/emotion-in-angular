import { Component, ViewChildren, QueryList, AfterViewInit, HostBinding, ElementRef } from '@angular/core';
import { EntryStepDirective } from './entry-step.directive';

import { css } from 'emotion';

import { center, colors, flex, widthHeight } from '../../styles';

@Component({
  selector: 'gj-journal-entry',
  templateUrl: './journal-entry.component.html',
})
export class JournalEntryComponent implements AfterViewInit {
  hostClass: string = css`
    overflow: hidden;
    ${center};
    flex-direction: column;
    max-width: 550px;
    ${widthHeight(70, 70, '%')};
    height: 340px;
    border-radius: 10px;
    background-color: #ffffff;
  `
  containerClass: string = css`
    ${flex.row};
    ${widthHeight(100, 80, '%')};
  `

  @HostBinding('class')
  entryClass: string = this.hostClass;

  @ViewChildren(EntryStepDirective, { read: ElementRef })
  entryItems: QueryList<EntryStepDirective>;

  arrayIndex: number = 0;
  arrayLength: number = 0;

  ngAfterViewInit() {
    this.arrayLength = this.entryItems.toArray().length;
  }

  nextEntryStep(value) {
    console.log('going to next step....', value)
    this.animateContainer();
  }

  animateContainer() {
    if (this.arrayIndex < this.arrayLength - 1) {
      this.containerClass = css`
        ${flex.row};
        ${widthHeight(100, 80, '%')};
        transform: translateX(${-100 * this.arrayIndex++}%);
        transition: transform 0.3s ease;
      `
    } else {
      this.containerClass = css`
        ${flex.row};
        ${widthHeight(100, 80, '%')};
        transform: translateX(${-100 * this.arrayIndex++}%);
        transition: transform 0.3s ease;
      `
      this.arrayIndex = 0;
    };
  }

}
