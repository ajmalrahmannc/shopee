import { Component, Inject, Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { BlockTemplateComponent } from './block-template.component';


@Injectable({
  providedIn: 'root'

})

export class BlockService {
  @BlockUI() blockUI!: NgBlockUI;
  blockTemplate:any

  constructor( ) {
    this.blockTemplate=BlockTemplateComponent
  }

block(){

  this.blockUI.start('Loading...');

}
unblock(){
  this.blockUI.stop();

}
template(){
  return this.blockTemplate
}

removeAll(){
  this.blockUI.resetGlobal()
}
}
