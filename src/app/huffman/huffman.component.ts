import { Component } from '@angular/core';
import { HuffmanService } from '../huffman.service';

@Component({
  selector: 'app-huffman',
  templateUrl: './huffman.component.html',
  styleUrls: ['./huffman.component.css'],
})
export class HuffmanComponent {
  textoOriginal: string = '';
  textoComprimido: string = '';
  textoDescomprimido: string = '';
  dictionary: any;
  original: number = 0;
  comprimido: number = 0;
  ahorro: number = 0;

  constructor(private huffmanService: HuffmanService) {}

  compressText() {
    this.original = this.textoOriginal.length * 8;
    this.huffmanService
      .compress(this.textoOriginal.toLowerCase())
      .subscribe((result) => {
        this.textoComprimido = result.compressedText;
        this.dictionary = JSON.parse(result.table);
        for (const item of this.dictionary) {
          item.key = item[0];
          item.value = item[1];
        }
        this.comprimido = this.textoComprimido.length;
      });
  }

  decompressText() {
    this.huffmanService.decompress(this.textoComprimido).subscribe({
      next: (result) => {
        this.textoDescomprimido = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
