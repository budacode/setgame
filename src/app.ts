///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../typings/main.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {SeedApp} from './app/seed-app';

bootstrap(SeedApp, [HTTP_PROVIDERS, ROUTER_PROVIDERS])
  .catch(err => console.error(err))
  
  
