import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HuffmanCompressComponent } from './huffman-compress/huffman-compress.component';
import { HuffmanDecompressComponent } from './huffman-decompress/huffman-decompress.component';

const routes: Routes = [
  { path: 'comprimir', component: HuffmanCompressComponent },
  { path: 'descomprimir', component: HuffmanDecompressComponent },
  { path: '', redirectTo: '/comprimir', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
