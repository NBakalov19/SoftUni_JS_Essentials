function solve(sequence) {

    let bestSequence = [];
    let currSequence = [];
    for (let i = 0; i < sequence.length - 1; i++) {
        currSequence.push(sequence[i]);
        for (let j = i + 1; j < sequence.length; j++) {

            let previousElement = sequence[j - 1];
            let element = sequence[j];

            if (previousElement < 0 && element > 0) {
                currSequence.push(element);

            } else if (previousElement > 0 && element < 0) {
                currSequence.push(element);
            } else {
                if (currSequence.length > bestSequence.length && currSequence.length > 1) {
                    bestSequence = [];
                    bestSequence = currSequence.slice(0);
                }
                currSequence = [];
                break;
            }

            if (j === sequence.length - 1) {
                if (currSequence.length > bestSequence.length && currSequence.length > 1) {
                    bestSequence = [];
                    bestSequence = currSequence.slice(0);
                }
                currSequence = [];
                break;
            }
        }
    }


    if (bestSequence.length > 1) {
        console.log(`The longest sequence is ${bestSequence.join(', ')}`);
    } else {
        console.log(`In ${sequence.join(', ')} no special sequence is found`);
    }
}

solve([-1, -1, -1, 1, -1]);