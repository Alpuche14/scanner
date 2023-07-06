import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  async scanBarcode() {
    try {
      const result = await (BarcodeScanner as any)['scan']();

      if (result.hasContent) {
        console.log('Barcode data:', result.content);
        // Realiza las acciones necesarias con los datos del código de barras escaneado
      } else {
        console.log('No se ha escaneado ningún código de barras.');
      }
    } catch (error) {
      console.error('Error al escanear el código de barras:', error);
    }
  }
}
