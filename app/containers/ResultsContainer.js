var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	getInitialState: function() {
		return {
			isLoading: true,
			scores: []
		};
	},
	componentDidMount: function() {
		// console.log('this in ResultsContainer' + this.props);
	 //  console.log('this in ResultsContainer' + this.props.location.state.playersInfo);
		githubHelpers.battle(this.props.location.state.playersInfo)
			.then(function (scores){
				this.setState({
					scores: scores,
					isLoading: false
				});
			}.bind(this));
	},
	render: function() {
		return (
			<Results
			isLoading={this.state.isLoading}
			playersInfo={this.props.location.state.playersInfo}
			scores={this.state.scores}
			/>
		);
	}
});

module.exports = ResultsContainer;
