import React from 'react'

const Skills = ({ skills }) => {
    return (
        <ul className='skills'>
            {
                skills.map(({ id, name, content }) => (
                    <li key={id}>
                        <p><i>{name}</i></p>
                        <p>{content}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Skills
