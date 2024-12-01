export * from './todos.service';
import { TodosService } from './todos.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [TodosService, WeatherForecastService];
