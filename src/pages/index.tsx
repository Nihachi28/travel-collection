import React from "react"
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

    return (
        <Layout>
            <div className="h-8"></div>
            <div className="relative w-full">
                <div className="full-bg h-16"/>
            </div>
        </Layout>
    );
}

export default Home