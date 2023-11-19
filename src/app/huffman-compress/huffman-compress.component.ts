import { Component } from '@angular/core';
import { HuffmanService } from '../huffman.service';

@Component({
  selector: 'app-huffman-compress',
  templateUrl: './huffman-compress.component.html',
  styleUrls: ['./huffman-compress.component.css'],
})
export class HuffmanCompressComponent {
  textoOriginal: string = '';
  textoComprimido: string = '';
  dictionary: any;
  originalSize: number = 0;
  comprimido: number = 0;

  constructor(private huffmanService: HuffmanService) {}

  handleFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.textoOriginal = reader.result as string;
        this.originalSize = this.getBytes(this.textoOriginal).length;
      };
      reader.readAsText(file);
    }
  }

  compressText() {
    this.huffmanService
      .compress(this.textoOriginal.toLowerCase())
      .subscribe((result) => {
        const compressedBinaryData = this.textToUint8Array(
          result.compressedText
        );
        this.dictionary = JSON.parse(result.table); // Modificado para parsear la cadena en formato de array
        console.log(this.dictionary);

        // Crear un Blob con el Uint8Array
        const compressedBitsBlob = new Blob([compressedBinaryData]);

        // Crear un enlace de descarga y simular un clic para descargar el archivo
        const compressedLink = document.createElement('a');
        compressedLink.href = window.URL.createObjectURL(compressedBitsBlob);
        compressedLink.download = 'compressed.bin';
        compressedLink.click();

        // Actualizar el texto comprimido y la información de tamaño
        this.textoComprimido = result.compressedText;
        this.comprimido = Math.ceil(result.compressedText.length / 8); // Usar el tamaño en bytes
      });
  }

  private textToUint8Array(text: string): Uint8Array {
    const binaryArray = new Uint8Array(text.length / 8);
    for (let i = 0; i < text.length; i += 8) {
      const byte = text.substr(i, 8);
      binaryArray[i / 8] = parseInt(byte, 2);
    }
    return binaryArray;
  }

  private getBytes(text: string): Uint8Array {
    const encoder = new TextEncoder();
    return encoder.encode(text);
  }
}
