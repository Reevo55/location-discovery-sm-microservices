import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getCurrentWeather(latitude: string, longitude: string, units: string) {
    const endpointBase = this.configService.get('WEATHER_API_ENDPOINT');
    const appid = this.configService.get('WEATHER_API_ID');
    const endpoint =
      endpointBase +
      `lat=${latitude}&lon=${longitude}&units=${units}&appid=${appid}`;

    return this.httpService
      .get(endpoint)
      .pipe(
        map((res) => {
          return JSON.stringify({
            description: res.data.weather[0].description,
            temperature: res.data.main.temp,
            humidity: res.data.main.humidity,
            icon: res.data.weather[0].icon,
          });
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('Open Weather API not available');
        }),
      );
  }
}
