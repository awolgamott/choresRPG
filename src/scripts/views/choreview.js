import React from 'react'
import STORE from '../store'
import Backbone from 'backbone'
import ACTION from '../action'
import Banner from './banner'

var Stats = React.createClass({
	render: function(){
		var lifeTotal = this.props.laundry + this.props.homework + this.props.eat + this.props.workout + this.props.snuggle
		if (lifeTotal <= -10){
			alert ('Oh Dear, Bless Your Heart')
		}

		return 	<div className= 'stats-view well'>
					<div>Got Cleaner: {this.props.laundry}</div>
					<div>Got Smarter: {this.props.homework}</div>
					<div>Got Nourished: {this.props.eat}</div>
					<div>Got Healthier: {this.props.workout}</div>
					<div>Got Loved: {this.props.snuggle}</div>
					<div>Life Score: {lifeTotal}</div>
				</div>
	}
})

var ChoreView = React.createClass({
	componentWillMount: function(){
	
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
	},

	doLaundry(){
		ACTION.recordLaundryDone();

	},
	doHomework(){
		ACTION.recordHomeworkDone();

	},
	eatFood(){
		ACTION.recordEatFoodDone();

	},
	doWorkout(){
		ACTION.recordWorkoutDone();

	},
	snuggleFamily(){
		ACTION.recordSnuggleDone();

	},
	eatCandy(){
		ACTION.recordEatCandyDone();
	},

	getInitialState: function(){
		return STORE.data 
	},
	render: function(){		
		return (
			<div className='total-view'>
				<Banner />
				<div className='chore-view'>

					<div className='yolo'>
						<button
							className="btn btn-lg btn-block" 
							onClick={this.doLaundry}>Do Laundry</button>
						<button
							className="btn btn-lg btn-block" 
							onClick={this.doHomework}>Do Homework</button>
						<button
							className="btn btn-lg btn-block"  
							onClick={this.eatFood}>Eat Food</button>
						<button 
							className="btn btn-lg btn-block" 
							onClick={this.doWorkout}>Do Workout</button>
						<button
							className="btn btn-lg btn-block"  
							onClick={this.snuggleFamily}>Snuggle Family</button>
						<button 
							className="btn btn-lg btn-block" 
							onClick={this.eatCandy}>Eat Candy</button>
					</div>
					<Stats 
						laundry={this.state.laundry}
						homework={this.state.homework}
						eat={this.state.eat}
						workout={this.state.workout}
						snuggle={this.state.snuggle}
					/>
				</div>
			</div>
		)
	}
})

export default ChoreView