

import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  alertButtons = ['Action'];
  public items: Array<any>=[
    'ideia tem acento?',
    'Bem vindo tem acento?',
    'Giboia tem acento?',
    'Aurelio tem acento?'
  ];

  constructor(public navCtrl:NavController) {}

  reordenarItens(indexes:any):void{
    // reorderArray(this.items,indexes)
    
      let element = this.items[indexes.from];
      this.items.splice(indexes.from, 1);
      this.items.splice(indexes.to, 0, element);
    
  }

  btn(id:any):void{
    alert("Voce respondeu:" + id + "-ACERTOU!")
  }
  bt(id:any):void{
    alert("Voce respondeu:" + id + "-ERROU!")
  }

 


}
