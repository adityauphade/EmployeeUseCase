const c = require("./const");

function employee_shift(){
    let empshift = Math.floor(Math.random() * 10) % 2
    let empwage = 0;
    switch (empshift) {
        case 0:
            empwage = c.rate * c.parttime;
            console.log("Employee is working Part time & the wage is " + empwage)
            break;
        case 1:
            empwage = c.rate * c.fulltime;
            console.log("Employee is working Full time & the wage is " + empwage)
            break;
    }
}

employee_shift()