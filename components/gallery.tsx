"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

const galleryItems = [
  {
    type: "image",
    src: "/projeto1.jpg?height=600&width=800",
    alt: "Projeto 1",
    description: "Gerenciamento de obra residencial",
    size: "large", // 2x2
  },
  {
    type: "video",
    src: "https://example.com/video1.mp4",
    poster: "/projeto1.jpg?height=600&width=800",
    description: "Tour virtual de construção comercial",
    size: "medium", // 1x2
  },
  {
    type: "image",
    src: "/projeto2.jpg?height=800&width=600",
    alt: "Projeto 2",
    description: "Reforma de apartamento",
    size: "small", // 1x1
  },
  {
    type: "image",
    src: "/projeto1.jpg?height=600&width=800",
    alt: "Projeto 3",
    description: "Construção de edifício corporativo",
    size: "medium", // 1x2
  },
  {
    type: "video",
    src: "https://example.com/video2.mp4",
    poster: "/projeto1.jpg?height=600&width=800",
    description: "Timelapse de obra industrial",
    size: "small", // 1x1
  },
  {
    type: "image",
    src: "/projeto1.jpg?height=800&width=600",
    alt: "Projeto 4",
    description: "Reforma de espaço comercial",
    size: "large", // 2x2
  },
  {
    type: "image",
    src: "/projeto1.jpg?height=600&width=800",
    alt: "Projeto 5",
    description: "Construção de ponte",
    size: "small", // 1x1
  },
  {
    type: "image",
    src: "/projeto1.jpg?height=800&width=600",
    alt: "Projeto 6",
    description: "Revitalização de praça pública",
    size: "medium", // 1x2
  },
]

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
}

const getSizeClasses = (size) => {
  switch (size) {
    case "large":
      return "col-span-2 row-span-2"
    case "medium":
      return "col-span-1 row-span-2"
    default:
      return "col-span-1 row-span-1"
  }
}

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <section id="gallery" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-center mb-12 text-foreground"
        >
          Galeria de Projetos
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4"
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
                      {item.type === "image" ? (
                        <Image
                          src={item.src || "/projeto1.jpg"}
                          alt={item.alt || ""}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div className="relative w-full h-full">
                          <Image
                            src={item.poster || "/projeto1.jpg"}
                            alt={item.description}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white text-sm">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full bg-card border-border">
                  {item.type === "image" ? (
                    <Image
                      src={item.src || "/projeto1.jpg"}
                      alt={item.alt || ""}
                      width={800}
                      height={600}
                      layout="responsive"
                      objectFit="contain"
                    />
                  ) : (
                    <video controls poster={item.poster} className="w-full">
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <p className="mt-4 text-center text-foreground">{item.description}</p>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}