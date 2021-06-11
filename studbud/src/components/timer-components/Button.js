import PropTypes from 'prop-types'



const Button = ({ font, color='white', text, className='', start, ...props}) => {

    return (
        <button 
            style={ { backgroundColor: color, color: font,} } 
            className={`btn ${className}`}
            {...props}
            disabled={start}
        >
            { text }
        </button>

    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button