import {Component, Inject, OnInit} from 'angular2/core'
import ContactService from '../../services/contact.ts'
import {Observable} from 'rxjs'

import Lister from '../lister/lister.ts'


@Component({
  selector: 'directory',
  directives: [Lister],
  template: `
    <h1>angular 2 component direcotry</h1>
    <lister [items]="items"></lister>
    <ng-content></ng-content>
  `
})

export default class Directory implements OnInit {
  items: Observable<any[]>

  constructor(
    @Inject(ContactService) private contactService: ContactService
  ) { }

  ngOnInit() {
    this.items = this.contactService.list
  }
}
