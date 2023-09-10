import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig , NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import { BannerImages } from 'src/app/Constants/banner-images';
import { DEFAULT_ITEM_PER_PAGE } from 'src/app/Constants/global';
import { ProductsService } from 'src/networking/products/products.service';
import { UsersService } from 'src/networking/users/users.service';
import { AlertService } from 'src/util/alert/alert.service';
import { BlockService } from 'src/util/block_ui/block.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {


  allProducts:any[] = [];
  allCategories:any[] = []
  randomColor:any
  currentPage: number = 1;
  configPagination = {
    currentPage: 1,
    itemsPerPage: DEFAULT_ITEM_PER_PAGE,
    totalItems: 0
  };


  showNavigationArrows = false;
	showNavigationIndicators = true;
  colors = ['palevioletred','darkturquoise','gold','orangered']
  carouselImages = [BannerImages.banner1,BannerImages.banner2,BannerImages.banner3].map((n) => `https://rukminim1.flixcart.com/fk-p-flap/1400/200/image/${n}`);

  constructor(private productSer:ProductsService,private blockUi:BlockService,private alert : AlertService,
    private config : NgbCarouselConfig) {
    config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
    this.getAllProducts(0);
    this.getAllCategories();
  }
  
  
  
  getAllProducts(offset:any){
    console.log(offset);
    
    this.blockUi.block();
    if (offset != 0) { offset = offset - 1; offset * 30 } else { offset = '' }
    console.log(offset);
    
    this.productSer.getAllProducts(DEFAULT_ITEM_PER_PAGE,offset*DEFAULT_ITEM_PER_PAGE).subscribe((res:any) => {
      this.blockUi.unblock();
      this.configPagination.totalItems = res.count;
      this.configPagination.currentPage = offset + 1
      this.allProducts = res.products
    },error => {
      this.blockUi.unblock();
      this.alert.error(error.message)
    })
  }
  
  getAllCategories() {
    this.blockUi.block();
    this.productSer.getAllCategories().subscribe((res:any) => {
      res.forEach((item:any) => {
        
        let obj:any = {}
        obj.name = item;
        obj.bgColor = this.getRandomColour()
        this.allCategories.push(obj)        
      })
      
      this.blockUi.unblock();
    },(error) => {
      this.alert.error(error)
      this.blockUi.unblock();
    })
  }
  
  getRandomColour(){
    this.randomColor = this.colors[Math.floor(Math.random()*this.colors.length)]
    return this.randomColor
  }

  onChangePage(pageNo: any) {
    this.currentPage = pageNo;
    this.getAllProducts(this.currentPage);
  }

  
}
