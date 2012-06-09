define [
	'jquery'
	'underscore'
	'backbone'
], ($, _, Backbone) ->
	console.log('Global Underscore: ' + this._)
	console.log('Global Backbone: ' + this.Backbone)
	$('body h1').text('Hello world!')
