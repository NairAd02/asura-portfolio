"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, Music, Volume2, VolumeX } from "lucide-react";
import { Howl } from "howler";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicToggleButton() {
  const [sound, setSound] = useState<Howl | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isFirstInteraction, setIsFirstInteraction] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const audio = new Howl({
      src: ["/sounds/call-of-magic.mpeg"],
      loop: true,
      volume: 0.5,
      mute: true,
    });

    setSound(audio);

    return () => {
      audio.unload();
    };
  }, []);

  // Ciclo de aparición y desaparición del hint
  useEffect(() => {
    if (isMuted || isFirstInteraction) {
      // Iniciar el ciclo después de 2 segundos
      const startTimeout = setTimeout(() => {
        const cycleHint = () => {
          setShowHint(true);

          // Ocultar después de 3 segundos
          setTimeout(() => {
            setShowHint(false);
          }, 3000);
        };

        // Mostrar inmediatamente la primera vez
        cycleHint();

        // Repetir cada 8 segundos (3s visible + 5s oculto)
        intervalRef.current = setInterval(cycleHint, 8000);
      }, 2000);

      return () => {
        clearTimeout(startTimeout);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      // Limpiar el intervalo cuando no está muteado
      setShowHint(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  }, [isMuted, isFirstInteraction]);

  const toggleMute = () => {
    if (!sound) return;

    setShowHint(false); // Ocultar hint inmediatamente cuando se hace clic

    if (isFirstInteraction) {
      sound.mute(false);
      sound.play();
      setIsFirstInteraction(false);
      setIsMuted(false);
    } else {
      sound.mute(!isMuted);
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative inline-block">
      <Button
        ref={buttonRef}
        onClick={toggleMute}
        className={cn(
          "rounded-full size-8 shadow-lg transition-all duration-300 hover:scale-110",
          isMuted || isFirstInteraction
            ? "bg-destructive hover:bg-destructive"
            : "bg-primary hover:bg-primary/60"
        )}
      >
        {isMuted || isFirstInteraction ? (
          <VolumeX className="h-6 w-6 text-white" />
        ) : (
          <Volume2 className="h-6 w-6 text-white" />
        )}
      </Button>

      {/* Hint animado - Versión desktop (derecha) */}
      <AnimatePresence>
        {showHint && (isMuted || isFirstInteraction) && (
          <>
            {/* Desktop: Derecha del botón */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="hidden sm:block absolute left-full top-1/2 -translate-y-1/2 ml-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-xl whitespace-nowrap z-50 border border-primary"
            >
              <div className="relative flex items-center gap-2">
                <ArrowBigLeft className="h-4 w-4" />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Music className="h-4 w-4" />
                </motion.div>
                ¡Activa la música aquí!
              </div>
            </motion.div>

            {/* Mobile: Debajo del botón */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="block sm:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg shadow-xl whitespace-nowrap z-50 border border-primary"
            >
              <div className="relative flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  <Music className="h-4 w-4" />
                </motion.div>
                ¡Activa la música aquí!
                {/* Flecha apuntando hacia arriba en mobile */}
                <ArrowBigLeft className="h-4 w-4 transform rotate-90" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Anillo pulsante alrededor del botón */}
      <AnimatePresence>
        {(isMuted || isFirstInteraction) && (
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 0.3, 0.8],
            }}
            exit={{ scale: 1, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full border-2 border-primary/70 pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
