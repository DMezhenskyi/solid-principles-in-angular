import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>Weather</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-container *ngIf="widget === 'wether'">
      <h5>Currently</h5>
      <section class="wether-widget">
        <mat-icon class="widget-icon">wb_sunny</mat-icon>
        <div class="value">+25</div>
      </section>
    </ng-container>
    <ng-container *ngIf="widget === 'velocity'">
      <h5>Last sprint</h5>
      <section class="wether-widget">
        <mat-icon class="widget-icon">assessment</mat-icon>
        <div class="value">Planned: <strong>25</strong></div>
        <div class="value">Achieved: <strong>20</strong></div>
      </section>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }
      .wether-widget {
        display: block;
        text-align: center;
        position: relative;
        min-width: 190px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .widget-icon {
        font-size: 64px;
        width: 64px;
        height: 64px;
        color: orange;
      }
      .value {
        font-size: 24px;
        opacity: 0.7;
      }
    `,
  ],
})
export class WidgetComponent {
  @Input()
  widget: 'wether' | 'velocity' = 'wether';
  onExportJson() {
    console.log('Export Json logic..');
  }
}
