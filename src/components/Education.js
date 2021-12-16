import React from 'react'

export const Education = ({ education }) => {
    return (
        <ul className='education'>
            <h3><i>Education</i></h3>
            <ul>
                {
                    education.map(({ id, schoolName, degreeName, grade, description, activitiesAndSocieties, start, end }) => (
                        <li key={id}>
                            <h3><i>{schoolName},</i></h3>
                            <h3><i>{degreeName + ' (' + grade + '), '}</i></h3>
                            <h3><i>{start + ' - ' + end}</i></h3>
                            <p>{description}</p>
                        </li>
                    ))}
            </ul>
        </ul>
    )
}

export default Education;