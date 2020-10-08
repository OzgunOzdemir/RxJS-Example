import { Component } from '@angular/core';
import { of, interval, timer, range, from, defer,Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor() {

    // // of
    // const values = of(1, 5, 'özgün');

    // values.subscribe((data) => {
    //   console.log(data);
    // });

    // // interval
    // const publisherInterval = interval(1000);
    // publisherInterval.subscribe(val=>{
    //   console.log("Ozgun" + val);
    // }, err=>{}, ()=>{
    //   console.log("publisherInterval için veri alma işlemi bitti.")
    // })

    // // timer
    // const timerInterval = timer(2000);
    // timerInterval.subscribe((val) => {
    //   console.log("burası 2 saniye sonra gözükecektir.")
    // }, err => {}, () => {
    //   console.log("timerInterval için veri alma işlemi tamamlandı.")
    // })

    // // range
    // const publisherRange = range(1, 20);
    // publisherRange.subscribe((val) => {
    //   console.log("gelen deger=" + val)
    // }, err => {}, () => {
    //   console.log("publisherRange için veri alma işlemi tamamlandı.")
    // })

    // // map
    // const map = new Map();
    // map.set(1, "Kitaplar");
    // map.set(2, "Kalemler");
    // map.set(3, "Silgiler");

    // const publisherFrom = from(map);
    // publisherFrom.subscribe((val) => {
    //   console.log(`${val[0]}=${val[1]}`)
    // }, err => {

    // }, () => {
    //   console.log("publisherFrom için veri alma işlemi tamamlandı.")
    // })

    // const publisherOf = of(new Date());
    // const publisherDefer = defer(() => of(new Date()));
    // const myTimer = timer(3000);
    // myTimer.subscribe(data => {
    //   publisherOf.subscribe(val1 => console.log("of = " + val1));
    //   publisherDefer.subscribe(val2 => console.log("defer = " + val2))
    // })

    // // ajax
    // ajax.getJSON("https://jsonplaceholder.typicode.com/todos/1").subscribe((data) => {
    //       console.table(data);
    // }, err => {}, () => {
    //   console.log("ajax isteği bitti sonuçlar geldi");
    // })

    // // create
    // const myobservable =Observable.create(observer => {
    //   observer.next("Özgün Özdemir");
    //   observer.next("Coni Özdemir");
    //   observer.complete();
    // })

    // myobservable.subscribe(data => {
    //   console.log(data);
    // },err =>  {}, () => {})

  }
}
