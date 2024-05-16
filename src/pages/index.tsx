import React from "react"
import PhotoCard from "@/components/PhotoCard";
import Head from "next/head";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";
import Layout from "@/app/layout";

const Home: React.FC = () => {
    const photos = [
        { src: '/IMG_0234.JPG', alt: 'Beautiful Beach', description: 'A beautiful beach during sunset.' },
        { src: '/IMG_4247.JPG', alt: 'Mountain View', description: 'A breathtaking view of the mountains.' },
        { src: '/IMG_2020.JPG', alt: 'Cityscape', description: 'A vibrant cityscape at night.' },
    ];

    // return (
    //     <div className="min-h-screen bg-gray-100">
    //         <div className="front">
    //             <div className="front-content">
    //                 <h1 className="text-4xl font-bold">Travel Gallery</h1>
    //                 <p className="mt-2">By Eugene Yeung</p>
    //             </div>
    //         </div>
    //         <div className="container mx-auto py-8 px-4">
    //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    //                 {photos.map((photo, index) => (
    //                     <PhotoCard key={index} src={photo.src} alt={photo.alt} description={photo.description} />
    //                 ))}
    //             </div>
    //         </div>
    //     </div>
    // );

    return (
        <Layout>
            <div className="h-8"></div>
            <div className="relative w-full">
                <div className="full-bg h-16"/>
            </div>
            {/* <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold">Website Title</h1>
                <p className="mt-4">Author Name</p>
            </div> */}
        </Layout>
    );
}

export default Home