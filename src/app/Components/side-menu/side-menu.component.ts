import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  userName: string=" David Benenaula ";
  theme: string="";
  widthMenu:number=25;
  visibleMenu:boolean=true;
  
  alternateVisibility():void{
    this.visibleMenu=!this.visibleMenu;//alterna la visibildad del menu }
  }
  setTheme(color:string):void{//Cambia el color del menu
    this.theme=color;
  
  }
  setSize():void{
    this.widthMenu+=10;
    if(this.widthMenu>100){
      this.widthMenu=25
      ;
    }
  
  
  }
   
  }
