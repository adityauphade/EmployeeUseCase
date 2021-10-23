//forEach

//Reduce

let c = require("./const")
let attendance_wage = [];
let attendance_hours = [];
let attendance = [];
class Employee{
    // Taking name
    constructor(name){
        this.name = name;
    }

    //attendance_check
    employee_check(){
        const is_absent = 0;
    
        let empcheck = Math.floor(Math.random() * 10) % 2;    
        if (empcheck == is_absent) {
            console.log(`${this.name}, you are Absent today\n`);
            attendance.push("Absent");
            
        }
        else{
            console.log(`${this.name}, you are Present today\n`)
            attendance.push("Present");

        }
        console.log(attendance);
    }

    //shiftwise daily wage
    employee_shift(){
        let empshift = Math.floor(Math.random() * 10) % 2
        let empwage = 0;
        switch (empshift) {
            case 0:
                empwage = c.rate * c.parttime;
                console.log(`\n${this.name}, you are working Part time & the wage is ${empwage}\n`)
                break;
            case 1:
                empwage = c.rate * c.fulltime;
                console.log(`\n${this.name}, you are working Full time & the wage is ${empwage}\n`)
                break;
        }
    }

    //monthly wage w/o restrictions
    // monthly_data(){
    //     let workdays = 0;
    //     let emphours = 0;
    //     while (c.duration_days < c.maxdays) {
    //         let empshift = Math.floor(Math.random() * 10) % 3
    //         switch (empshift) {
    //             case 0:
    //                 emphours = c.parttime + emphours;
    //                 workdays++;
                    
    //                 break;
    //             case 1:
    //                 emphours = c.fulltime + emphours;
    //                 workdays++;
                    
    //                 break;   
    //             default:
    //                 break;
    //         }
    //         c.duration_days++;
    //     }
    //     const monthly_wage = emphours * c.rate;
    //     console.log(`\nTotal days worked by you, ${this.name} are: ${workdays}/${c.maxdays}\nTotal Hours worked by you, ${this.name} are: ${emphours}\nTotal Wage earned by you, ${this.name} is: ${monthly_wage}\n`);
        
    // }


    //monthly wage with restrictions w output
    monthly_restrictedhours_data(){
        let workdays = 0;
        let emphours = 0;
        c.duration_days = 0;
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
        // c.empwage = emphours * c.rate;
        let sum = 0;
        attendance_wage.forEach(SumFunction);
        function SumFunction(item){
            sum += item;
        }
        c.empwage = sum;
        console.log(`\n${this.name}, The Monthly Wage for you with restricted hour limit of ${c.maxhours} hours is: ${c.empwage}\nHours worked by you, ${this.name} are: ${emphours}/${c.maxhours}\nDays worked by you, ${this.name} are: ${workdays}/${c.maxdays}\n`)
        console.log(`The Daily Wage: ${attendance_wage}`);
        console.log(`The Daily Hours: ${attendance_hours}`);
    }

    //display welcome
    welcome(){
        console.log(`---------- WELCOME TO THE EMPLOYEE HUB: ${this.name} ----------\n`)    }

}

const emp1 = new Employee("Ganya");
emp1.welcome();
emp1.employee_check();
emp1.employee_shift();
// emp1.monthly_data();
emp1.monthly_restrictedhours_data();
