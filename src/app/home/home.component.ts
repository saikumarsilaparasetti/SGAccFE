import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../shared/customer';
import {Transection} from '../shared/transection';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


user={id:null};
// result_user:any={
//   name:""
// };

_user={
  cust_id:"",
  name:"",
  Iname:"",
  amount:null,
  remarks:""
}
//dataSource:Transection[];
transections:Transection[];
_first:boolean=true;
valid:boolean=false;
res_user:Customer;
in_valid:boolean=true;
_issue:boolean=false;
_issue_cust_id:string="";
_stat:boolean=false;

  constructor(private http:HttpClient) { }
  // elements: any = [
  //   {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
  //   {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
  //   {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  // ];
elements:any;

  headElements = ['Date','Item', 'Amount', 'Customer' ,'Remarks'];
  ngOnInit(): void {



  }
  onSubmit(){
    alert('alert');
  }
  verifyCust(){
    this._first=false;
    this.in_valid=false;
    //this.http.post("http://localhost:3000/verify/",this.user).subscribe(
      this.http.post("http://sgacc-backend.herokuapp.com/verify/",this.user).subscribe(
      res=>{
        //console.log(res);
        if(res===null){
          console.log("No such user");
          this.valid=false;
          this.in_valid=true;
        }
        else{//console.log("In else");
        //var len=Object.keys(res[0]).length;
        //console.log(len);
        //alert(JSON.stringify(res))
        this.res_user=res[0];
        this._issue_cust_id=this.res_user["_id"]
        //console.log(Object.keys(res[0]).length)
        if(Object.keys(res).length==1 && Object.keys(res[0]).length){
          this.valid=true;  
          this.in_valid=false;
          
          //console.log(this.res_user['contact']);
          //  console.log('Valid user');
        }else{
          this.valid=false;
          this.in_valid=true;
          this.res_user=null;
          //console.log('Invalid details');
        
        }
      }
      }
    );
//    console.log(res["name"]);
  }


cancel():void{
  this._issue=false;
}

issue(){
  this._issue=true;
}

  onIssue(){
    this._user['cust_id']=this._issue_cust_id;
    //this.http.post("http://localhost:3000/issue/",this._user).subscribe(
      this.http.post("http://sgacc-backend.herokuapp.com/issue/",this._user).subscribe(
      res=>{
        if(res==null){
          console.log("ERROR");
        }else{
          console.log("DONE!!");
          this._user['Iname']="";
          this._user['name']="";
          this._user['amount']="";
          //console.log(res[0]['fin_bal']);
          this.res_user['balance']=res[0]['fin_bal'];
        }
      }
    )
    //alert("Issue")
    console.log("On issue"+this._issue_cust_id);
    this._issue=false;
  }  

  statement(){
    this._stat=true;
    //this.http.post<Transection[]>("http://localhost:3000/getStatement/",{'cust_id':this._issue_cust_id}).subscribe(
      this.http.post<Transection[]>("http://sgacc-backend.herokuapp.com/getStatement/",{'cust_id':this._issue_cust_id}).subscribe(
      res=>{
        if(res==null){
          console.log('No Transections');
        }else{
          this.transections=res;
          this.elements=res;
          //this.dataSource=this.transections;
          console.log(res)
        }
      })

  }

}
