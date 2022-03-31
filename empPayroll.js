class EmployeePayroll
{
    id;
    name;
    salary;
    gender;
    startDate;

    constructor(...params)
    {
        this.id  = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name(){ return this._name; }
    set name(name){ this._name = name; }

    toString(){
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id : " + this.id + ", name : " + this.name+", salary : " + this.salary + ", Gender : " + this.gender + ", StartDate : "+ empDate;
    }
}

let employeePayroll = new EmployeePayroll(1,"Lawerence",50000,"M",new Date());
console.log(employeePayroll.toString());
employeePayroll.name = "john";
console.log(employeePayroll.toString());
let newEmployeePayroll = new EmployeePayroll(2,"Terissa",30000,"F",new Date());
console.log(newEmployeePayroll.toString());