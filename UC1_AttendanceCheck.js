employee_check()

function employee_check(){
    const is_absent = 0;

    let empcheck = Math.floor(Math.random() * 10) % 2;
    //console.log(empcheck)

    if (empcheck == is_absent) {
        console.log("Employee is Absent")
    }
    else{
        console.log("Employee is present")
    }
}