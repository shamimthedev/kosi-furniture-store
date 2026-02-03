import Hero from "@/components/sections/Hero"
import TopPicks from "@/components/sections/TopPicks"
import NewArrival from "@/components/sections/NewArrival"
import Feature from "@/components/sections/Feature"
import ImageGallery from "@/components/sections/ImageGallery"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TopPicks />
        <NewArrival />
        <Feature />
        <ImageGallery />
      </main>
    </>
  )
}