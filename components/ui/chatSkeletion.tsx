import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { Alert, AlertTitle, AlertDescription } from "./alert"

export function AvatarDemo() {
    return (
        <div className="content-center w-full h-full">
            <div className="flex justify-start py-2">
                <div className="pl-8 pr-3">
                    <Avatar>
                        <AvatarImage src="/images/av1.jpeg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="chat-content">
                    <p className="font-semibold">Eugene.Yeung</p>
                    About a trip to Japan?
                </div>
            </div>
            <div className="flex justify-end py-2">
                <div className="chat-content">
                    <p className="font-semibold">Yan.Wang</p>
                    Why not? Let's go!
                </div>
                <div className="pr-8 pl-3">
                    <Avatar>
                        <AvatarImage src="/images/av2.jpeg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
            <div className="flex justify-start py-2">
                <div className="pl-8 pr-3">
                    <Avatar>
                        <AvatarImage src="/images/av1.jpeg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="chat-content">
                    <p className="font-semibold">Eugene.Yeung</p>
                    🛫 Take off! 
                </div>
            </div>
        </div>
    )
}
