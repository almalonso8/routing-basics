import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  counter: number = 0;

  addCounter(): void{
    this.counter++
    console.log(this.counter)
  }

  getCounter(): number {
    return this.counter;
  }
}
