import { Component, OnInit } from '@angular/core';
import { interpret } from 'xstate';
import { fetchMachine } from '../../+xstate/fetch-machine';

@Component({
  selector: 'wf-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  current: any;
  fetchInterpreter: any;

  constructor() {
    this.fetchInterpreter = interpret(fetchMachine)
      .onTransition(state => {
        this.current = state;
      })
      .start();
    this.current = this.fetchInterpreter.initialState;
  }

  searchCityWeather(value: string) {
    if(!value) return;
    this.fetchInterpreter.send({ type: 'FETCH', payload: {city: value } });
  }
  
  ngOnInit(): void {
   
  }
}
