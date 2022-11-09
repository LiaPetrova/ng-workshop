import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme } from './interfaces';
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class ThemeService {

  constructor(private http: HttpClient) { }

  loadThemeList (): Observable<ITheme[]> {
    return this.http.get<ITheme[]>(`${apiUrl}/themes`)
  }
}
