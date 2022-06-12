import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor() { }


  @Input() name!: string;

  public charac = '';
  ngOnInit(): void {
    const splitter = this.name.split(' ');
    if (splitter.length >= 2) {
      this.charac = splitter[0][0] + splitter[1][0];
    }    
  }

}
