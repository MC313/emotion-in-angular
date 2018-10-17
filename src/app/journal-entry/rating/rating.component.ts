import { Component, EventEmitter, Output } from '@angular/core';

import { css } from 'emotion';

import { colors, center, flex, text, height, width, widthHeight } from '../../../styles';

@Component({
  selector: 'gj-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  @Output() submitted: EventEmitter<object> = new EventEmitter<object>();

  textClass: string = css`
    ${text.mdPrimary};
    margin-bottom: 30px;
  `

  emojiContainer: string = css`
    ${center};
    ${flex.row};
    ${widthHeight(90, 70, '%')};
    padding: 15px;

    div {
      ${center};
      ${flex.column};
      ${text.md};
      margin: 0px 10px;
      transition: font-size 0.4s linear;
    }

    div:hover {
      ${text.xl};
    }
  `

  selectEmoji(value: object) {
    console.info('Emoji Selected!!')
    this.submitted.emit(value);
  }

}
