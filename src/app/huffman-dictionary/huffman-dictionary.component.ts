import { Component, OnInit } from '@angular/core';
import { HuffmanService } from '../huffman.service';

@Component({
  selector: 'app-huffman-dictionary',
  templateUrl: './huffman-dictionary.component.html',
  styleUrls: ['./huffman-dictionary.component.css'],
})
export class HuffmanDictionaryComponent implements OnInit {
  dictionary: any;

  constructor(private huffmanService: HuffmanService) {}

  ngOnInit(): void {
    this.huffmanService.getTable().subscribe((result) => {
      console.log(result);
      this.dictionary = result;
      console.log(result);
    });
  }
}
