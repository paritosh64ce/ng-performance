import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { HttpWrapperService } from '../shared/http-wrapper.service';
import { MyDataService } from './my-data.service';

@Component({
  standalone: true,
  selector: 'app-caching',
  imports: [CommonModule, MatButtonModule],
  providers: [
    HttpWrapperService, MyDataService, HttpClient
  ],
  templateUrl: './caching.component.html'
})
export class CachingComponent {

  constructor(private dataService: MyDataService) {
  }

  loadData() {
    this.dataService.loadData().subscribe((data) => {
      console.log('without caching', data);
    });
  }

  loadDataWithCaching() {
    this.dataService.loadDataWithCaching().subscribe((data) => {
      console.log('with caching', data);
    });
  }
}
