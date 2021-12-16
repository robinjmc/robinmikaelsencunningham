import React from 'react'
import formatExp from '../actions/formatExperience';
const Experience = ({ experience }) => {
    const experienceFormatted = formatExp(experience);
    return (
        <ul className='experience'>
            {
                experienceFormatted.map(({ id, companyName, details }) => (
                    <li key={id} className='job'>
                        <h2>{companyName}</h2>
                        {details.map((detail) => (
                            <div>
                                <h3>{detail.sub}</h3>
                                {detail.description && <p>{detail.description}</p>}
                            </div>
                        ))}
                    </li>
                ))
            }
        </ul>
    )
}

export default Experience;
