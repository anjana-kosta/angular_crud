import { Component, OnInit } from '@angular/core';
import { Prduct } from 'src/app/interfaces/prduct';
import { PrductService } from 'src/app/services/prduct.service';

@Component({
  selector: 'app-prducts',
  templateUrl: './prducts.component.html',
  styleUrls: ['./prducts.component.css'],
})
export class PrductsComponent implements OnInit {
  prducts: Prduct[] = [];

  constructor(private productService: PrductService) {}

  ngOnInit(): void {
    this.productService.all().subscribe((prducts) => {
      this.prducts = prducts;
    });
  }

  prductDel(id: number): void {
    this.productService.delete(id).subscribe(() => {
      this.prducts = this.prducts.filter((p) => p.id !== id);
      alert("Sucessfull Deleted");
    });
  }
}
