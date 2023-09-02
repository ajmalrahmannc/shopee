import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/networking/products/products.service';
import { AlertService } from 'src/util/alert/alert.service';
import { BlockService } from 'src/util/block_ui/block.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {

  constructor(private productSer:ProductsService,private blockUi:BlockService,private alert : AlertService) { }

  allProducts:any[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){

    this.blockUi.block();

    this.productSer.getAllProducts().subscribe((res:any) => {
      this.blockUi.unblock();
      this.allProducts = res.products
    },error => {
      this.blockUi.unblock();
      this.alert.error(error)
    })
  }

}
