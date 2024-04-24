import clsx from 'clsx';
import React from 'react'
import { tailwindThemeClasses } from '../theme';

interface CardProps {
    children: React.ReactNode;
    withBorder?: boolean;
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
}

interface CardComponent extends React.FC<CardProps> {
    Header: React.FC;
    Body: React.FC;
    Footer: React.FC;
}

const Card: CardComponent = ({ children, withBorder = false, radius = 'md' }) => {
    return (
        <div className={clsx(tailwindThemeClasses.radius[radius], withBorder && 'border border-slate-500' ,'bg-white')}>
            {children}
        </div>
    )
}


Card.Header = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    )
}

Card.Body = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    )
}

Card.Footer = ({ children }: React.PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default {Card, Card.Header, Card.Body, Card.Footer}
