import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=c2395dafd752b24690e1cdd50b5a6972"
    let response = this.httpClient.get(url);
    response.subscribe(web => {
      console.log(web);
    })
    
  }

}
