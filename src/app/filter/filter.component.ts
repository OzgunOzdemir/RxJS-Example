import { Component, OnInit } from '@angular/core';
import { from, interval, timer } from 'rxjs';
import { first, find, filter, last, single, distinct, skip, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  subscriptions;

  constructor() {
    const myarray = from([5, 10, 15, 20, 50, 100, 300, 600]);

    // first
    myarray.pipe(first()).subscribe((data) => {
      // console.log(data);
    });

    //find
    myarray.pipe(find((val) => val > 20)).subscribe((data) => {
      // console.log(data);
    });

    // filter
    myarray.pipe(filter((val) => val > 15)).subscribe((data) => {
      // console.log(data);
    });

    // last
    myarray.pipe(last((val) => val > 15)).subscribe((data) => {
      // console.log(data);
    });

    // single
    const singleArray = from(['ahmet', 'mehmet', 'hasan']);
    singleArray.pipe(single((val) => val == 'mehmet')).subscribe((data) => {
      console.log(data);
    });

    // distinct
    const distinctArray = from([5,10,15,20,50,100,300,600,100,300,600,]);
    distinctArray.pipe(distinct()).subscribe((data) => {
      // console.log(data);
    });

    // skip
    const nums = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    nums.pipe(skip(4)).subscribe((data) => {
      // console.log(data);
    })

    // skipUntil
    const mytimer = interval(1000);
    mytimer.pipe(skipUntil(timer(5000))).subscribe(data => {
      console.log(data)
    })

  }

  ngOnInit(): void {}
}
