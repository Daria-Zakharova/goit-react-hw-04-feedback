import PropTypes from 'prop-types';
import { SectionEl, SectionTitle} from './Section.styled'

export const Section = ({sectionTitle, children}) => {
    return (
        <SectionEl>
            {sectionTitle && (<SectionTitle>{sectionTitle}</SectionTitle>)}
            {children}
        </SectionEl>
    )
}

Section.propTypes = {
    sectionTitle: PropTypes.string,
    children: PropTypes.element,
}