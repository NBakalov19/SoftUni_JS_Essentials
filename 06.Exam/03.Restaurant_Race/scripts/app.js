function solve() {
    const elements = {
        textAreaElement: document.querySelector('#inputs textarea'),
        sendButton: document.getElementById('btnSend'),
        bestRestaurantElement: document.querySelector('#bestRestaurant p'),
        bestRestaurantWorkersElement: document.querySelector('#workers p'),
    };

    let bestRestaurant = '';
    let bestRestaurantAvgSalary = 0;
    let bestRestaurantMaxSalary = 0;
    let bestRestaurantWorkers = {};

    elements.sendButton.addEventListener('click', findBestRestaurant);

    function findBestRestaurant() {
        const input = elements.textAreaElement.value;

        if (input) {
            let restaurants = JSON.parse(input);

            let arr = [];

            for (let i = 0; i < restaurants.length; i++) {
                const restaurantName = restaurants[i].split(' - ')[0];

                for (let j = i + 1; j < restaurants.length; j++) {
                    const resName = restaurants[j].split(' - ')[0];
                    const resWorkers = restaurants[j].split(' - ')[1];

                    if (resName === restaurantName) {
                        let currRes = restaurants[i];
                        currRes += `, ${resWorkers}`;
                        restaurants.splice(i, 1, currRes);
                        restaurants.splice(j, 1);
                        break;
                    }
                }
            }

            for (const restaurant of restaurants) {
                let currRestaurantName = restaurant.split(' - ')[0];

                let restaurantWorkers = restaurant.split(' - ')[1].split(', ');


                let currBestSalary = 0;
                let currTotalSalary = 0;

                for (const restaurantWorker of restaurantWorkers) {
                    let workerSalary = Number(restaurantWorker.split(' ')[1]);

                    if (workerSalary > currBestSalary) {
                        currBestSalary = workerSalary;
                    }
                    currTotalSalary += workerSalary;
                }

                let restaurantWorkersObject = {};

                for (let i = 0; i < restaurantWorkers.length; i++) {
                    const workerName = restaurantWorkers[i].split(' ')[0];
                    restaurantWorkersObject[workerName] = Number(restaurantWorkers[i].split(' ')[1]);
                }

                restaurantWorkers = [];

                for (const worker in restaurantWorkersObject) {
                    restaurantWorkers.push([worker, restaurantWorkersObject[worker]]);
                }

                restaurantWorkers.sort(((a, b) => b[1] - a[1]));

                let currAvgSalary = currTotalSalary / restaurantWorkers.length;

                if (currAvgSalary > bestRestaurantAvgSalary) {
                    bestRestaurant = currRestaurantName;
                    bestRestaurantAvgSalary = currAvgSalary.toFixed(2);
                    bestRestaurantMaxSalary = currBestSalary.toFixed(2);
                    bestRestaurantWorkers = restaurantWorkers.slice(0);
                }
            }

            elements.bestRestaurantElement.textContent =
                `Name: ${bestRestaurant} Average Salary: ${bestRestaurantAvgSalary} Best Salary: ${bestRestaurantMaxSalary}`;

            let bestRestaurantWorkersOutput = '';

            for (const worker of bestRestaurantWorkers) {
                const workerName = worker[0];
                const workerSalary = worker[1];
                bestRestaurantWorkersOutput += `Name: ${workerName} With Salary: ${workerSalary} `;
            }

            elements.bestRestaurantWorkersElement.textContent = bestRestaurantWorkersOutput.trim();

            elements.textAreaElement.value = '';
        }
    }
}