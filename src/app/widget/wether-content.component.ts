import { Component } from '@angular/core';
import { WidgetContent, Reloadable } from './widget-content';
import { RELOADABLE_CONTENT } from './widget-content.token';

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
  providers: [
    { provide: RELOADABLE_CONTENT, useExisting: WetherContentComponent },
  ],
})
export class WetherContentComponent implements WidgetContent, Reloadable {
  id = 'random-string';
  isLoading = false;
  reload() {
    console.log('...reloading is happening...');
  }
}
