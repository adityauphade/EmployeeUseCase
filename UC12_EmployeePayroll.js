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



var emp1 = new EmployeePayroll(007, "Ganya", 10000)
emp1.display();
emp1.changeName = "Ali";
emp1.changeSalary = 15000
emp1.display();