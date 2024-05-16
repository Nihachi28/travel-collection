import Logo from '@/public/images/cable-car-solid.svg';

export default function Header() {
    return (
        <header className="relative w-full">
            <div className="w-full h-16 flex items-center justify-between header-bg">
                <div className="px-5 flex items-center">
                    <Logo className="h-8 w-8"/>
                    <h1 className="pl-2 text-lg font-bold text-black">Travel Memo</h1>
                </div>
                <nav className="flex space-x-7 px-5">
                    <a href="/home" className="text-black font-medium">Home</a>
                    <a href="/about" className="text-black font-medium">About</a>
                    <a href="/contact" className="text-black font-medium">Contact</a>
                </nav>
            </div>
        </header>
    )
}
