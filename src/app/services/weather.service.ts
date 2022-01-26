import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { WeatherData } from "../data/weather-data";

const url = "http://api.openweathermap.org/data/2.5/weather?";
const queryCityName = "q=";
const queryLang = "&lang=es";
const appid = "&appid=c2395dafd752b24690e1cdd50b5a6972";

@Injectable({
  providedIn: "root"
})
export class WeatherService {

  message: any = "";

  constructor(private httpClient: HttpClient) { }

  getWeatherByCityName(cityName: string): Observable<WeatherData> {
    const completeUrl = url + queryCityName+cityName + queryLang + appid;
    return this.httpClient
      .get<WeatherData>(completeUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status == 400) {
      console.error("Ha ocurrido un error tipo: ", error.status);
    } else {
      console.error("Otro tipo de error: ", error.message);
    }
    return throwError(() => new Error("Algo fue mal..."));
  }
}
