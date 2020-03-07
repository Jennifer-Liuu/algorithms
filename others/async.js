console.log('global');

setTimeout(function() {
    console.log('setTimeout1');
    new Promise(function(resolve) {
        console.log('setTimeout1_promise');
        resolve();
    }).then(function() {
        console.log('setTimeout1_promiseThen')
    })
    process.nextTick(function() {
        console.log('setTimeout1_nextTick');
    })
},0)

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promiseThen1')
})

setImmediate(function() {
    console.log('setImmediate');
})

process.nextTick(function() {
    console.log('nextTick');
})

new Promise(function(resolve) {
    console.log('promise2');
    resolve();
}).then(function() {
    console.log('promiseThen2')
})

setTimeout(function() {
    console.log('setTimeout2');
},0)