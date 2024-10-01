import PropTypes from 'prop-types'
import natu1 from '../assets/img/natu1.jpg'

const NatuOne = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={natu1} alt="naturaleza"
            className={props.className}/>
        </div>
    )
}

NatuOne.prototypes = {
    className: PropTypes.string

}

export default NatuOne