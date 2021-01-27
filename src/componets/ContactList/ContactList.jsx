import React from 'react';
import s from "./ContactList.module.css";
import b from '../Button/Button.module.css';
import Container from "../Container";
//import Button from '../Button';

const ContactList = ({ onDelete, contactsList }) =>
    <Container>
        <ul className={s.List} >
            {contactsList.map(({ id, name, number }) =>
                <li key={id} ><span>{name}: {number} </span>
                    {/* <Button type='button' onClick={onDelete}>Delete</Button> */}
                    <button className={b.Button} type="button" onClick={() => onDelete(id)} >Delete</button>
                </li>)}
            
        </ul>
    </Container>
    ;

export default ContactList; 