import {Component, Inject} from 'angular2/core'
import ContactService from '../../services/contact.ts'


@Component({
  selector: 'directory',
  template: `
    <h1>angular 2 component direcotry</h1>
    <ul>
      <li *ngFor="#item of items | async">
        {{item.name}}
      </li>
    </ul>
    <ng-content></ng-content>
  `
})

export default class Directory {
  items: Promise<any[]>

  constructor(
    @Inject(ContactService) private contactService: ContactService
  ) {
    this.items = this.contactService.getAll()
  }
}
