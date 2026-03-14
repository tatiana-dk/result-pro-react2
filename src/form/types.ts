// import type { Icon } from '@tabler/icons-react';
import {type ReactNode} from 'react';

export interface Control {
    id: string | number;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    description?: string;
    error?: string;
    variant?: 'default' | 'filled' | 'unstyled';
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    disabled?: boolean;
    asterisk?: boolean;
    value?: string;
    options?: Option[];
    icon?: ReactNode;
};

export interface Option {
    code: string;
    label: string;
}