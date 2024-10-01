import PropTypes from 'prop-types'
import natu6 from '../assets/img/natu6.jpg'

const NatuSix = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={natu6} alt="naturaleza"
            className={props.className} />
        </div>
    )
}

NatuSix.prototypes = {
    className: PropTypes.string
}

export default NatuSix