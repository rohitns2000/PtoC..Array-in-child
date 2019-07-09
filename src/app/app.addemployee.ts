import { Component } from "@angular/core";

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'
})

export class AddEmployeeComponent{

    empId:number;
    empName:string;
    empSalary:number;
    status:boolean=false;
    
    
    //empSent:string="Hello";
    //empSent1:string="Hello1";

    // empAll:any[]=[{empId:1001,empName:"ABCD",empSalary:10000.1},
    // {empId:1002,empName:"BCD",empSalary:10000.11},
    // {empId:1003,empName:"CD",empSalary:10000.12}];//writing an array

    toShow():any{
        //this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary})//will show[object],[object]......
        // //this.empAll.push(this.empId,this.empName,this.empSalary)//will show the values which is being inserted even while printing
        // console.log("Employee Added!..."+this.empAll)
        // const obj ={id: this.empId,name: this.empName, salary: this.empSalary};
        //this.empSent = this.empId+" "+this.empName+" "+this.empSalary;
        this.status=!status;
    }

    // deleteEmployee(data:number):any{
    //    // alert("Delete..."+data);
    //     this.empAll.splice(data,1)
    // }
}