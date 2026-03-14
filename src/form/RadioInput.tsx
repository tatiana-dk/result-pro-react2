import cn from 'classnames';
import './RadioInput.css';
import type {Control} from './types.ts';
import { useState, useCallback} from 'react';

export function RadioInput({
    name,
    label,
    placeholder='',
    description='',
    error='',
    variant='default',
    radius='sm',
    size='sm',
    disabled=false,
    asterisk=false,
    type='text',
    options=[],
}: Control) {
    const [checked, setChecked] = useState(options.map(() => false));

    const inputClassName = cn(
        'control-radio',
        `control-radio-variant-${variant}`,
        `control-radio-radius-${radius}`,
        `control-radio-size-${size}`,
        {
            'control-radio--error': error,
            'control-radio--disabled': disabled,
        }
    );

    const handleChange = useCallback((index: number): void => {
        setChecked(checked.map((_, i) => i === index ? true : false));
    }, []);

    return (
        <div className={inputClassName}>
            <label className='control-radio-label'>{label} {asterisk && '*'}</label>
            <div className='control-radio-description'>{description}</div>
            {
                options.map((option, index) => {
                    return (
                        <label className='control-radio-text' key={index}>
                            <input
                                className='control-radio-input'
                                type={type}
                                name={name}
                                value={option.code}
                                checked={checked[index]}
                                onChange={() => {handleChange(index)}}
                                id={`id${index}`}
                            />
                            <span>{option.label}</span>
                        </label>
                    );
                })
            }
            <div className='control-radio-error'>{error}</div>
        </div>
    );
}