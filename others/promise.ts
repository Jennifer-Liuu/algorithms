// 实现JS限流调度器，方法add接收一个返回Promise的函数，同时执行的任务数量不能超过两个。

class Scheduler {
  constructor() {
      this.arr = []
  }
  async add(promiseFunc) {
      this.arr.push(promiseFunc)
      console.log('promiseFunc',this.arr)
      return Promise.all(this.arr.splice(0, 2)).then(res => {
          // res.forEach(item => {
          //   item()
          // })
          return res.map(item => item())
      })
  }
}

const scheduler = new Scheduler()
const timeout = (time) => {
  return new Promise(resolve => setTimeout(resolve, time))
}
const addTask = (time, order) => {
  scheduler.add(() => timeout(time))
      .then(() => console.log(order))
}

// addTask(1000, 1)
// addTask(500, 2)
// addTask(300, 3)
// addTask(400, 4)
// log: 2 3 1 4
const list = [() => timeout(1000), () => timeout(500), () => timeout(300)]
Promise.all(list).then(res => {
  res.forEach(item=> {
    item().then(() => console.log(item + ''))
  }) 
})