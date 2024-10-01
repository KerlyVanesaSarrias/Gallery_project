import PropTypes from 'prop-types'
import natu5 from '../assets/img/natu5.jpg'

const NatuFive = ({className}) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={natu5} alt="naturaleza" 
            className={className}/>
        </div>
    )
}

NatuFive.prototypes = {
    className: PropTypes.string
}

export default NatuFive