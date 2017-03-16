//import {} from ?
import STORE from './store'

var ACTION = {
	fetchFinished: function(){
		//instance : new collection??
		//var promise = instance.fetch()
		//promise.then(function(){
			STORE.set({
				//collection: instance,
				//get something here?
			})
		// })
	},

	recordLaundryDone: function(){
		var currentLaundry = STORE.data.laundry;
		var currentHomework = STORE.data.homework;
		STORE.set({
			laundry: currentLaundry + 1,
			homework: currentHomework - 1,
		})
	},

	recordHomeworkDone: function(){
		var currentHomework = STORE.data.homework;
		var currentSnuggle = STORE.data.snuggle;
		STORE.set({
			homework: currentHomework + 1,
			snuggle: currentSnuggle - 1
		})
	},

	recordEatFoodDone: function(){
		var currentEat = STORE.data.eat;
		STORE.set({
			eat: currentEat + 1
		})
	},

	recordWorkoutDone: function(){
		var currentWorkout = STORE.data.workout;
		var currentLaundry = STORE.data.laundry;
		STORE.set({
			workout: currentWorkout + 1,
			laundry: currentLaundry - 1
		})
	},

	recordSnuggleDone: function(){
		var currentSnuggle = STORE.data.snuggle;
		STORE.set({
			snuggle: currentSnuggle + 1
		})
	},

	recordEatCandyDone: function(){
		var currentWorkout = STORE.data.workout;
		STORE.set({
			workout: currentWorkout - 4
		})
	},
}
export default ACTION