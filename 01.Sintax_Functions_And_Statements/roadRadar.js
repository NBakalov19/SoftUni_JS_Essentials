function radar(input) {
    let speed = input[0];
    let area = input[1];

    let speedLimit = 0;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    let result = '';
    if (speed > speedLimit) {
        if (speed - speedLimit <= 20) {
            result = 'speeding';
        } else if (speed - speedLimit <= 40) {
            result = 'excessive speeding';
        } else {
            result = 'reckless driving';
        }
    }

    console.log(result);
}

radar([40, 'city']);