function calories(arr) {
    let food = {};

    for (let i = 0; i < arr.length - 1; i += 2) {
        food[arr[i]] = Number(arr[i + 1]);
    }

    console.log(food);
}

calories(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);