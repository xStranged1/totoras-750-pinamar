import * as React from "react";
import { Info, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MAX_STAY_DAYS, unitOptions, waLink } from "@/config";

const fieldLabel = "mb-1.5 block text-sm font-semibold";

function formatDate(value: string) {
  return value.split("-").reverse().join("/");
}

export default function ConsultForm() {
  const [unit, setUnit] = React.useState(unitOptions[0]);
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [people, setPeople] = React.useState("");

  const nights = React.useMemo(() => {
    if (!from || !to) return null;
    const diff = (new Date(to).getTime() - new Date(from).getTime()) / 86_400_000;
    return Math.round(diff);
  }, [from, to]);

  const endBeforeStart = nights !== null && nights <= 0;
  const tooLong = nights !== null && nights > MAX_STAY_DAYS;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (endBeforeStart) return;

    const lines = ["Hola! Quisiera consultar disponibilidad y precio en Totoras 750, Pinamar."];
    if (unit !== unitOptions[0]) lines.push(`Alojamiento: ${unit}`);
    if (from) lines.push(`Llegada: ${formatDate(from)}`);
    if (to) lines.push(`Salida: ${formatDate(to)}`);
    if (people) lines.push(`Personas: ${people}`);

    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="unit" className={fieldLabel}>
          Alojamiento
        </label>
        <select
          id="unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="flex h-11 w-full rounded-lg border border-input bg-background px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring md:text-sm"
        >
          {unitOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="from" className={fieldLabel}>
          Llegada
        </label>
        <Input id="from" type="date" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>

      <div>
        <label htmlFor="to" className={fieldLabel}>
          Salida
        </label>
        <Input id="to" type="date" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="people" className={fieldLabel}>
          Cantidad de personas
        </label>
        <Input
          id="people"
          type="number"
          inputMode="numeric"
          min={1}
          max={5}
          placeholder="Por ejemplo: 4"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>

      {(endBeforeStart || tooLong) && (
        <p
          role="status"
          className="flex items-start gap-2 rounded-lg bg-sand/70 p-3 text-sm sm:col-span-2"
        >
          <Info className="mt-0.5 size-4 shrink-0" />
          {endBeforeStart
            ? "La fecha de salida tiene que ser posterior a la de llegada."
            : `Las estadías son de hasta ${MAX_STAY_DAYS} días. Podés enviar la consulta igual y lo vemos por WhatsApp.`}
        </p>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto" disabled={endBeforeStart}>
          <MessageCircle />
          Enviar consulta por WhatsApp
        </Button>
      </div>
    </form>
  );
}
