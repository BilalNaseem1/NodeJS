// synchronous code is executed line by line in a sequential manner. code that waits for an operation to complete
// asynchronous code is executed in parallel

// asynchronous code allows multiple operations to be performed concurrently without waiting 

console.log('Task 0');

setTimeout(() => {
    console.log('Task 1');
}, 2000);

console.log('Task 2');

console.log('Task 3');

console.log('Task 4');



console.log('------------------')


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTasks() {
    console.log('Task 0');

    await delay(2000);  // Wait for 2 seconds
    console.log('Task 1');

    console.log('Task 2');
    console.log('Task 3');
    console.log('Task 4');
}

runTasks();
