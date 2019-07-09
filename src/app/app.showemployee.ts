import { Component,Input, OnChanges } from "@angular/core";

@Component({
    selector:'show',
    templateUrl:'app.showemployee.html'
})
export class showEmployee implements OnChanges{
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.addEmployee();
    }


    empAll:any[]=[];
    @Input()
    empId:number;
    @Input()
    empName:string;
    @Input()
    empSalary:number;





    //inchild1:string;

    // empId:number=this.inchild;
    // empName:string=this.inchild;
    // empSalary:number=this.inchild;

    addEmployee():any{
        this.empAll.push({empId:this.empId,empName:this.empName,empSalary:this.empSalary});
        console.log("hello")
    }

    // deleteEmployee(data:number):any{
    //     // alert("Delete..."+data);
    //      this.empAll.splice(data,1)
    //  }
}