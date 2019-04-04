import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { APIKEY } from '../api-key';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  docName: string;
  response: any;


  constructor(private http: HttpClient) { }
  apiKey: string = APIKEY.apiKey;

  ngOnInit() {

  }

  search() {
    this.http.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${this.docName}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=20&user_key=${this.apiKey}`)
    .subscribe((response)=> {
      console.log(response)
      this.response = response;
    })
  }
}
