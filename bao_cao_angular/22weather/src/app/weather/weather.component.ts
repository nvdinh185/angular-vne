import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temp = "";
  txtCityName = "";
  cityName = "";
  isLoading = false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  getWeather() {
    this.isLoading = true;
    this.weatherService.getTemp(this.txtCityName)
      .then(temp => {
        this.cityName = this.txtCityName;
        this.temp = temp;
        this.isLoading = false;
        this.txtCityName = "";
      })
      .catch(err => {
        alert("Can't find your city name!");
        this.isLoading = false;
        this.txtCityName = "";
        this.cityName = "";
      });
  }

  getMessage(){
    if(this.isLoading){
      return "Đang tải dữ liệu..."
    }
    return this.cityName==""? "Enter your city name" : (this.cityName + " is now "+ this.temp)
  }

}
