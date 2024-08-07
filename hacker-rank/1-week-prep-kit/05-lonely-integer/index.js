function lonelyinteger(a) {
    var counts = a.reduce(function (acc, curr) {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    for (var count in counts) {
        if (counts[count] === 1)
            return parseInt(count);
    }
    return -1;
}
var arr = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyinteger(arr)); // Expected output: 4
