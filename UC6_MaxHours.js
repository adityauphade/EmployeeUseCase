// variables calling
let c = require("./const")
let attendance_wage = [];
let attendance_hours = [];

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
                attendance_wage.push(c.fulltime * c.rate);
                attendance_hours.push(c.fulltime);
                break;
            case 1:
                emphours = c.fulltime + emphours;
                workdays++;
                attendance_wage.push(c.parttime * c.rate)
                attendance_hours.push(c.parttime);
                break;
            default:
                attendance_wage.push(0)
                attendance_hours.push(0);
                break;
        }
        c.duration_days++;
    }
    return {
        emphours,
        workdays
    };  
}

var res = restricted_thours();

//wage
function wage(){

    c.empwage = res.emphours * c.rate;
    return c.empwage;
}

//display
function display(){
    console.log("----------Welcome Employee----------")
    console.log(`Monthly Wage: ${wage()}\nHours worked: ${res.emphours}/${c.maxhours}\nDays worked: ${res.workdays}/${c.maxdays}`);
    console.log(`The Daily Wage: ${attendance_wage}`);
    console.log(`The Daily Hours: ${attendance_hours}`);

}

display();

