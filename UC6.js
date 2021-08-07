// let fulltime = 8;
// let parttime = 4;
// let rate = 20;
// let duration_days = 0;
// let empwage = 0;
// let emphours = 0;
// let total = 0;

// variables calling
let c = require("./const")

//employee hours with restrictive conditions
function restricted_thours(){
    let workdays = 0;
    let emphours = 0;
    while (c.duration_days < c.maxdays && emphours < c.maxhours) {
        let empshift = Math.floor(Math.random()*10)%3;
        switch (empshift) {
            case 0:
                emphours = c.parttime + emphours;
                workdays++;
                break;
            case 1:
                emphours = c.fulltime + emphours;
                workdays++;
                break;
            default:
                break;
        }
        c.duration_days++;
    }
    return {
        emphours,
        workdays
    };  
}

//wage
function wage(){

    c.empwage = restrict.emphours * c.rate;
    return c.empwage;
}
var restrict = restricted_thours();

//display

console.log("----------Welcome Employee----------")
// console.log("Hours worked: " + restricted_thours() + " and the days worked:" + c.duration_days);
console.log(`Monthly Wage: ${wage()}\nHours worked: ${restrict.emphours}/${c.maxhours}\nDays worked: ${restrict.workdays}/${c.maxdays}`)
