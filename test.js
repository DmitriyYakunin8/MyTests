let cars = {
    wheels: 4,
}

let bmw = Object.create(cars, {
    speed: {
        value: 250,
        enumerable: false
    }
})


for (let key in bmw) {
    console.log(key);
}