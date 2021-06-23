import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-from',
  templateUrl: './user-from.component.html',
  styleUrls: ['./user-from.component.css']
})
export class UserFromComponent implements OnInit {
  userName:String = ''  
  disabled: Boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onUpdate(){
    if(this.userName != ""){
      this.disabled = false;
    }
    else{
      this.disabled = true;
    }
  }
  onClick(){
    this.userName = ''
    this.disabled = true;
  }
}
