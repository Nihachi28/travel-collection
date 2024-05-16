import { AvatarDemo } from "@/components/ui/chatSkeletion";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { ScrollAreaHorizontalDemo } from "@/components/ui/photos";
import SearchBox from "@/components/ui/searchBox";

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
      <div className="w-3/4">
        <div className="log-section">
          <AvatarDemo />
        </div>
      </div>

      <div className="h-8 w-full"></div>
      <div>
        <ScrollAreaHorizontalDemo />
      </div>
      <Footer />
    </div>
  )
}
