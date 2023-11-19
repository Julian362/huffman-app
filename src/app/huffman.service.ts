import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HuffmanService {
  private apiUrl = 'http://localhost:3000/huffman';

  constructor(private http: HttpClient) {}

  compress(
    text: string
  ): Observable<{ compressedText: string; table: string }> {
    return this.http.post<{ compressedText: string; table: string }>(
      `${this.apiUrl}/compress`,
      {
        text,
      }
    );
  }

  decompress(compressedText: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/decompress`, {
      compressedText,
    });
  }
}
