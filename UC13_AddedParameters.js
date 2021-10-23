class EmployeePayroll{
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    set changeName(new_name){
        this.name = new_name;
    }

    set changeSalary(new_salary){
        this.salary = new_salary;
    }

    display(){
        console.log(`\nID: ${this.id}\nNAME: ${this.name}\nSALARY: ${this.salary}`)
    }
}

class EmployeePayrollchild extends EmployeePayroll{
    constructor(...params){
        super(...params.slice(0, 2));
        this.gender = params[3];
        this.start_date = params[4];
    }

    get getSalary(){
        return this.salary;
    }

    get getName(){
        return this.name;
    }
    
    set changeName(new_name){
        this.name = new_name;
    }

    set changeSalary(new_salary){
        this.salary = new_salary;
    }

    display(){
        console.log(`\nID: ${this.id}\nNAME: ${this.name}\nSALARY: ${this.salary}\nGENDER: ${this.gender}\nSTART DATE: ${this.start_date}`)
    }
}



var emp1 = new EmployeePayrollchild(007, "Ganya", 10000, "Binary", "02/08")
emp1.display();
emp1.changeName = "Ali";
emp1.changeSalary = 15000
emp1.display();
console.log(emp1.getName);
console.log(emp1.getSalary);