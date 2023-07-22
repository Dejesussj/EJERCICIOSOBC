import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contact.js';
import ComponentB from './componentB';

function componentA({ contacto }) {
    return (
    <div>
    <h2>Nombre: {contacto.nombre}</h2>
    <h3>Apellidos: {contacto.apellido}</h3>
    <h3>Email: {contacto.email}</h3>
    <ComponentB estado={true} />
    </div>
);
}

componentA.propTypes = {
contacto: PropTypes.instanceOf(Contacto),
};

export default componentA;
