import { Component, EventEmitter, Output } from '@angular/core';

import { css } from 'emotion';

import { colors, center, flex, font, height, width } from '../../../styles';

@Component({
  selector: 'gj-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {
  @Output() submitted: EventEmitter<object> = new EventEmitter<object>();

  textClass: string = css`
    ${font.md};
    color: ${colors.primary};
    margin-bottom: 30px;
  `

  emojiContainer: string = css`
    ${center};
    ${flex.row};
    ${width(90, '%')};
    ${height(70, '%')};
    padding: 15px;

    div {
      ${center};
      ${flex.column};
      ${font.md};
      margin: 0px 10px;
      transition: font-size 0.4s linear;
    }

    div:hover {
      ${font.xl};
    }
  `

  selectEmoji(value: object) {
    console.info('Emoji Selected!!')
    this.submitted.emit(value);
  }

}
