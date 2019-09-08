function getStringsLength(firstString, secondString, thirdString) {
    let totalLength = firstString.length + secondString.length + thirdString.length;

    console.log(totalLength);
    console.log(Math.floor(totalLength / 3));
}

getStringsLength('chocolate', 'ice cream', 'cake');