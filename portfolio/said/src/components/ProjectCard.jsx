import PropTypes from 'prop-types';

export function ProjectCard ({ fondo }) {

    return(
    <article className='projectCard col-span-4' style={{backgroundImage: `url(${fondo})`}}>
        
    </article>
    )
}

ProjectCard.propTypes = {
    fondo: PropTypes.string.isRequired,
};