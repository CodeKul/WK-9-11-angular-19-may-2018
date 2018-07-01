import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(
    private data : DataService
  ) { }
}
