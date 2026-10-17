// 14. posNeg
var posNeg = function (a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }

    return (a < 0 && b > 0) ||
        (a > 0 && b < 0);
};

// 15. notString
var notString = function (str) {
    return str.startsWith("not") ? str : "not " + str;
};

// 16. Compare the Triplets
var compareTriplets = function (a, b) {
    let aPoints = 0;
    let bPoints = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            aPoints++;
        } else if (a[i] < b[i]) {
            bPoints++;
        }
    }

    return [aPoints, bPoints];
};

// 17. A Very Big Sum
var aVeryBigSum = function (ar) {
    let sum = 0;

    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    return sum;
};

// 18. Staircase
var staircase = function (n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        let spaces = " ".repeat(n - i);
        let hashes = "#".repeat(i);

        result.push(spaces + hashes);
    }

    return result.join("\n");
};

// 19. Grading Students
var gradingStudents = function (grades) {
    return grades.map(function (grade) {
        if (grade < 38) {
            return grade;
        }

        let nextMultiple = Math.ceil(grade / 5) * 5;

        if (nextMultiple - grade < 3) {
            return nextMultiple;
        }

        return grade;
    });
};



// 20. Time Conversion
var timeConversion = function (s) {
    let period = s.slice(-2);
    let time = s.slice(0, -2);
    let parts = time.split(":");

    let hour = parts[0];
    let minute = parts[1];
    let second = parts[2];

    if (period === "AM") {
        if (hour === "12") {
            hour = "00";
        }
    } else {
        if (hour !== "12") {
            hour = String(Number(hour) + 12);
        }
    }

    return hour + ":" + minute + ":" + second;
};



// 21. String Repeat
var repeatStr = function (n, s) {
    return s.repeat(n);
};



// 22. Reversed Strings
var solution = function (str) {
    return str.split("").reverse().join("");
};



// 23. Sum of Positive
var positiveSum = function (arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }

    return sum;
};



// 24. Grasshopper - Summation
var summation = function (num) {
    return num * (num + 1) / 2;
};



// 25. Convert a Boolean to a String
var booleanToString = function (b) {
    return String(b);
};
