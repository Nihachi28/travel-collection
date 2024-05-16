import React from 'react'

interface LogoProps {
    src: string
    alt: string
}

const Logo: React.FC<LogoProps> = ({ src, alt }) => {
    return (
        <div className="p-4">
            <img src={src} alt={alt} className="h-24 w-24 object-cover rounded-full" />
        </div>
    )
}

export default Logo