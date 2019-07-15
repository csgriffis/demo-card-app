import React, { ChangeEvent } from 'react';
import './EditableText.scss';

interface InputProps {
  isEditable: boolean;
  defaultValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  typography: Typography;
  inputStyle?: React.CSSProperties;
}

export function EditableText({ isEditable, defaultValue, inputStyle, onChange, typography }: InputProps) {
  return isEditable
    ? <input onChange={onChange} type="text" defaultValue={defaultValue} style={inputStyle}></input>
    : wrapNonEditableValue(defaultValue, typography)
}

// small helper function to wrap value in correct tag; defaults to p; not all tags included
const wrapNonEditableValue = (val: string, typography: Typography) => {
  switch (typography) {
    case 'h1':
      return <h1>{val}</h1>
    case 'h2':
      return <h2>{val}</h2>
    case 'h3':
      return <h3>{val}</h3>
    case 'h4':
      return <h4>{val}</h4>
    case 'h5':
      return <h5>{val}</h5>
    case 'p':
    default:
      return <p>{val}</p>
  }
}

type Typography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
