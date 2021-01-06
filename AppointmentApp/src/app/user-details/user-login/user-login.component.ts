import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailService } from 'src/app/shared/user-detail.service';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { __values } from 'tslib';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styles: [
  ]
})
export class UserLoginComponent implements OnInit {
    
  errorMessage: any;
  loading: boolean;
  //alert:boolean= false;
  public userNAME:any;
  public passWORD:any;

  constructor( public service: UserDetailService,
               private router:Router,
               private toastr:ToastrService,
               ) {

                }

  ngOnInit(): void {
    this.service.refreshList();
  }

  cancel(){
    this.router.navigateByUrl('/')
     }
  onSubmit(form: NgForm){

    const Data ={
      userNAME : this.userNAME,
      passWORD: this.passWORD
    } ;

    if(this.userNAME=='admin123' && this.passWORD=='admin123'){
      
      this.router.navigateByUrl('/doctor');
      this.toastr.success("admin")
   }
   else{

 
    this.service.UserLogin(Data).subscribe(
      (res:any) => {
        if (res.error){
          this.toastr.show("Invalid credentials");
          } 
        
       else{
        this.router.navigateByUrl('/bookanappointment');
        this.toastr.success("login succes");
        //this.router.navigateByUrl('/home');
        
       }
     }, 
      err => {console.log(err)
        //this.loading=false;
        //this.errorMessage=console.error();
        
        //this.router.navigateByUrl('/');
        this.toastr.show("Invalid credentials")});
      
      }
      this.resetForm(form);
    
 
}
resetForm(form:NgForm)
{
  form.form.reset();
 
}
}


    