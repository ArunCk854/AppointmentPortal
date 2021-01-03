import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentDetail } from '../shared/appointment-detail.model';
import { AppointmentDetailService } from '../shared/appointment-detail.service';
import { DoctorDetailService } from '../shared/doctor-detail.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  constructor(public service: AppointmentDetailService,
    private toastr:ToastrService,
    private router:Router,
    public service1:DoctorDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.refreshList1();
  }

  logOut(){
     this.router.navigateByUrl('/')
  }

  populateForm(selectedRecord:AppointmentDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are You Sure?'))
    {
    this.service.deleteAppointmentDetail(id)
    .subscribe(
       res=>{
         this.service.refreshList();
         this.toastr.error("Cancelled Appointment Successfully",'Appointment Booking');
       },
       err =>{console.log(err)}
    )
      }
     }
}
