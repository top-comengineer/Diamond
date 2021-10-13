import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "tab-selector",
  templateUrl: "./tab-selector.component.html",
  styleUrls: ["./tab-selector.component.scss"],
})
export class TabSelectorComponent {
  @Output() tabClick = new EventEmitter<string>();
  @Input() tabs: any; // Should be a list of strings with tab names.
  @Input() activeTab: string;
  @Input() newTabs: string[] = [];
  @Input() buttonSelector: boolean = true;
  @Input() deadTabs: Set<string> = new Set(); // A set of tabs that can't be clicked.

  constructor() {}

  _tabClicked(tab: string) {
    this.tabClick.emit(tab);
    if (this.deadTabs.has(tab)) {return} 
    this.activeTab = tab;
  }
}
