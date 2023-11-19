import { Component } from '@angular/core';
import { HuffmanService } from '../huffman.service';

@Component({
  selector: 'app-huffman-decompress',
  templateUrl: './huffman-decompress.component.html',
  styleUrls: ['./huffman-decompress.component.css'],
})
export class HuffmanDecompressComponent {
  binaryContent: string | null = null;
  textoDescomprimido: string | null = null;

  constructor(private huffmanService: HuffmanService) {}

  handleCompressedFileInput(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;

        // Convierte el ArrayBuffer a una cadena binaria
        const binaryArray = new Uint8Array(arrayBuffer);
        this.binaryContent = Array.from(binaryArray)
          .map((byte) => byte.toString(2).padStart(8, '0'))
          .join('');
      };

      reader.readAsArrayBuffer(file);
    }
  }

  decompressText() {
    if (this.binaryContent) {
      // Llama al servicio para descomprimir el contenido binario
      this.huffmanService.decompress(this.binaryContent).subscribe(
        (result) => {
          // Puedes hacer algo con el resultado descomprimido aquí
          this.textoDescomprimido = result;
          console.log(result);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
