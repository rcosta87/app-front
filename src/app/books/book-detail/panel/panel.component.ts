import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() links: string[]
  @Input() sectionDefault: string
  @Output() section = new EventEmitter<string>()
  sectionName:string

  constructor() { }

  ngOnInit() {
    this.section.emit(this.sectionDefault)
    this.sectionName = this.sectionDefault
  }

  setSection(title:string){
    this.sectionName = title
    this.section.emit(title)
  }



}
