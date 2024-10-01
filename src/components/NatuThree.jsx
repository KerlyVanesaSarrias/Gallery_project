import PropTypes from 'prop-types'
import natu3 from '../assets/img/natu3.jpg'

const NatuThree = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={natu3} alt="naturaleza"
            className={props.className} />
        </div>
    )
}

NatuThree.prototypes = {
    className: PropTypes.string
}

export default NatuThree