import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DoctorDetail } from 'src/app/shared/doctor-detail.model';
import { DoctorDetailService } from 'src/app/shared/doctor-detail.service';

@Component({
  selector: 'app-doctor-detail-form',
  templateUrl: './doctor-detail-form.component.html',
  styles: [
  ]
})
export class DoctorDetailFormComponent implements OnInit {

  constructor( public service:DoctorDetailService,
               private toastr:ToastrService
               ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    if (this.service.formData.doctorDetailId ==0)
      this.insertRecord(form)
    else
      this.updateRecord(form);
  }
  
  insertRecord(form:NgForm){
    this.service.postDoctorDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Addded Successfully ','Doctor List')
      },
      err =>{ console.log(err); }
    );
  }
  
  updateRecord(form:NgForm){
    this.service.putDoctorDetail().subscribe(
      res =>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Successfully','Doctor List')
      },
      err =>{ console.log(err); }
    );
  }
  
  
  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new DoctorDetail();
  }
  


}
