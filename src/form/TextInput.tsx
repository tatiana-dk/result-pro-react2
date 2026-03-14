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
    asterisk=false,
    type='text',
    icon
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

    const inputInputClassName = cn(
        'control-text-input',
        {'control-text-input--icon': icon}
    );

    return (
        <div className={inputClassName}>
            <label className='control-text-label'>{label} {asterisk && '*'}</label>
            <div className='control-text-description'>{description}</div>
            <div className='control-text-wrapper'>
                {icon && <div className='control-text-icon'>{icon}</div>}
                <input
                    className={inputInputClassName}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
            </div>
            <div className='control-text-error'>{error}</div>
        </div>
    );
}