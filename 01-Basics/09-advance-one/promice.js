const promiseOne = new Promise(function(resolve, reject){
     //Do and async task
     // DB calls, crypography, network
     setTimeout(function(){
        console.log('Asyc task is completed');
     }, 1000)
     resolve()
    })
    promiseOne.then(function(){
        console.log("Promise consume");
    })

    new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("async task two")
            resolve()
        }, 1000).then(function(){
            console.log("Async 2 resolved")
        })
    })