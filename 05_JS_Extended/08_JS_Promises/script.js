let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
})

p.then((message) => {
    //wird bei resolved aufgerufen
    console.log("This is in the then: " + message);
}).catch((message) => {
    //wird bei reject aufgerufen
    console.log("This is in the catch: " + message);
})

//--------------------------------------------
//Callback vs. Promise

const userLeft = false
const userWatchingCatMeme = false

//Mit callback
function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message);
}, (error) => {
    console.log(error.name + '' + error.message);
})

//Mit Promise
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe');
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + '' + error.message);
})

//--------------------------------------------
//--------------------------------------------

const hausaufgabenMachenEins = new Promise((resolve, reject) => {
    resolve("HÜ 1 gemacht");
})
const hausaufgabenMachenZwei = new Promise((resolve, reject) => {
    resolve("HÜ 2 gemacht");
})
const hausaufgabenMachenDrei = new Promise((resolve, reject) => {
    resolve("HÜ 3 gemacht");
})

//Die Promises laufen alle gleichzeitig und es wird dann gewartet bis alle fertig sind
Promise.all([
    hausaufgabenMachenEins,
    hausaufgabenMachenZwei,
    hausaufgabenMachenDrei
]).then((messages) => {
    console.log(messages);
})

// Alle Promises laufen immernoch gleichzeitig, es wird jedoch nur auf die gewartet die als erstes fertig ist
// -> man bekommt kein array zurück, sondern nur eine message
Promise.race([
    hausaufgabenMachenEins,
    hausaufgabenMachenZwei,
    hausaufgabenMachenDrei
]).then((message) => {
    console.log(message);
})