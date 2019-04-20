import { Component } from '@angular/core';
declare var $;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  rows=[];
  constructor(){
    console.log($)
    this.rows = this.gerRows();
  }
  makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  createRow(){
    return {
      name:this.makeid(this.getNumber()),
      std:this.makeid(this.getNumber()),
      age:this.makeid(this.getNumber()),
      year:this.makeid(this.getNumber()),
      section:this.makeid(this.getNumber())
    };
  }
  gerRows(){
    let rows = [];
    for(let i=0;i<100;i++){
      rows.push(this.createRow())
    }
    return rows;
  }
  getNumber(){
    return Math.ceil(Math.floor(Math.random() * 20));
  }
  ngAfterViewInit(){
    let $head = $('.scroll-table-header table');
    let $body = $('.scroll-table-body table')
    console.log('mantu',$head,$body)
  }
}
