import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Bed, Users, Maximize, Waves, Wifi, Coffee, Wind } from "lucide-react";

type Room = {
  name: string;
  price: string;
  img: string;
  desc: string;
  size: string;
  beds: string;
  capacity: string;
  view: string;
  long: string;
  features: string[];
  gallery: string[];
};

const rooms: Room[] = [
  {
    name: "Garden Suite",
    price: "€420",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000",
    desc: "A serene retreat overlooking lemon groves with a private patio.",
    size: "42 m²",
    beds: "1 King bed",
    capacity: "2 guests",
    view: "Lemon grove",
    long:
      "Set on the lower terrace, the Garden Suite opens onto a private patio shaded by centuries-old lemon trees. The interior pairs lime-washed walls with handmade Vietri tile and a deep soaking tub.",
    features: ["Private patio", "Soaking tub", "Espresso bar", "Air conditioning"],
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1200",
    ],
  },
  {
    name: "Sea View Suite",
    price: "€680",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1000",
    desc: "Floor-to-ceiling windows framing the endless Tyrrhenian blue.",
    size: "55 m²",
    beds: "1 King bed",
    capacity: "2 guests",
    view: "Tyrrhenian Sea",
    long:
      "Perched on the cliff edge, the Sea View Suite is wrapped in floor-to-ceiling glass. Step out to a generous balcony with a daybed and dine al fresco as the sun melts into the horizon.",
    features: ["Cliffside balcony", "Outdoor daybed", "Rain shower", "Nespresso bar"],
    gallery: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
    ],
  },
  {
    name: "Cliffside Villa",
    price: "€1,250",
    img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1000",
    desc: "A two-bedroom villa with private plunge pool and butler service.",
    size: "120 m²",
    beds: "2 King beds",
    capacity: "4 guests",
    view: "Panoramic coast",
    long:
      "Our flagship residence: two suites, a living room with a stone fireplace, and a wraparound terrace with a heated plunge pool. A dedicated butler curates every detail of your stay.",
    features: ["Heated plunge pool", "Butler service", "Stone fireplace", "Two bathrooms"],
    gallery: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200",
      "https://images.unsplash.com/photo-1551776235-dde6d482980b?w=1200",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    ],
  },
];

const featureIcon: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Pool: Waves,
  Coffee,
  AC: Wind,
};

export function Rooms() {
  return (
    <section id="rooms" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="mb-3 tracking-widest uppercase text-muted-foreground">Suites & Villas</div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>Choose your retreat</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {rooms.map((r) => (
            <Card key={r.name} className="overflow-hidden p-0">
              <ImageWithFallback src={r.img} alt={r.name} className="h-64 w-full object-cover" />
              <CardContent className="space-y-3 p-6">
                <div className="flex items-baseline justify-between">
                  <h3>{r.name}</h3>
                  <div className="text-muted-foreground"><span>{r.price}</span> / night</div>
                </div>
                <p className="text-muted-foreground">{r.desc}</p>
                <RoomDialog room={r} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomDialog({ room }: { room: Room }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full rounded-full">View details</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
        <div className="relative">
          <ImageWithFallback
            src={room.gallery[0]}
            alt={room.name}
            className="h-72 w-full object-cover"
          />
          <Badge className="absolute left-4 top-4 rounded-full bg-background/90 text-foreground hover:bg-background">
            {room.view}
          </Badge>
        </div>

        <div className="grid grid-cols-3 gap-2 p-2">
          {room.gallery.slice(1).map((src, i) => (
            <ImageWithFallback
              key={i}
              src={src}
              alt={`${room.name} view ${i + 2}`}
              className="h-24 w-full rounded-md object-cover"
            />
          ))}
        </div>

        <div className="space-y-6 p-6 pt-2">
          <DialogHeader className="space-y-1 text-left">
            <div className="flex items-baseline justify-between">
              <DialogTitle>{room.name}</DialogTitle>
              <div className="text-muted-foreground">
                <span>{room.price}</span> / night
              </div>
            </div>
            <DialogDescription>{room.long}</DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<Maximize className="h-4 w-4" />} label="Size" value={room.size} />
            <Stat icon={<Bed className="h-4 w-4" />} label="Beds" value={room.beds} />
            <Stat icon={<Users className="h-4 w-4" />} label="Sleeps" value={room.capacity} />
            <Stat icon={<Waves className="h-4 w-4" />} label="View" value={room.view} />
          </div>

          <div>
            <div className="mb-3 tracking-widest uppercase text-muted-foreground" style={{ fontSize: 11 }}>
              Features
            </div>
            <div className="flex flex-wrap gap-2">
              {room.features.map((f) => (
                <Badge key={f} variant="secondary" className="rounded-full px-3 py-1">
                  {f}
                </Badge>
              ))}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => {
                const close = document.activeElement as HTMLElement | null;
                close?.blur();
              }}
            >
              Close
            </Button>
            <Button
              className="rounded-full"
              onClick={() => {
                document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Reserve this suite
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-muted/30 p-3">
      <div className="mb-1 flex items-center gap-1.5 text-muted-foreground" style={{ fontSize: 11 }}>
        {icon}
        <span className="uppercase tracking-wider">{label}</span>
      </div>
      <div>{value}</div>
    </div>
  );
}
