import { Component } from '@angular/core';

@Component({
  selector: 'app-block-temp',
  styles: [],
  template: `
    <div class="block-ui-template">
    <div class="ring"  >
      <img src="../../../assets/images/spinner.png" class="rotate" width="100" height="100" />
      <img src="../../../assets/images/shop.png" class="shipImg">
    </div>
  `
})
export class BlockTemplateComponent {
  message: any;
}
