// function observe (observable) {
//   for (let item of observable) {
//     console.log(item)
//   }
// }
//
// observe('Observable')

// class Observable {
//   constructor (source) {
//     this.source = source.split('');
//     this.result = this.source;
//   }
//
//   subscribe (next) {
//     for (let item of this.result) {
//       next(item);
//     }
//   }
//
//   filter(predicate) {
//     this.result = this.result.filter(predicate);
//     return this;
//   }
//
//   map(callback) {
//     this.result = this.result.map(callback);
//     return this;
//   }
// }
//
// new Observable('Observable').subscribe(item => console.log(item))
// new Observable('Observable')
//   .map(item => item.toUpperCase())
//   .filter(item => item === 'E')
//   .subscribe(item => console.log(item))

// const { from } = require('rxjs');
// const { map, filter } = require('rxjs/operators');
//
// from('Observable').pipe(
//   map(item => item.toUpperCase()),
//   filter(item => item === 'E')
// ).subscribe(item => console.log(item))

// import { Observable } from 'rxjs';
// const { Observable } = require('rxjs');
//
// const foo = new Observable(subscriber => {
//   console.log('Hello');
//   subscriber.next(42);
// });
//
// foo.subscribe(x => {
//   console.log(x);
// });
