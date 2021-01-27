import React from 'react';
import Container from "../Container";

const Filter = ({ value, onChange }) => 
<Container>
    <label>
        Find contacts by name <br/>
        <input value={value} type="text" onChange={onChange} />
    </label>
</Container>



export default Filter;