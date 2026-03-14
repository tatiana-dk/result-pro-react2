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
        'control-text',
        `control-text-variant-${variant}`,
        `control-text-radius-${radius}`,
        `control-text-size-${size}`,
        {
            'control-text--error': error,
            'control-text--disabled': disabled,
        }
    );

    const handleChange = useCallback((index: number): void => {
        setChecked(checked.map((_, i) => i === index ? true : false));
    }, []);

    return (
        <div className={inputClassName}>
            <label className='control-text-label'>{label} {asterisk && '*'}</label>
            <div className='control-text-description'>{description}</div>
            {
                options.map((option, index) => {
                    return (
                        <div key={index}>
                            <input
                                className='control-text-input'
                                type={type}
                                name={name}
                                value={option.code}
                                checked={checked[index]}
                                onChange={() => {handleChange(index)}}
                                id={`id${index}`}
                            />
                            <label htmlFor={`id${index}`}>{option.label}</label>
                        </div>
                    );
                })
            }
            <div className='control-text-error'>{error}</div>
        </div>
    );
}