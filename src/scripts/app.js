import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import ChoreView from './views/choreview'

var app = function() {
	var ChoreRouter = Backbone.Router.extend({
		routes: {
			"" : "handleChores"
		},
		handleChores : function(){
			ReactDOM.render(<ChoreView />,  document.querySelector('.container'))
		}
	})
	new ChoreRouter ()
	Backbone.history.start()
 
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..