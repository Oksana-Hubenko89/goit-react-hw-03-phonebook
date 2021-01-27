import React from 'react';
import s from './Button.module.css';

const Button = ({ children}) =>
<button className={s.Button} >{children}</button>;
    // Когда импортирую кнопки, то эти кнопки отображаются но не регируют на клик или сабмит. Почему, что не так?

export default Button;