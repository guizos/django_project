import React, {Component} from 'react';

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (!this.props.container) {
            if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
                this.props.handleClick(event);
            }
        } else {
            if (!this.props.container.contains(event.target)) {
                this.props.handleClick(event);
            }
        }
    }

    render() {
        return this.props.children ?
            <div ref={this.setWrapperRef}>{this.props.children}</div> : null;
    }
}

// OutsideAlerter.propTypes = {
//     children: PropTypes.element.isRequired,
// };