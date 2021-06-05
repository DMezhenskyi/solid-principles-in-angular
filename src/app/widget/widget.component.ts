import { WidgetBase } from './widget-base';
import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>{{ title }}</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-content></ng-content>
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
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class WidgetComponent extends WidgetBase {}
