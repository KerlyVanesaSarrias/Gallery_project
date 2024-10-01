import PropTypes from 'prop-types'
import natu4 from '../assets/img/natu4.jpg'

const NatuFour = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={natu4} alt="naturaleza"
            className={props.className} />
        </div>
    )
}


NatuFour.prototypes = {
    className: PropTypes.string
}

export default NatuFour