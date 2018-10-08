import { Component, HostBinding } from '@angular/core';

import { css } from 'emotion';
import { center, colors, fillSpace, flex, font } from '../styles';

@Component({
  selector: 'gj-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  cssClass: string = css`
    ${center};
    ${fillSpace};
    ${flex.column};
    padding: 10px;
    background-color: ${colors.neutral};
  `

  textClass: string = css`
    ${font.xl};
    color: ${colors.secondary};
    margin-bottom: 20px;
 `

  @HostBinding('class')
  hostClasses: string = this.cssClass;
}
