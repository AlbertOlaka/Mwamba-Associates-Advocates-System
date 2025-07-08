import React from 'react';
import './FormInput.css';

function FormInput({ label, type = 'text', name, value, onChange, placeholder, required = false }) {
  return (
    <div className="form-input-group">
      <label htmlFor={name}>{label}{required && '*'}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete="off"
      />
    </div>
  );
}

export default FormInput;
