let c = require("./const")
let attendance_wage = [];
let attendance_hours = [];
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

        c.empwage = emphours * c.rate;

        //Wage with days
        attendance_wage.filter(HalfShift_Days);
        function HalfShift_Days(item, index){
            if (item == c.fulltime*c.rate) {
                console.log(`${index + 1} : ${item}`);
            }
            else{
                console.log(`No Half Shift`);
            }
        }
        // console.log(`\n${this.name}, The Monthly Wage for you with restricted hour limit of ${c.maxhours} hours is: ${c.empwage}\nHours worked by you, ${this.name} are: ${emphours}/${c.maxhours}\nDays worked by you, ${this.name} are: ${workdays}/${c.maxdays}\n`)
        // console.log(`The Daily Wage: ${attendance_wage}`);
        // console.log(`The Daily Hours: ${attendance_hours}`);
        
    }
}

const emp1 = new Employee("Ganya");
emp1.monthly_restrictedhours_data();
