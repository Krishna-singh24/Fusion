const tailwindThemeClasses = {
    colors: {
        primary: 'bg-cyan-600 text-white',
        secondary: 'bg-purple-600 text-white',
        success: 'bg-green-600 text-white'
    },

    radius: {
        none: 'rounded-none',
        xs: 'rounded',
        sm: 'rounded',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-full',
    },

    sizes: {
        xs: 'size-2',
        sm: 'size-2.5',
        md: 'size-3',
        lg: 'size-4',
        xl: 'size-24',
    },
    textSizes: {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
        xl: 'text-xl',
    },
    paddings: {
        xs: 'p-1',
        sm: 'p-2',
        md: 'p-3',
        lg: 'p-4',
        xl: 'p-6',
    },

    textcolor: {
        light: 'text-white',
        dark: 'text-black',
    },

}

const cssColors = {
    colors: {
        primary: '#1E3A8A',
        light: '#E5E7EB',
        dark: '#4B5563',
        info: '#3B82F6',
        danger: '#B91C1C',
        warning: '#F59E0B',
        success: '#047857',
        secondary: '#F59E0B',
    },
}

const colorClasses = {
    primary: 'blue-600',
    secondary: 'purple-600',
    success: 'green-600',
    danger: 'red-600',
    warning: 'yellow-600',
    info: 'blue-600',
    light: 'slate-300'
}
const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'

}
interface VariantClass {
    filled: string;
    outlined: string;
    default: string;
}

const variantClass = (variant: keyof VariantClass, colorClass: string): string => {
    let classValue = '';
    switch (variant) {
        case 'filled':
            classValue = `bg-${colorClass} text-white`;
            break;
        case 'outlined':
            classValue = `border-2 border-${colorClass} text-${colorClass}`;
            break;
        case 'default':
            classValue = `bg-${colorClass} text-black`;
            break;
        default:
            break;
    }
    // console.log(classValue);
    
    return classValue;
}

export { tailwindThemeClasses, alignmentClasses, cssColors, variantClass, colorClasses};