
//let a = async result => result

//console.log(a ('Hello'))

// let a= async result => {
//     throw new Error('Try to catch me!')
//     return result
// }
//  a('Hello').then( result => console.log(result, 'friends!')).catch(( error => console.log(error)))

// let a = async result => {
//     try{
//        return result
//     } catch (e) {
//         throw new Error ('Try to catch me!')

//     }
// }

// a('Hello').then( result => console.log(result, 'friends!')).catch(( error => console.log(error)))

// function delay(x){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             if(x == 100){
//                 reject('We have caught our error!')
//             }
//             resolve(x)
//         },2000)
//     })
// }


// async function sum(x) {
//     try {
//         console.log('calling')
//         const a = await delay(10)
//         console.log(a)
//         const b = await delay(20)
//         console.log(b)
//         const c = await delay(100)
//         console.log(c)
//          return x + a + b +c 
//     } catch (error) {
//         throw new Error(error)
//     }
// }

//module.exports = sum

    // sum (100).then( result =>{
    //     console.log(result)
    // }).catch( error => console.log(error))

// let p1 = Promise.resolve(1)
// console.log(p1)
// let p2 = Promise.resolve(2)
// console.log(p2)
// let p3 = Promise.resolve(3)
// console.log(p3)
// let p4 = new Promise(( resolve, reject) => {
//     setTimeout(resolve, 8000, ' p4 - Delay 8 seconds!')
// })

// Promise.all([p1, p2, p3, p4]).then( values =>  {
//     console.log(values)
// })



