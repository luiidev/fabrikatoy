import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
})
export class PointOfSaleComponent implements OnInit {
  showPanel:boolean = false;

  constructor() { }

  showPanelToggle(): void {
    this.showPanel = !this.showPanel;
  }

  ngOnInit(): void {
  }

}
