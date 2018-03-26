/* @darthvid DNA (React) Card.js */

//import React, { Component } from 'react';
import React from 'react';
//import ReactDOM from 'react-dom';
import './Card.css';


class Card extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			mouseX: 0,
            mouseY: 0,
            fnMouseLeaveDelay: null,
		}
	}
	
	onClick = (event) => {
		console.log(this.props.title + " click: " + event.clientX + ", " + event.clientY);
	}
	
	onMouseMove = (evt) => {
        //console.log(this.props.title + " move: " + evt.clientX + ", " + evt.clientY);
        this.setState({mouseX: evt.clientX, mouseY: evt.clientY});
    }
    
    onMouseEnter() {
        
    }
    
    onMouseLeave = () => {
		var _this = this;
		
        this.setState({fnMouseLeaveDelay: setTimeout(function () {
                _this.setState({mouseX: 0, mouseY: 0});
            }, 1000)
		});
		console.log(this.props.title + " mouseLeave");
	}
    
    getCardStyle() {
        var rX = 0;
        var rY = 0;

        if (undefined !== this.refs.card) {
            var cardMidX = 0;
            var cardMidY = 0;
            var rect = this.refs.card.getBoundingClientRect();

            if (0 !== this.state.mouseX) {
                cardMidX = rect.width / 2;
                rX = (this.state.mouseX - rect.left - cardMidX)
                    / cardMidX * 30;
            }
            if (0 !== this.state.mouseY) {
                cardMidY = rect.height / 2;
                rY = (this.state.mouseY - rect.top - cardMidY)
                    / cardMidY * -30;
            }
        }

        return {
            transform: 'rotateY(' + rX + 'deg) rotateX(' + rY + 'deg)'
        };
    }
    
	getCardBgStyle() {
        var tX = 0;
        var tY = 0;
        
        if (undefined !== this.refs.card) {
            var cardMidX = 0;
            var cardMidY = 0;
            var rect = this.refs.card.getBoundingClientRect();

            if (0 !== this.state.mouseX) {
                cardMidX = rect.width / 2;
                tX = (this.state.mouseX - rect.left - cardMidX)
                    / cardMidX * -40;
            }
            if (0 !== this.state.mouseY) {
                cardMidY = rect.height / 2;
                tY = (this.state.mouseY - rect.top - cardMidY)
                    / cardMidY * -40;
            }
        }
        
		return {
            transform: 'translate(' + tX + 'px, ' + tY + 'px)',
			//backgroundImage: 'url(' + this.props.bgImage + ')',
		};
		
	}
	
	render() {
		return (
			<div className="card-wrap"
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
				onMouseMove={this.onMouseMove}
				onClick={this.onClick} 
				>
                <div className="card" ref="card" style={this.getCardStyle()}>
					<div className="card-bg" style={this.getCardBgStyle()}>
                        <img className="card-img" 
                            src={this.props.bgImage}
                            alt={this.props.title}
                        >
                        </img>
					</div>
					<div className="card-info">
						<h1>{this.props.title}</h1>
						<p>{this.props.date}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;