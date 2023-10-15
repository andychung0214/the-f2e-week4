import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
// 用於追踪當前選中的頁籤
selectedTab: string = 'basicData';

selectTab(tabName: string) {
  this.selectedTab = tabName;
}
  constructor() { }

  ngOnInit(): void {
  }

}
