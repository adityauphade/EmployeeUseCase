let c = require("./const")

function job_hours(){
    let workdays = 0;
    let emphours = 0;
    while (c.duration_days < c.maxdays) {
        let empshift = Math.floor(Math.random() * 10) % 3
        switch (empshift) {
            case 0:
                emphours = emphours + c.parttime;
                workdays++;
                break;
            case 1:
                emphours = emphours + c.fulltime;
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

const h = job_hours();
 
function monthly_wage(){
    return h.emphours * c.rate;
}

console.log(`Total days: ${h.workdays}/${c.maxdays}\nTotal Hours: ${h.emphours}\nTotal Wage: ${monthly_wage()}`)
