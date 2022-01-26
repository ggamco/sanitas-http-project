import { Component, OnInit } from "@angular/core";
import { Weather } from "src/app/data/weather-data";
import { WeatherService } from "src/app/services/weather.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"]
})
export class WeatherComponent implements OnInit {

  cityName: string = "";
  resultado?: string = "";
  condition = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  callService() {
    this.weatherService
      .getWeatherByCityName(this.cityName)
      .subscribe(respuesta => {
        let weather: Weather = Weather.fromData(respuesta);
        this.resultado = weather.description;
    });
  }

}
