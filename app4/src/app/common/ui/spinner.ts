/**
 * Common Spinner
 */

import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <span>
      <i class="fas fa-spinner fa-spin"></i>
    </span>
  `,
  styles: [``]
})
export class CommonSpinnerComponent implements OnChanges {
  constructor() {}

  ngOnChanges() {
    this.update();
  }

  update() {
  }
}
