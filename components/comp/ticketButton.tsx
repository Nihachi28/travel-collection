import { cn } from "@/lib/utils"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog"
import { Input } from "postcss"
import * as React from "react"
import { Button } from "../ui/button"
import { DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Drawer } from "../ui/drawer"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

export function DrawerDialogDemo() {
    const [open, setOpen] = React.useState(false)

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="bg-blue-300">
                    <EnvelopeOpenIcon className="mr-2 h-4 w-4"/>
                        <p className="font-semibold">Get your ticket</p>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-gray-100">
                <DrawerHeader className="text-left">
                    <DrawerTitle>💐 Congratulation !</DrawerTitle>
                    <DrawerDescription>
                        Buckle up and we are off !
                    </DrawerDescription>
                    <div className="flex justify-center py-5">
                        <img src="/ticket.jpeg" width="300px">
                        </img>
                    </div>

                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button className="bg-yellow-200">
                            <p className="font-bold">Got it!</p>
                        </Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function useMediaQuery(arg0: string) {
    throw new Error("Function not implemented.")
}

