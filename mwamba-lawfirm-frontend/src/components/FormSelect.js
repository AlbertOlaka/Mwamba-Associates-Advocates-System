import React from 'react';
import './FormSelect.css';

function FormSelect({ label, name, value, onChange, options = [], required = false }) {
  return (
    <div className="form-select-group">
      <label htmlFor={name}>{label}{required && '*'}</label>
      <select id={name} name={name} value={value} onChange={onChange} required={required}>
        <option value="" disabled>
          Select {label.toLowerCase()}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
