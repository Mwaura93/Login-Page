import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  private _info1: string[] = ["Dennis Mbatia", "D1213", "at@dennis"];
  private _info2: string[] = ["Emma Hayes", "E1213", "at@hayes"];
  private _info3: string[] = ["Esther Njoki", "K1234", "at@kiki"];

  get info1(): string[] {
    return this._info1;
  }

  get info2(): string[] {
    return this._info2;
  }

  get info3(): string[] {
    return this._info3;
  }

  constructor() {}
}
