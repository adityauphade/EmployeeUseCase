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

        //UC10 - Use map instead of push

        while (c.duration_days < c.maxdays && emphours < c.maxhours) {
            let empshift = Math.floor(Math.random()*10)%3;
            switch (empshift) {
                case 0:
                    emphours = c.parttime + emphours;
                    workdays++;
                    //attendance_wage.push(c.fulltime * c.rate);
                    attendance_hours.push(c.fulltime);
                    attendance.push("Present");
                    break;
                case 1:
                    emphours = c.fulltime + emphours;
                    workdays++;
                    //attendance_wage.push(c.parttime * c.rate)
                    attendance_hours.push(c.parttime);
                    attendance.push("Present");
                    break;
                default:
                    //attendance_wage.push(0)
                    attendance_hours.push(0);
                    attendance.push("Absent");
                    break;
            }
            c.duration_days++;
        }
        var attendance_wage = attendance_hours.map(MyFunc)
        function MyFunc(val, index){
            console.log(`${index+1} => ${val*c.rate}`)
            return val*c.rate;
        }

        console.log(attendance_wage);
        var total = 0;
        attendance_wage.forEach(val => {total += val;})
        console.log(total);
        // c.empwage = emphours * c.rate;

        //Wage with days
        // attendance.filter(Shift_Days);
        // function Shift_Days(item, index){
        //     console.log(`${index + 1} : ${item}`);
        // }
        // console.log(`\n${this.name}, The Monthly Wage for you with restricted hour limit of ${c.maxhours} hours is: ${c.empwage}\nHours worked by you, ${this.name} are: ${emphours}/${c.maxhours}\nDays worked by you, ${this.name} are: ${workdays}/${c.maxdays}\n`)
        

    }
}

const emp1 = new Employee("Ganya");
emp1.monthly_restrictedhours_data();
