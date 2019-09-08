function calculateTimeToUniversity(steps, footprint, speed) {
    let walkedMeters = steps * footprint;
    let walkedKm = (steps * footprint) / 1000;
    let minutesRest = parseInt(walkedMeters / 500);
    let totalSeconds = walkedKm / speed * 3600 + minutesRest * 60;

    let hours = parseInt(totalSeconds / 3600);
    totalSeconds -= hours * 3600;
    let minutes = parseInt(totalSeconds / 60);
    let seconds = (totalSeconds % 60).toFixed(0);

    function formatTime(param) {
        if (param < 10) {
            param = '0' + param.toFixed(0);
        }
        return param;
    }

    console.log(`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`);
}

calculateTimeToUniversity(2564, 0.70, 5.5);