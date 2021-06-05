import { Component } from '@angular/core';

@Component({
  selector: 'app-wether-content',
  template: `
    <h5>Currently</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">wb_sunny</mat-icon>
      <div class="value">+25</div>
    </section>
  `,
  styleUrls: ['./widget-content.scss'],
})
export class WetherContentComponent {}
