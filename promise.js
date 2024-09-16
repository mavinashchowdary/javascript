// Promises in Javascript

// synchronous vs Asynchronous code 

// example of Synchronous code 

// console.log('start');

// console.log('middle');

// console.log('end');







// example of Asynchronous Code 

// console.log('start');

// setTimeout(() => {
//     console.log('middle');
// }, 1000)

// console.log('end');










// Another Example for async code

// console.log('start');

// function Action(name) {

//     setTimeout(() => {
//         return `Learning in pupilfirst by ${name}`;
//     }, 1000)

// }

// const message = Action('avinash');

// console.log(message);// undefined 

// console.log('end');


























// callbacks


// console.log('start');

// function Action(name,cb) {

//     setTimeout(() => {
//         cb (`Learning in pupilfirst by ${name}`);
//     }, 1000)

// }


// const message = Action('avinash',function(message){
//     console.log(message);
// });


// console.log('end');






























// callback hell 

// console.log('start');

// function Action1(name, cb) {

//     setTimeout(() => {
//         cb(`Learning in pupilfirst by ${name}`);
//     }, 1000)

// }

// function Action2(name, cb) {

//     setTimeout(() => {
//         cb(`Learning javascript 101 in pupilfirst by ${name}`);
//     }, 1000)

// }

// const message = Action1('avinash',function(message){
//     console.log(message);
// })
// const message2 = Action2('rajesh',function(message){
//     console.log(message);
// })

// console.log('end');























// const message = Action1('avinash', function (message) {
//     console.log(message);
//     Action2('rajesh', function (message2) {
//         console.log(message2); // callback hell
//         Action2('rajesh', function (message2) {
//             console.log(message2);
//             Action2('rajesh', function (message2) {
//                 console.log(message2);
//                 Action2('rajesh', function (message2) {
//                     console.log(message2);
//                     Action2('rajesh', function (message2) {
//                         console.log(message2);
//                     })
//                 })
//             })
//         })
       
//     })

// });


// console.log('end');



































// promises 

//basic example of promise  

// console.log('start');



// const sub = new Promise((resolve,reject)=>{
     
//     setTimeout(()=>{
//         const result = false;
//         if(result) resolve('Javascript 101 course');
//         else{
//             reject(new Error('pursue Javascript'));
//         }
//     },2000)
// });

// sub.then((res)=>{
//     console.log(res);
// }).catch(
//     (rej)=>{
//         console.log(rej);
//     }
// )


// console.log('end');



































// example of promise 


console.log('start');

function Action1(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Learning in pupilfirst by ${name}`);
        }, 1000)
    })}
    



function Action2(name) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`Learning javascript 101 in pupilfirst by ${name}`);
        }, 1000)
    })

}

function Action3(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`this promise is the third promise of ${name}`);
        },1000)
    })
}

// Promise.all([Action1('avinash'),Action2('rajesh'),Action3('vishnu')]).then((res)=>console.log(res)).catch((err)=>console.log(err));

// Action2('avinash').then((res)=>console.log(res)).catch((rej)=>console.log(rej));

// Action1('avinash').then((res)=>console.log(res)).catch((rej)=>console.log(rej));

// pollyfill for promise.all()

Promise.allPollyfill = (promises) =>{
    return new Promise((resolve,reject)=>{
        const results =[];
        if(!promises.length){
            resolve(results);
            return;
        }
        var len = promises.length ;
        promises.forEach((promise,index) => {
            Promise.resolve(promise).then((res)=>{
                results[index] = res;
       
                len--;

                if(len==0) resolve(results)
            },reject
            ) 
        });
    })
}
// Promise.allPollyfill = (promises) =>{
//     return new Promise((resolve,reject)=>{
//             const results =[];
//             if(!promises.length){
//                 resolve(results);
//                 return;
//             }
//             var len = promises.length ;
//             promises.forEach((promise,index) => {
//                 Promise.resolve(promise).then((res)={
//                     results[index] = res ;

//                     len-- ;

//                     if(len===0){
//                         resolve(results);
//                     }

//                 },reject)               
//             });
//         }
//     )
// }



Promise.racePollyfill = (promises)=>{
    return new Promise((resolve,reject)=>{
        promises.forEach((promise)=>{
            Promise.resolve(promise).then(resolve).catch(reject)
        })
    })
}


Promise.allPollyfill([Action1('avinash'),Action2('rajesh'),Action3('vishnu')]).then((res)=>console.log(res)).catch((err)=>console.log(err));






Promise.race([Action1('avinash'),Action2('rajesh'),Action3('vishnu')]).then((res)=>console.log(res))

Promise.racePollyfill([Action1('avinash'),Action2('rajesh'),Action3('vishnu')]).then((res)=>console.log(res));


























//async await 








// const result = async ()=>{
    
//     try{
    
//     const message4 = await Action2('avinash3');
//     console.log(message4);
//     const message3 = await Action1('avinash2');

//     console.log(message3);
//  }
//     catch(error){
//         console.log('this is failed ');
//     }
// }
// result();
// console.log('stop');





































// async await 


// example problems 

// Question1 

// console.log('start');

// const promise1 = new Promise ((resolve,reject)=>{
//     console.log('1');
//     resolve('2');
// })

// promise1.then((res)=>console.log(res)).catch((err)=>console.log(err));

// console.log('end');

// Question 2

// console.log('start');

// const promise1 = new Promise ((resolve,reject)=>{
//     console.log('1');
    
//     resolve('2');
//     debugger
//     console.log('3');
// })

// promise1.then((res)=>console.log(res)).catch((err)=>console.log(err));

// console.log('end');
// reportWebVitals(console.log);
