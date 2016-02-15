import {Component} from 'angular2/core'
import {Observable} from 'rxjs'

@Component({
  selector: 'lister',
  inputs: ['items'],
  template: `
    <ul>
      <li *ngFor="#item of items | async">
        {{item.name}}
      </li>
    </ul>
  `
})

export default class Lister {
  items: Observable<any[]>
}
