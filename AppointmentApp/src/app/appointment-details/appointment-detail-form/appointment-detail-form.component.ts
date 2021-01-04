import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppointmentDetail } from 'src/app/shared/appointment-detail.model';
import { AppointmentDetailService } from 'src/app/shared/appointment-detail.service';

@Component({
  selector: 'app-appointment-detail-form',
  templateUrl: './appointment-detail-form.component.html',
  styles: [
  ]
})
export class AppointmentDetailFormComponent implements OnInit {

  constructor(public service:AppointmentDetailService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }
 
onSubmit(form:NgForm){
  if (this.service.formData.appointmentDetailId ==0)
    this.insertRecord(form)
}

insertRecord(form:NgForm){
  this.service.postAppointmentDetail().subscribe(
    (res:any) =>{
      this.resetForm(form);
      this.service.refreshList();
      this.toastr.success('Appointment Booked Successfully, and Token Number:'+res.appointmentDetailId,'Appointment Booking');
    },
    err =>{ console.log(err); }
  );
}



resetForm(form:NgForm){
  form.form.reset();
  this.service.formData = new AppointmentDetail();
}

}
