import { AvatarDemo } from "@/components/comp/chatSkeletion";
import Footer from "@/components/comp/footer";
import Header from "@/components/comp/header";
import { ScrollAreaHorizontalDemo } from "@/components/comp/photos";
import { ScrollAreaHorizontalDemo2 } from "@/components/comp/photos copy";
import SearchBox from "@/components/comp/searchBox";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex-col">
      <Header />
      <div className="h-8 w-full"></div>
      <div className="search-section">
        <SearchBox />
      </div>
      <div className="h-8 w-full"></div>
      <div className="flex justify-center">
        <div className="log-section w-full">
          <AvatarDemo />
        </div>
      </div>

      <div className="h-8 w-full"></div>
      <div>
        <ScrollAreaHorizontalDemo />
      </div>
      <div>
        <ScrollAreaHorizontalDemo2 />
      </div>
      <div className="h-3 w-full"></div>
      <div className="w-full h-5">
        <Footer />
      </div>
    </div>
  )
}
