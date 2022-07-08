import { PrductService } from 'src/app/services/prduct.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
// message:any;

  constructor(private prductService: PrductService) { }

  ngOnInit(): void {
  }

//   getDetails(){
//     this.prductService.all().subscribe((result)=>{ 
//       this.message=result;
//       console.log(this.message);
//     },(error)=>{
//       this.message="error";
//     },()=>{
// this.message="complete";
//     });

    
  
  
}
