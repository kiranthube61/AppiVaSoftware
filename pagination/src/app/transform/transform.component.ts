import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent  {

  public value:any;
  public rupee:any
  
  public Send(data:any)
  {
    this.value=data;
    this.rupee=this.value*78.18
  }

}
