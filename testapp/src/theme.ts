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
        xl: 'size-5',

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
    }
}
const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'

}

export { tailwindThemeClasses, alignmentClasses, cssColors };