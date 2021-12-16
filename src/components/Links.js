import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Links = ({ contact, portfolio }) => {
    return (
        <ul className='links'>
            <li className='contact' key='contact-information'>
                <h3><i>Contact</i></h3>
                <ul>{
                    contact.map(({ id, type, display, link }) => (
                        <li key={id}>
                            <FontAwesomeIcon icon={faLink} className='link-icon' />
                            <a href={type === 'email' ? 'mailto:' + link : link}>{display}</a>

                        </li>
                    ))}</ul>
            </li>
            <li className='portfolio' key='portfolio-links'>
                <h3><i>portfolio</i></h3>
                <ul>
                    {
                        portfolio.map(({ id, display, link }) => (
                            <li key={id}>
                                <FontAwesomeIcon icon={faLink} className='link-icon' />
                                <a href={link}>{display}</a>
                            </li>
                        ))}
                </ul>
            </li>
        </ul >
    )
}

export default Links;