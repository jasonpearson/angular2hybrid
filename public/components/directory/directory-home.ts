import {Component, OnInit, Inject} from 'angular2/core'
import {Observable} from 'rxjs'
import ContactService from '../../services/contact.ts'

import Lister from '../lister/lister.ts'


@Component({
  selector: 'directory-home',
  inputs: ['items'],
  directives: [Lister],
  template: `
    <h1>LIST:</h1>
    <lister [items]="items"></lister>
  `
})

export default class DirectoryHome implements OnInit {
  items: Observable<any[]>

  constructor(
    @Inject(ContactService) private contactService: ContactService
  ) { }

  ngOnInit() {
    this.items = this.contactService.list
  }
}
