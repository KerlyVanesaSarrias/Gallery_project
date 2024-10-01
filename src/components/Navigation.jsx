import { Link } from 'react-router-dom';
import NatuOne from './NatuOne';
import NatuTwo from './NatuTwo';
import NatuThree from './NatuThree';
import NatuFour from './NatuFour';
import NatuFive from './NatuFive';
import NatuSix from './NatuSix';


export const Navigation = () => {
    return (
        <div className='container thumbnail-container mt-2'>
            <Link to='/natu1' className='links'>
                <figure className='thumbnail-image-size'>
                    <NatuOne />
                    <figcaption>Naturalesa 1</figcaption>
                </figure>
            </Link>
            <Link to='/natu2' className='links'>
                <figure className='thumbnail-image-size'>
                    <NatuTwo />
                    <figcaption>Naturalesa 2</figcaption>
                </figure>
            </Link>
            <Link to='/natu3' className='links'>
                <figure className='thumbnail-image-size'>
                    <NatuThree />
                    <figcaption>Naturalesa 3</figcaption>
                </figure>
            </Link>
            <Link to='/natu4' className='links'>
                <figure className='thumbnail-image-size'>
                    <NatuFour />
                    <figcaption>Naturalesa 4</figcaption>
                </figure>
            </Link>
            <Link to='/natu5' className='links'>
                <figure className='thumbnail-image-size'>
                    <NatuFive />
                    <figcaption>Naturalesa 5</figcaption>
                </figure>
            </Link>
            <Link to='/natu6' className='links'>
                <figure className='thumbnail-image-size'>
                    <NatuSix />
                    <figcaption>Naturalesa 6</figcaption>
                </figure>
            </Link>
        </div>
    )
}