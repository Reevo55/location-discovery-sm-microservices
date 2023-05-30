import { Body, Controller,  Post } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @ApiOkResponse({ description: 'Get current weather' })
  @Post('current')
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
  @Post('forecast')
  getForecastWeather(
    @Body() body: { latitude: string; longitude: string; units: string },
  ) {
    return this.weatherService.getForecastWeather(
      body.latitude,
      body.longitude,
      body.units,
    );
  }
}
