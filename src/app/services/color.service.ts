import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color, Colors } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  baseUrl = 'https://api.noopschallenge.com/hexbot';

  constructor(private http: HttpClient) { }

  getColor(): Observable<Color> {
    return this.http.get<Colors>(this.baseUrl).pipe(map(res=>res.colors[0]));
  }

}
