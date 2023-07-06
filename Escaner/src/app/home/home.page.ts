import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { BarcodeScanner } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async scanBarcode() {
    const result = await BarcodeScanner['scan']();

    if (result.hasContent) {
      console.log('Barcode data:', result.content);
      // Aquí puedes realizar las acciones necesarias con los datos del código de barras escaneado
    } else {
      console.log('No se ha escaneado ningún código de barras.');
    }
 }
}
