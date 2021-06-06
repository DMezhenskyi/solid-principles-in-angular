import { Directive, Input } from '@angular/core';

@Directive()
export class WidgetBase {
  @Input()
  title: string = '';
  onExportJson(): void {
    console.log('Export Json logic..');
  }
}
