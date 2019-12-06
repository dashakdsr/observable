const { Subject } = require('rxjs');

const subject = new Subject();

const stream1 = subject.subscribe((item) => {
  setTimeout(() => {
    console.log('item = ', item)
  }, 1000)
})

const stream2 = subject.subscribe((item) => {
  setTimeout(() => {
    console.log('item * 2 = ', item * 2)
  }, 1500)
})
console.log(subject)
subject.next(2)
subject.next(Math.random() * 100)
