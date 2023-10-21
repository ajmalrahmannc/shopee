import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/networking/products/products.service';
import { AlertService } from 'src/util/alert/alert.service';
import { BlockService } from 'src/util/block_ui/block.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(private actRoute:ActivatedRoute,private blockUi : BlockService, private productService : ProductsService,
    private alert : AlertService ) { }

  productId !: number;
  productDetails : any;
  images :any[] = [];


  ngOnInit(): void {
    this.productId = this.actRoute.snapshot.params['id'];
    this.getProductDetials();
  }

  getProductDetials() {
    this.blockUi.block();

    this.productService.getSingleProductById(this.productId).subscribe((res:any) => {
      this.blockUi.unblock();
      this.productDetails = res;
      this.images = res.images;
      console.log(this.productDetails);
      console.log(this.images);
      
      
    },error => {
      this.blockUi.unblock()
      this.alert.error(error)
    })
  }

}
