import { Component } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [RecordsService]
})
export class HomePageComponent {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  constructor(private rservice: RecordsService) { }

  getInfo1FromService() {
    this.infoReceived1 = this.rservice.info1;
  }

  getInfo2FromService() {
    this.infoReceived2 = this.rservice.info2;
  }

  getInfo3FromService() {
    this.infoReceived3 = this.rservice.info3;
  }

  Submit() {
    console.log("form submitted");
  }

   formatPhoneNumber(input: { value: string; }) {
    var formatted = input.value.replace(/\D/g, '');

    if (formatted.length > 2) {
      formatted = formatted.substring(0, 2) + '-' + formatted.substring(2);
    }
    if (formatted.length > 5) {
      formatted = formatted.substring(0, 5) + '-' + formatted.substring(5);
    }
    if (formatted.length > 8) {
      formatted = formatted.substring(0, 8) + '-' + formatted.substring(8);
    }

    input.value = formatted;
  }
}
