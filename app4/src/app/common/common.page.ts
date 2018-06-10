/**
 * Common Page
 */

import { Component } from '@angular/core';

@Component({
  template: `
    <app-layout>
      <section class="section">
        <div class="container">
          <h1 class="title">
            Hello World
          </h1>
          <p class="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>
      </section>
    </app-layout>
  `,
})
export class CommonPageComponent {}
