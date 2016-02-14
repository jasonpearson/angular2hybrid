import 'reflect-metadata'
import 'zone.js'
import angular from 'angular'
import 'angular-ui-router'
import {UpgradeAdapter} from 'angular2/upgrade'

import Directory from '../components/directory/directory.ts'
import DirectoryHome from '../components/directory/directory-home.ts'
import ContactService from '../services/contact.ts'

var adapter: UpgradeAdapter = new UpgradeAdapter()
adapter.addProvider(ContactService)

angular.module('ngOne', [
  'ui.router'
])
.config(function($stateProvider) {
  $stateProvider

    .state('ngOne', {
      abstract: true,
      template: `
        <main>
          <header>
            <h1>Angular 1/2 Hybrid App</h1>
            <nav>
              <ul>
                <li><a ui-sref-active-eq="active" ui-sref="ngOne.home">Home (ng1)</a></li>
                <li><a ui-sref-active="active" ui-sref="ngOne.about">About (ng1)</a></li>
                <li><a ui-sref-active="active" ui-sref="ngOne.directory.home">Directory (ng2)</a></li>
              </ul>
            </nav>
          </header>
          <ui-view></ui-view>
        </main>
      `,
      controller: ($scope) => {
        $scope.test = 'from angular 1 controller'
      }
    })

    .state('ngOne.home', {
      url: '',
      template: `
        <h1>Welcome to Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
    })

    .state('ngOne.about', {
      url: '/about',
      template: `
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
    })

    .state('ngOne.directory', {
      abstract: true,
      template: `
        <h1>Directory</h1>
        <directory> <!-- ANGULAR2 COMPONENT -->
          <ui-view></ui-view>
        </directory>
      `
    })

    .state('ngOne.directory.home', {
      url: '/directory',
      template: `
        <h3>Directory Home</h3>
        <directory-home [items]="items"></directory-home> <!-- ANGULAR2 COMPONENT -->
      `
    })
})
.factory('contactService', adapter.downgradeNg2Provider(ContactService))
.directive('directory', adapter.downgradeNg2Component(Directory))
.directive('directoryHome', adapter.downgradeNg2Component(DirectoryHome))
// .directive('lister', adapter.downgradeNg2Component(Lister))

// adapter.upgradeNg1Provider('SFObject')
adapter.bootstrap(document.body, ['ngOne'])
