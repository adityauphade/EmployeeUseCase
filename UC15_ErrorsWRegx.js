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

    validity(){
        try{
            //name
            var regx_name = /^([A-Z][a-z]{2,30})$/;
            if (regx_name.test(this.name) == true) {
                console.log(`Name is validated`);
            }
            else{
                console.log(`Name is not validated`);
            }
        
        //gender
            var regx_gender = /^([MFB]{1})$/;
            if (regx_gender.test(this.gender) == true) {
                console.log(`Gender is validated`);
            }
            else{
                console.log(`Gender is not validated`);
            }
        }
        
        catch(error){
            console.log(`${error}`);
        }
        
        finally{
            console.log(`Problem in Validation`)
        }
        
    }
}



var emp1 = new EmployeePayrollchild(007, "Ganya", 10000, "M", "02/08")
emp1.display();
emp1.changeName = "Ali";
emp1.changeSalary = 15000
emp1.display();
console.log(emp1.getName);
console.log(emp1.getSalary);
emp1.validity();

