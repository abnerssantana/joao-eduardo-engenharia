"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { Play } from "lucide-react"

const galleryItems = [
  {
    type: "image",
    src: "projeto01.jpg",
    alt: "Projeto 1",
    description: "Gerenciamento de obra residencial",
    size: "large",
  },
  {
    type: "video",
    src: "videovitta.mp4",
    poster: "videoprojetovitta.jpg",
    description: "Tour Vitta Parque",
    size: "medium",
  },
  {
    type: "video",
    src: "video1.mp4",
    poster: "thumbvideo.jpg",
    description: "Reforma de apartamento",
    size: "medium",
  },
  {
    type: "image",
    src: "projeto02.jpg",
    alt: "Projeto 2",
    description: "Reforma de apartamento",
    size: "small",
  },
  {
    type: "image",
    src: "projeto03.jpg",
    alt: "Projeto 3",
    description: "Timelapse de obra industrial",
    size: "small",
  },
  {
    type: "image",
    src: "projeto04.jpg",
    alt: "Projeto 4",
    description: "Reforma de espaço comercial",
    size: "large",
  },
  {
    type: "image",
    src: "projeto05.jpg",
    alt: "Projeto 5",
    description: "Construção de ponte",
    size: "small",
  },
  {
    type: "image",
    src: "projeto06.jpg",
    alt: "Projeto 6",
    description: "Revitalização de praça pública",
    size: "small",
  },
]

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const getSizeClasses = (size: any) => {
  switch (size) {
    case "large":
      return "md:col-span-2 md:row-span-2 row-span-2"
    case "medium":
      return "md:col-span-1 md:row-span-2 row-span-2"
    default:
      return "md:col-span-1 md:row-span-1 row-span-1"
  }
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-light text-center mb-16 text-foreground"
        >
          Galeria de Projetos
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`${getSizeClasses(item.size)} relative`}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="w-full h-full overflow-hidden cursor-pointer group hover:ring-2 hover:ring-primary transition-all duration-300">
                    <CardContent className="p-0 h-full relative">
                      <div className="relative w-full h-full">
                        <Image
                          src={item.type === "image" ? item.src ?? "" : item.poster ?? ""}
                          alt={item.alt || item.description}
                          className="transition-transform duration-300 group-hover:scale-110 object-cover"
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                          priority={index < 4}
                        />
                        {item.type === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Play className="w-16 h-16 text-white" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-sm font-medium">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full">
                  <div className="relative w-full aspect-video">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt || ""}
                        className="object-contain"
                        fill
                        sizes="(max-width: 1280px) 100vw, 1280px"
                        priority
                      />
                    ) : (
                      <video
                        controls
                        poster={item.poster}
                        className="w-full h-full"
                        preload="metadata"
                        autoPlay
                      >
                        <source src={item.src} type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeos.
                      </video>
                    )}
                  </div>
                  <p className="mt-4 text-center text-foreground text-lg">{item.description}</p>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}