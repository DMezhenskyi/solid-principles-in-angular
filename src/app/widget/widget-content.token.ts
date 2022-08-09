import { Reloadable } from './widget-content';
import { InjectionToken } from '@angular/core';
export const RELOADABLE_CONTENT = new InjectionToken<Reloadable>(
  'reloadable-content'
);
