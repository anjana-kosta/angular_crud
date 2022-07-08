import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrductService } from 'src/app/services/prduct.service';

@Component({
  selector: 'app-prduct-edit',
  templateUrl: './prduct-edit.component.html',
  styleUrls: ['./prduct-edit.component.css']
})

//reactive form module use this edit component
export class PrductEditComponent implements OnInit {

  
  form: FormGroup;
  id: number;

  constructor(private route: ActivatedRoute,
     private formBuilder: FormBuilder, 
     private prductService: PrductService, private router: Router) { 
    
      this.form = this.formBuilder.group({
        title: '',
        image: ''
      })
  
      this.id = this.route.snapshot.params['id'];
  
    //patchValue reactive method

    this.prductService.get(this.id).subscribe(
      prduct => this.form.patchValue(prduct)
    )
  }

  ngOnInit(): void {
  }

  submit(): void {
this.prductService.update(this.id, this.form.getRawValue()).subscribe(
  () => {
    this.router.navigate(['/admin/product'])
    alert("Sucessfull Update");
  }
)
  }

}
