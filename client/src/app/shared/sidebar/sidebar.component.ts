import { AfterViewInit, Renderer2, Component, Input, OnInit, ViewChild } from '@angular/core';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {

  constructor(public utils: UtilsService, private renderer: Renderer2) { }
  @Input() bgHover?: string;

  ngAfterViewInit(): void {
  }

}