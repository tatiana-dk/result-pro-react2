import cn from 'classnames';
import './TextInput.css';
import type {Control} from './types.ts';


export function TextInput({
    name,
    label,
    placeholder='',
    description='',
    error='',
    variant='default',
    radius='sm',
    size='sm',
    disabled=false,
    asterisk=false
}: Control) {

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

    return (
        <div className={inputClassName}>
            <label className='control-text-label'>{label} {asterisk && '*'}</label>
            <div className='control-text-description'>{description}</div>
            <input
                className='control-text-input'
                type="text"
                name={name}
                placeholder={placeholder}
            />
            <div className='control-text-error'>{error}</div>
        </div>
    );
}