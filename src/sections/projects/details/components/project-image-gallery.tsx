"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProjectImageGalleryProps {
  images: string[];
  mainImage?: string;
  projectName: string;
}

export function ProjectImageGallery({
  images,
  mainImage,
  projectName,
}: ProjectImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const allImages = mainImage ? [mainImage, ...images] : images;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev! > 0 ? prev! - 1 : allImages.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev! < allImages.length - 1 ? prev! + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, allImages.length]);

  const handlePrevious = useCallback(() => {
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : allImages.length - 1));
  }, [allImages.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev! < allImages.length - 1 ? prev! + 1 : 0));
  }, [allImages.length]);

  // Dynamic grid layout patterns
  const getGridClass = (index: number) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2 md:row-span-1", // Wide
    ];

    if (index === 0 && mainImage) return patterns[0];
    return patterns[(index % 4) + 1] || patterns[1];
  };

  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className=" px-4">
          {/* Header with elegant animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-cormorant mb-4 text-primary text-balance">
              Galería del Proyecto
            </h2>
            <p className="text-foreground font-lora text-lg">
              {allImages.length}{" "}
              {allImages.length === 1 ? "imagen" : "imágenes"}
            </p>
          </motion.div>

          {/* Masonry-style grid with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-[200px]">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${getGridClass(
                  index
                )}`}
                onClick={() => setSelectedIndex(index)}
              >
                {/* Image container with parallax effect */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${projectName} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>

                {/* Gradient overlay with reveal animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                {/* Hover content with slide-up animation */}
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                  initial={false}
                >
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-sm font-medium font-lora opacity-80">
                        Imagen {index + 1}
                      </p>
                      <p className="text-lg font-lora font-semibold">{projectName}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Maximize2 className="w-5 h-5" />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Lightbox Modal */}
      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
            onClick={() => {
              setSelectedIndex(null);
              setIsZoomed(false);
            }}
          >
            {/* Top controls bar */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10"
            >
              <div className="text-white">
                <p className="text-sm font-lora opacity-60">
                  {selectedIndex + 1} / {allImages.length}
                </p>
                <p className="text-lg font-lora font-semibold">{projectName}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                >
                  <ZoomIn className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(null);
                    setIsZoomed(false);
                  }}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>

            {/* Main image with smooth transitions */}
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-20">
              <AnimatePresence mode="wait" custom={selectedIndex}>
                <motion.div
                  key={selectedIndex}
                  custom={selectedIndex}
                  initial={{ opacity: 0, scale: 0.9, x: 100 }}
                  animate={{ opacity: 1, scale: isZoomed ? 1.5 : 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -100 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={allImages[selectedIndex] || "/placeholder.svg"}
                    alt={`${projectName} - Imagen ${selectedIndex + 1}`}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            {allImages.length > 1 && (
              <>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevious();
                    }}
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 w-12 h-12 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                  >
                    <ChevronRight className="h-8 w-8" />
                  </Button>
                </motion.div>
              </>
            )}

            {/* Thumbnail navigation bar */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-3 justify-center overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === selectedIndex
                        ? "ring-2 ring-white scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`}
                    whileHover={{ scale: index === selectedIndex ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Progress indicator */}
            <motion.div
              className="absolute top-0 left-0 h-1 bg-white"
              initial={{ width: "0%" }}
              animate={{
                width: `${((selectedIndex + 1) / allImages.length) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
