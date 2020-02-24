import {Component} from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
 

  Spielstaende = new Array<Spielstand>();

  name : string = "";

  add() {
    let spielstand = new Spielstand();
    spielstand.name = this.name;
    this.Spielstaende.push(spielstand);
    this.name = "";
  }

}
export class Spielstand {

  name: string = "";
 result  = 0;
 los(){
  this.result = 0;
 }
Stier1(){
  this.result = this.result + 1;
}
Stier2(){
    this.result = this.result + 2;

    }
    Stier3(){
      this.result = this.result + 3;
    }
    Stier5(){
      this.result = this.result + 5;
    }
    Stier7(){
      this.result = this.result + 7;
    }
  Zuruecksetzen(){
    this.result = 0;
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */