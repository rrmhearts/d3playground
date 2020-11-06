import React, { Component } from 'react';
import './Draggable.css'

// var Draggable = React.createClass({
export default class Draggable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pos: this.props.initialPos,
            dragging: false,
            rel: null // position relative to the cursor
        };
        this.dragRef = React.createRef();
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUpOrLeave = this.onMouseUpOrLeave.bind(this);
    }

    static defaultProps = {
        initialPos: { x: 0, y: 0 }
    }

    // calculate relative position to the mouse and set dragging=true
    onMouseDown(e) {
        e.stopPropagation()
        e.preventDefault()
        // only left mouse button
        // if (e.button !== 0) return;
        let posRect = {
            top: this.dragRef.current.getBoundingClientRect().top,
            left: this.dragRef.current.getBoundingClientRect().left
        }
        let compWidth = this.dragRef.current.offsetWidth;
        let compHeight = this.dragRef.current.offsetHeight;
        this.setState({
            dragging: true,
            rel: {
                xmargin: Math.min(Math.abs(e.pageX - posRect.left), compWidth),
                ymargin: Math.min(Math.abs(e.pageY - posRect.top), compHeight)
            }
        });
    }

    onMouseUpOrLeave(e) {
        e.stopPropagation()
        e.preventDefault()
        this.setState({ 
            dragging: false,
        })
    }

    onMouseMove(e) {
        e.stopPropagation()
        e.preventDefault()
        if (!this.state.dragging) return;

        let newPositionX = e.pageX - this.state.rel.xmargin;
        let newPositionY = e.pageY - this.state.rel.ymargin;

        this.setState({
            // New top left corner
            pos: {
                x: newPositionX,
                y: newPositionY
            }
        });
    }

    render() {
        return (
            <div ref={this.dragRef}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUpOrLeave}
                onMouseLeave={this.onMouseUpOrLeave}
                onMouseMove={this.onMouseMove}
                style={{
                    position: 'absolute',
                    left: this.state.pos.x + 'px',
                    top: this.state.pos.y + 'px',
                    border: '2px solid pink',
                    padding: '10px'
                }}
                className='my-draggable'
            >
                {this.props.children}
            </div>)
    }
}