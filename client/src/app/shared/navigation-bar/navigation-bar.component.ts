import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  @Input() user!: any;

  public firstname?: any;
  public lastname?: any;

  ngOnInit(): void {
    console.log(this.user);
    this.firstname = window.localStorage.getItem('firstname');
    this.lastname = window.localStorage.getItem('lastname');
  }

}
