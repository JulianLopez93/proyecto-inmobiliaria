import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';
import{SecurityService}from'src/app/services/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private secService: SecurityService, 
    private router:Router) { }

  ngOnInit() {

    this.secService.logoutUser().subscribe(data=>{
      //user=data;  
    this.router.navigate(['/home'])
    
      
  
  })
   


  }

}
