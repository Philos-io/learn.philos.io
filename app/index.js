import angular from 'angular';
import 'angular-route';

var {
	bootstrap, module
} = angular;


module('learn.philos.io', ['ngRoute']);

bootstrap(document, ['learn.philos.io'], { strictDI: true});