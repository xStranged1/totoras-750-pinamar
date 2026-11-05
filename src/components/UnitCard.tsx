import * as React from "react";
import { Check, ChevronLeft, ChevronRight, Images, MessageCircle, Users, BedDouble } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Unit } from "@/config";
import { cn } from "@/lib/utils";

interface Props {
  unit: Unit;
  whatsappHref: string;
  reverse?: boolean;
}

export default function UnitCard({ unit, whatsappHref, reverse = false }: Props) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const total = unit.photos.length;

  const go = (step: number) => setIndex((i) => (i + step + total) % total);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  return (
    <article className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
      <div className={cn(reverse && "lg:order-2")}>
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative block w-full overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          aria-label={`Ver las fotos de ${unit.name}`}
        >
          <img
            src={unit.photos[0].src}
            alt={unit.photos[0].alt}
            width={960}
            height={1280}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-background/95 px-3.5 py-2 text-sm font-semibold shadow">
            <Images className="size-4" />
            Ver {total} fotos
          </span>
        </button>

        <div className="mt-3 grid grid-cols-4 gap-2">
          {unit.photos.slice(1, 5).map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => openAt(i + 1)}
              className="overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              aria-label={`Ver foto: ${photo.alt}`}
            >
              <img
                src={photo.src}
                alt=""
                width={240}
                height={180}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-opacity hover:opacity-85"
              />
            </button>
          ))}
        </div>
      </div>

      <div className={cn("space-y-5", reverse && "lg:order-1")}>
        <div className="space-y-2">
          <Badge variant="sand">{unit.type}</Badge>
          <h3 className="text-3xl font-semibold sm:text-4xl">{unit.name}</h3>
        </div>

        <p className="max-w-prose text-lg leading-relaxed text-muted-foreground">
          {unit.description}
        </p>

        <dl className="space-y-3">
          <div className="flex items-start gap-3">
            <Users className="mt-0.5 size-5 shrink-0 text-sea" />
            <div>
              <dt className="sr-only">Capacidad</dt>
              <dd className="font-semibold">{unit.capacity}</dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <BedDouble className="mt-0.5 size-5 shrink-0 text-sea" />
            <div>
              <dt className="sr-only">Camas</dt>
              <dd className="font-semibold">{unit.beds}</dd>
            </div>
          </div>
        </dl>

        <ul className="space-y-2">
          {unit.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <Check className="size-4 shrink-0 text-whatsapp" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle />
              Consultar por WhatsApp
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => openAt(0)}>
            Ver fotos
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Fechas y precio a consultar.</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent onKeyDown={onKeyDown}>
          <DialogTitle>{unit.name}</DialogTitle>
          <DialogDescription className="sr-only">
            Galería de fotos de {unit.name}. Usá las flechas para pasar de una foto a otra.
          </DialogDescription>

          <div className="relative overflow-hidden rounded-xl bg-muted">
            <img
              src={unit.photos[index].src}
              alt={unit.photos[index].alt}
              className="mx-auto max-h-[68vh] w-auto max-w-full object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90"
              onClick={() => go(-1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90"
              onClick={() => go(1)}
              aria-label="Foto siguiente"
            >
              <ChevronRight />
            </Button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">{unit.photos[index].alt}</p>
            <p className="shrink-0 text-sm font-medium tabular-nums">
              {index + 1} de {total}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
