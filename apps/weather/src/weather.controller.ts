import { Body, Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @ApiOkResponse({ description: 'Get current weather' })
  @Get('current')
  getCurrentWeather(
    @Body() body: { latitude: string; longitude: string; units: string },
  ) {
    return this.weatherService.getCurrentWeather(
      body.latitude,
      body.longitude,
      body.units,
    );
  }

  @ApiOkResponse({ description: 'Get forecast weather' })
  @Get('forecast')
  getForecastWeather(): string {
    return 'forecast weather';
  }

  @ApiOkResponse({ description: 'Get weather alerts' })
  @Get('alerts')
  getWeatherAlerts(): string {
    return 'weather alerts';
  }

  @ApiOkResponse({ description: 'Get weather history' })
  @Get('history')
  getWeatherHistory(): string {
    return 'weather history';
  }
}
