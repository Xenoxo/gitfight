var USER_DATA = {
	name: 'Tim Wang',
	username: 'Xenoxo',
	image: 'https://avatars3.githubusercontent.com/u/854726?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 300, width: 300}} />
	}
});


var Profilelink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
				</a>
			</div>			
		)
	}
});

var ProfileName = React.createClass({
	render:function () {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function(){
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<Profilelink username={this.props.user.username} />
			</div>
		)
	}
})

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
)