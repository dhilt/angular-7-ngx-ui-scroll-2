import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Datasource } from 'ngx-ui-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  ngOnInit() { }

  datasource = new Datasource({
    get: (index, count, success) => {
      const data = [];
      for (let i = index; i <= index + count - 1; i++) {
        data.push({ id: i, text: 'item #' + i });
      }
      success(data);
    }
  });
}
