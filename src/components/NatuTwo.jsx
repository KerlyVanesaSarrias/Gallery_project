import PropTypes from 'prop-types'
import natu2 from '../assets/img/natu2.jpg'

const NatuTwo = (props) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img src={natu2} alt="naturaleza" 
            className={props.className}/>
        </div>
    )
}


NatuTwo.prototypes = {
    className: PropTypes.string

}

export default NatuTwo