import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Weather, WeatherData } from 'src/app/weather-data';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName: String = "";

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  callService(data: string) {
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=c2395dafd752b24690e1cdd50b5a6972"
    let response: Observable<WeatherData> = this.httpClient
      .get<WeatherData>(url)
      .pipe(catchError(this.handleError))

    response.subscribe(respuesta => {
      // let response = Weather.fromData(respuesta)
      console.log(respuesta.visibility);
    })
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status == 400) {
      console.error("Ha ocurrido un error tipo: ", error.status)
    } else {
      console.error("Otro tipo de error: ", error.message)
    }
    return throwError(() => new Error("Algo fue mal..."))
  }

}
