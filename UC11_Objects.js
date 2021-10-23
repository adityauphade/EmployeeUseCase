let c = require("./const")
let attendance_wage = [];
let attendance_hours = [];
let attendance = [];
class Employee{
    // Taking name
    constructor(name){
        this.name = name;
    }

    //monthly wage with restrictions w output
    monthly_restrictedhours_data(){
        let workdays = 0;
        let emphours = 0;
        c.duration_days = 0;
        const wage_map = new Map();
        var index = 1;

        while (c.duration_days < c.maxdays && emphours < c.maxhours) {
            let empshift = Math.floor(Math.random()*10)%3;
            switch (empshift) {
                case 0:
                    emphours = c.fulltime + emphours;
                    workdays++;
                    attendance.push({days : index, daily_wage : c.fulltime * c.rate, atten : "Present"});
                    index++;
                    break;
                case 1:
                    emphours = c.parttime + emphours;
                    workdays++;
                    attendance.push({days : index, daily_wage : c.parttime * c.rate, atten: "Present"});
                    index++;
                    break;
                default:
                    attendance.push({days : index, daily_wage : 0, atten: "Absent"});

                    index++;
                    break;
            }
            c.duration_days++;
        }
        console.log(attendance);
    }
}

const emp1 = new Employee("Ganya");
emp1.monthly_restrictedhours_data();
