import 'zone.js'
import 'reflect-metadata'

import {bootstrap} from 'angular2/platform/browser'
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {Component} from 'angular2/core'
import Directory from './directory/directory.ts'

@Component({
  selector: 'app',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', as: 'Directory', component: Directory}
])

export default class App {}

bootstrap(App, [
  ROUTER_PROVIDERS
])
