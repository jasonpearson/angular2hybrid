import {Component, OnInit} from 'angular2/core'

@Component({
  selector: 'directory-home',
  inputs: ['items'],
  template: `
    <h1>LIST:</h1>
    <ul>
      <li *ngFor="#item of items | async">
        {{item.name}}
      </li>
    </ul>
  `
})

export default class DirectoryHome implements OnInit {
  ngOnInit() {

  }
}
