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
};