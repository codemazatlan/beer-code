
// var ignoreDates = [
//     "2017-10-04"
// ]

function getNextBeerCodeDay() {
    var now = new Date(),
        d = new Date(),
        month = d.getMonth(),
        wednesdays = [];

    d.setDate(1);
    d.setHours(20, 0, 0, 0);

    // Get the first Monday in the month
    var n = ((10-d.getDay()) % 7 + 1);
    console.log("first wed = "+n)

    // check first Wed of this month
    d.setDate(n);
    d.toLocaleString()
    if(now < d && !ignoreDates.includes(d.toISOString().split("T")[0])) {
        return d;
    }

    // check third Wed of this month
    d.setDate(n+14);
    if(now < d) {
        return d;
    }

    // check first Wed of next month
    d.setMonth((d.getMonth() + 1) % 12);
    d.setDate(1);
    n = ((10-d.getDay()) % 7 + 1);
    d.setDate(n);
    return d;
}

document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("next-beer-code-day");
    var next = getNextBeerCodeDay();
    if(next.getDate() === (new Date()).getDate()) {
        el.innerText = "HOY";
    } else {
        el.innerText = next.toLocaleDateString('es-MX', {month: "short", day: "numeric"});
    }
 });