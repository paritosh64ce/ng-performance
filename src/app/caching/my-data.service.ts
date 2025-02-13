import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../shared/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {

  constructor(private httpWrapperService: HttpWrapperService) { }

  loadData() {
    return this.httpWrapperService.get(
      'https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json');
  }
  
  loadDataWithCaching() {
    return this.httpWrapperService.get(
      'https://raw.githubusercontent.com/jdorfman/awesome-json-datasets/refs/heads/master/tests/relaxed.json',
      undefined,
      true);
  }
}
