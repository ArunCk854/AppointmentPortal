import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DoctorDetail } from '../shared/doctor-detail.model';
import { DoctorDetailService } from '../shared/doctor-detail.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styles: [
  ]
})
export class DoctorDetailsComponent implements OnInit {

  constructor(public service:DoctorDetailService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.refreshList1();
  }

   logOut(){
    this.router.navigateByUrl('/')
      }
      
      
  populateForm(selectedRecord:DoctorDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Are You Sure?'))
    {
    this.service.deleteDoctorDetail(id)
    .subscribe(
       res=>{
         this.service.refreshList1();
         this.toastr.error("Deleted Successfully",'Doctor list');
       },
       err =>{console.log(err)}
    )
      }
     }

}
