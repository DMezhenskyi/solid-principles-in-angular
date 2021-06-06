import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JsonExporterService {
  constructor() {}

  export() {
    let data = JSON.stringify({ wether: { is_sunny: true, temp: '+25' } });
    let dataUri =
      'data:application/json;charset=utf-8,' + encodeURIComponent(data);
    let exportFileName = 'wether.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  }
}
