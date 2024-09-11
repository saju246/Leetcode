// Problem =  Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

//  Solution 
/**
 * @param {number} millis
 */
async function sleep(millis) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        },millis)
    })

    return promise
}