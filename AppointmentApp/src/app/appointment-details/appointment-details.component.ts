import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    this.service.refreshList1();
  }

  logOut(){
     this.router.navigateByUrl('/')
  }

  
}
