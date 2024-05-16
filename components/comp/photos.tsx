import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Thumb } from "@radix-ui/react-scroll-area"

export interface Artwork {
    artist: string
    art: string
}

export const works: Artwork[] = [
    {
        artist: "Eugene.Yeung",
        art: "/01.jpeg",
    },
    {
        artist: "Yan.Wang",
        art: "/02.jpeg",
    },
    {
        artist: "Yijun.Yang",
        art: "/03.jpeg",
    },
    {
        artist: "Yanwei.Wang",
        art: "/04.jpeg",
    },
    {
        artist: "Tom Byrom",
        art: "/05.jpeg",
    },
    {
        artist: "Vladimir Malyavko",
        art: "/06.jpeg",
    },
    {
        artist: "Vladimir Malyavko",
        art: "/IMG_4247.JPG",
    },
]

export function ScrollAreaHorizontalDemo() {
    return (
        <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
                {works.map((artwork) => (
                    <figure key={artwork.artist} className="shrink-0">
                        <div className="overflow-hidden rounded-md">
                            <Image
                                src={artwork.art}
                                alt={`Photo by ${artwork.artist}`}
                                className="aspect-[4/3] h-fit w-fit object-cover"
                                width={300}
                                height={300}
                            />
                        </div>
                        <figcaption className="pt-2 text-xs text-muted-foreground">
                            Photo by{" "}
                            <span className="font-semibold text-foreground">
                                {artwork.artist}
                            </span>
                        </figcaption>
                    </figure>
                ))}
                <ScrollBar  orientation="horizontal"/>
            </div>
        </ScrollArea>
    )
}
