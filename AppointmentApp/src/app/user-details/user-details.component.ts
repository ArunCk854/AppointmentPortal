import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../shared/user-detail.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service: UserDetailService) { }

  ngOnInit(): void {
     this.service.refreshList();
  }

}
