import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data: {
		laundry: 0,
		workout: 0,
		eat: 0,
		homework: 0,
		snuggle: 0
	},

	set: function(obj){
		this.data = Object.assign(this.data,obj)
		this.trigger('dataUpdated')
	}
})
export default STORE