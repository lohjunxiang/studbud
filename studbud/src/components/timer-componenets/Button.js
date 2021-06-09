import PropTypes from 'prop-types'



const Button = ({ font, color, text, className, ...props}) => {

    return (
        <button 
            style={ { backgroundColor: color, color: font} } 
            className={`btn ${className}`}
            {...props}
        >
            { text }
        </button>

    )
}

Button.defaultProps = {
    color: 'white',
    backgroundColor: '#005AB7',
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button