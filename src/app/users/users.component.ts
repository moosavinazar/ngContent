import {AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('par', {static: true}) par!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit: " + this.par.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked: " + this.par.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit: " + this.par.nativeElement.textContent);
  }


}
