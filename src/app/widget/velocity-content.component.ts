import { Component } from '@angular/core';

@Component({
  selector: 'app-velocity-content',
  template: `
    <h5>Last sprint</h5>
    <section class="widget-content">
      <mat-icon class="widget-icon">assessment</mat-icon>
      <div class="value">Planned: <strong>25</strong></div>
      <div class="value">Achieved: <strong>20</strong></div>
    </section>
  `,
  styleUrls: ['./widget-content.scss'],
})
export class VelocityContentComponent {}
