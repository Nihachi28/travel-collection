import React from "react";

interface PhotoCardProps {
    src: string;
    alt: string;
    description: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ src, alt, description }) => {
    return (
        <div className="bg_white rounded-lg overflow-hidden shadow-lg">
            <div className="h-2 w-full">
                <img className="object-cover w-full h-full" src={src} alt={alt} />
            </div>
            <div className="p-4">
                <div className="font-bold text-xl mb-2">{alt}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default PhotoCard;