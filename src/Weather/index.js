import React, {Component} from 'react'

class Weather extends Component{
	constructor(props){
		super(props)
		this.state = {
			condition:[
				{thunderstorm: '11d'},
				{drizzle: '09d'},
				{rain: '10d'},
				{snow:'13d'},
				{clear: '01d'},
				{clouds:'02d'}
			],
			items:["11d", "09d", "10d", "13d", "01d", "02d"]
		}
	}

	componentDidMount(){
		this.weatherIcon()
	}


	weatherIcon = () => {
		//generate code number for each state of weather
		let weatherObject
		this.state.condition.forEach((condition, i) => {
			weatherObject = Object.keys(condition);
			if(weatherObject.includes(this.props.weatherCondit) === true){
				this.setState({
					imageURL:`http://openweathermap.org/img/wn/${this.state.items[i]}@2x.png`
				})
			}else{
				console.log("nope")
			}
		})
	}
	
	render(){
		return(
			<div className="row">
				<div className="col-lg-4 my-auto">
					<p style={{fontSize:"15px"}}><i className="fas fa-temperature-low"></i> {this.props.fahren} / {this.props.cels}</p>
				</div>
				<div className="col-lg-3">
					<img style={{maxWidth:"70px"}} src={this.state.imageURL} alt="weather"/>
				</div>
			</div>
		)
	}
}

export default Weather