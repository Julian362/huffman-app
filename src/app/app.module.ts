import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HuffmanCompressComponent } from './huffman-compress/huffman-compress.component';
import { HuffmanDecompressComponent } from './huffman-decompress/huffman-decompress.component';

@NgModule({
  declarations: [
    AppComponent,
    HuffmanDecompressComponent,
    HuffmanCompressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AutosizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
