import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrductService } from 'src/app/services/prduct.service';

@Component({
  selector: 'app-prduct-create',
  templateUrl: './prduct-create.component.html',
  styleUrls: ['./prduct-create.component.css']
})

//ngnodule and form module use this create module
export class PrductCreateComponent implements OnInit {

  //declare the veriable
title = '';
image = '';

  constructor(
    private prductService: PrductService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() : void{
    const data ={
      title : this.title,
      image : this.image,
    }

    this.prductService.create(data).subscribe(
      ()=>{
this.router.navigate(['/admin/product'])
alert("Sucessfull Created");
      }
    )
  }

}
