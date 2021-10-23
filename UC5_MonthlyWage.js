let c = require("./const")
let attendance_wage = [];
let attendance_hours = [];

function job_hours(){
    let workdays = 0;
    let emphours = 0;
    while (c.duration_days < c.maxdays) {
        let empshift = Math.floor(Math.random() * 10) % 3
        switch (empshift) {
            case 0:
                emphours = emphours + c.parttime;
                workdays++;
                attendance_wage.push(c.fulltime * c.rate);
                attendance_hours.push(c.fulltime);
                
                break;
            case 1:
                emphours = emphours + c.fulltime;
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

const h = job_hours();

function monthly_wage(){
    return h.emphours * c.rate;
}

console.log(`Total days: ${h.workdays}/${c.maxdays}\nTotal Hours: ${h.emphours}\nTotal Wage: ${monthly_wage()}`)
console.log(`The Daily Wage: ${attendance_wage}`);
console.log(`The Daily Hours: ${attendance_hours}`);
