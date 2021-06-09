import { FaRegSun } from 'react-icons/fa'

const Icons = (IconName) => {
    return (
        <div>
           { < IconName /> }
        </div>
    )
}

export default Icons


Icons.defaultProps = {
IconName: FaRegSun,

}