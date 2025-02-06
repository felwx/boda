"use client"
import Image from "next/image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  { src: "/placeholder.svg", alt: "Couple Image 1" },
  { src: "/placeholder.svg", alt: "Couple Image 2" },
  { src: "/placeholder.svg", alt: "Couple Image 3" },
  { src: "/placeholder.svg", alt: "Couple Image 4" },
  { src: "/placeholder.svg", alt: "Couple Image 5" },
]

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} before:content-[''] z-10 absolute right-4 top-1/2 -translate-y-1/2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronRight className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} before:content-[''] z-10 absolute left-4 top-1/2 -translate-y-1/2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ChevronLeft className="w-8 h-8 text-white bg-black/50 rounded-full p-1" />
    </div>
  )
}

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <div className="text-center content-wrapper">
      <div className="max-w-2xl mx-auto mb-6 md:mb-8">
        <h1 className="elegant-heading text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8">Bienvenido a nuestra boda</h1><Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[3/2]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="elegant-heading text-2xl sm:text-3xl mb-4">Acompáñanos a celebrar nuestra unión</h2>
      <div className="mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.logo_boda_Fe%CC%81lix&Sandra_nombre_2-dCl6kZeVtV2Ud3yXCSie9C9vSRPZ83.png"
          alt="Félix & Sandra Wedding Logo"
          width={300}
          height={300}
          className="mx-auto"
          priority
        />
      </div>
    </div>
  )
}

