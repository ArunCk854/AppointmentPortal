import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserDetail } from 'src/app/shared/user-detail.model';
import { UserDetailService } from 'src/app/shared/user-detail.service';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styles: [
  ]
})
export class UserDetailFormComponent implements OnInit {

  constructor(public service:UserDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.service.postUserDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.toastr.success('Successfully Registered','Signup Notification')
      },
     err => { console.log(err); } 

    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new UserDetail();
  }

}
