import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/networking/products/products.service';
import { BlockService } from 'src/util/block_ui/block.service';

@Component({
  selector: 'app-view-products-by-category',
  templateUrl: './view-products-by-category.component.html',
  styleUrls: ['./view-products-by-category.component.scss']
})
export class ViewProductsByCategoryComponent implements OnInit {

  category !: string;
  allProducts : any[] = [];
  
  constructor(private blockUi : BlockService, private productService : ProductsService, private actRoute:ActivatedRoute,
    private router : Router) {
    this.category = this.actRoute.snapshot.params['name'];
   }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.blockUi.block();

    this.productService.getProductsByCategory(this.category).subscribe((res:any) => {
      this.blockUi.unblock();
      console.log(res);
      this.allProducts = res.products;      
    })
  }

  viewSingleItem(id:number){
    this.router.navigate(['/user-dashboard/view-product/',id]);
  }

}
