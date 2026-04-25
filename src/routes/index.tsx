import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-olam.png";
import gallery1 from "@/assets/gallery-bautismo.jpg";
import gallery2 from "@/assets/gallery-luminaria.jpg";
import gallery3 from "@/assets/gallery-15anios.jpg";
import gallery4 from "@/assets/gallery-cartel.jpg";
import gallery5 from "@/assets/gallery-anito.jpg";
import gallery6 from "@/assets/gallery-cuadernos.jpg";
import gallery7 from "@/assets/gallery-tequiero.jpg";
import gallery8 from "@/assets/gallery-flores.jpg";
import gallery9 from "@/assets/gallery-mis15.jpg";
import gallery10 from "@/assets/gallery-dtf.jpg";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Sparkles,
  Package,
  GraduationCap,
  Cake,
  Lightbulb,
  Gift,
  Baby,
  Shirt,
  Utensils,
  Flag,
  Mountain,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "5493854338039";
const WHATSAPP_DISPLAY = "+54 3854 33-8039";
const ADDRESS = "Aristóbulo del Valle 1090 y Gobernador Taboada, La Banda, Santiago del Estero";
const FACEBOOK_URL = "https://www.facebook.com/Olamregaloseternos/";
const INSTAGRAM_URL = "https://www.instagram.com/olam_regaleria/";
const TIKTOK_URL = "https://www.tiktok.com/@olam.regaleria";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.6 5.82a4.28 4.28 0 0 1-3.77-2.32h-2.9v12.4a2.5 2.5 0 1 1-2.5-2.5c.27 0 .53.04.78.12v-2.96a5.46 5.46 0 1 0 4.62 5.4V9.4a7.16 7.16 0 0 0 4.27 1.4V7.86a4.27 4.27 0 0 1-.5-2.04Z" />
  </svg>
);

const catalogos = [
  {
    icon: Mountain,
    title: "Artículos Regionales",
    desc: "Piezas únicas que reflejan la identidad de Santiago del Estero.",
  },
  {
    icon: Flag,
    title: "Promesa a la Bandera",
    desc: "Souvenirs especiales para esta fecha tan importante.",
  },
  {
    icon: Package,
    title: "Catálogo BOX",
    desc: "Cajas cónicas, cajones verduleros, cercas, fraperas, cofres y más.",
  },
  {
    icon: GraduationCap,
    title: "Didácticos",
    desc: "Encastres, letras, números, mapas, sistema solar, tabla pitagórica y reloj digital.",
  },
  {
    icon: Utensils,
    title: "Servilleteros e Individuales",
    desc: "Detalles funcionales y decorativos para tu mesa.",
  },
  {
    icon: Cake,
    title: "Catálogo Candy",
    desc: "Posa cupcakes, posa tortas, combos de 7/8/9 piezas, torre Eiffel, coronas y marcos.",
  },
  {
    icon: Lightbulb,
    title: "Luminarias",
    desc: "Iluminación decorativa con diseños personalizados.",
  },
  {
    icon: Gift,
    title: "Souvenirs y Centros de Mesa",
    desc: "Cumpleaños, eventos, 15 años y comuniones inolvidables.",
  },
  {
    icon: Baby,
    title: "Catálogo Infantil",
    desc: "Casas de muñecas, aviones, pistas, tatetí, alcancías y rompecabezas.",
  },
  {
    icon: Shirt,
    title: "Línea DTF",
    desc: "Stickers, textil, portacelulares y tablas para picadas impresas en DTF.",
  },
];

function Index() {
  const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola Olam! Me interesa conocer sus productos.")}`;

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Logo Olam" className="h-12 w-12 rounded-full shadow-soft" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-lg text-gradient-brand">OLAM</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Regalos Eternos</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#productos" className="hover:text-primary transition-smooth">Productos</a>
            <a href="#galeria" className="hover:text-primary transition-smooth">Galería</a>
            <a href="#nosotros" className="hover:text-primary transition-smooth">Nosotros</a>
            <a href="#contacto" className="hover:text-primary transition-smooth">Contacto</a>
          </nav>
          <Button asChild className="bg-gradient-brand hover:opacity-90 shadow-brand rounded-full">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-16 pb-24 md:pt-24 md:pb-32">
        {/* blobs */}
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute top-40 -right-20 w-96 h-96 rounded-full bg-secondary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

        <div className="container relative mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Fábrica de artículos en fibrofácil
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-[0.95] mb-6">
              Donde hacemos <br />
              <span className="text-gradient-brand">realidad</span> tu <br />
              imaginación.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              En Olam diseñamos y fabricamos piezas únicas en fibrofácil: souvenirs, candy, didácticos,
              luminarias, infantiles, regionales y nuestra nueva línea en DTF. Calidad artesanal hecha en La Banda.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 shadow-brand rounded-full text-base h-12 px-7">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  Pedí tu cotización <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 border-2">
                <a href="#productos">Ver catálogos</a>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div><span className="block text-2xl font-display font-bold text-foreground">10+</span>Catálogos</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="block text-2xl font-display font-bold text-foreground">100%</span>Artesanal</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="block text-2xl font-display font-bold text-foreground">DTF</span>Nueva línea</div>
            </div>
          </div>

          {/* Logo display */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-brand rounded-full blur-3xl opacity-30 scale-75" />
            <img
              src={logo}
              alt="Olam · Regalos Eternos · Fábrica de artículos en fibrofácil"
              className="relative w-full max-w-md animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { t: "Hecho a mano", d: "Cada pieza es trabajada con dedicación en nuestro taller de La Banda." },
            { t: "A tu medida", d: "Personalizamos diseños, tamaños y acabados según tu evento o marca." },
            { t: "Innovación DTF", d: "Sumamos impresión DTF para textiles, stickers, portacelulares y más." },
          ].map((b) => (
            <div key={b.t} className="bg-background rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-brand transition-smooth hover:-translate-y-1">
              <div className="h-12 w-12 rounded-2xl bg-gradient-brand flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{b.t}</h3>
              <p className="text-muted-foreground text-sm">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/15 text-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
              Nuestros catálogos
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              Todo lo que <span className="text-gradient-brand">creamos</span> para vos
            </h2>
            <p className="text-muted-foreground">
              Explorá nuestras líneas y encontrá la pieza perfecta para tu evento, comercio o regalo.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogos.map((c, i) => {
              const Icon = c.icon;
              const isAlt = i % 2 === 0;
              return (
                <div
                  key={c.title}
                  className="group relative rounded-3xl p-7 bg-background border border-border/60 hover:border-primary/40 shadow-soft hover:shadow-brand transition-smooth hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-smooth ${isAlt ? "bg-primary" : "bg-secondary"}`} />
                  <div className={`relative h-14 w-14 rounded-2xl flex items-center justify-center mb-5 ${isAlt ? "bg-gradient-brand" : "bg-secondary"}`}>
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="relative font-display text-xl font-bold mb-2">{c.title}</h3>
                  <p className="relative text-sm text-muted-foreground">{c.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 shadow-brand rounded-full h-12 px-8">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                Consultanos por WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
              Galería
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4">
              Una <span className="text-gradient-brand">muestra</span> de nuestro trabajo
            </h2>
            <p className="text-muted-foreground">
              Algunas de las piezas que hemos creado para nuestros clientes.
            </p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {[
              { src: gallery1, alt: "Centro de mesa Mi Bautismo con farol" },
              { src: gallery9, alt: "Cofre y cuaderno personalizado Mis 15" },
              { src: gallery2, alt: "Luminaria de fibrofácil con diseño de árbol" },
              { src: gallery3, alt: "Números gigantes 15 para fiesta" },
              { src: gallery6, alt: "Cuadernos personalizados para maestras" },
              { src: gallery5, alt: "Cuadro Mi Primer Añito con fotos por mes" },
              { src: gallery8, alt: "Centro de mesa con flores estilo casita" },
              { src: gallery10, alt: "Stickers y diseños DTF" },
              { src: gallery4, alt: "Cartel personalizado Novedades S.M.A" },
              { src: gallery7, alt: "Caja decorativa Te Quiero" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="mb-4 break-inside-avoid rounded-2xl overflow-hidden shadow-soft border border-border/60 hover:shadow-brand transition-smooth hover:-translate-y-1 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-smooth duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 shadow-brand rounded-full h-12 px-8">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                Quiero algo así <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[2.5rem] bg-gradient-brand p-10 md:p-16 text-center overflow-hidden shadow-brand">
            <div className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-16 -right-10 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
            <h2 className="relative font-display text-4xl md:text-6xl font-black text-primary-foreground mb-4">
              ¿Tenés una idea?
            </h2>
            <p className="relative text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
              Convertimos tu imaginación en piezas reales. Pedinos tu diseño personalizado.
            </p>
            <Button asChild size="lg" className="relative bg-background text-primary hover:bg-background/90 rounded-full h-12 px-8 font-semibold">
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" /> Escribinos ahora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-gradient-soft">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
              Visitanos o <span className="text-gradient-brand">escribinos</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Estamos en La Banda, Santiago del Estero. Atendemos pedidos, consultas y diseños personalizados.
            </p>

            <div className="space-y-4">
              <a
                href="https://maps.google.com/?q=Aristobulo+del+Valle+1090+La+Banda+Santiago+del+Estero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-soft transition-smooth"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-brand flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Dirección</div>
                  <div className="text-sm text-muted-foreground">{ADDRESS}</div>
                </div>
              </a>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border/60 hover:border-primary/40 hover:shadow-soft transition-smooth"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-secondary flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-background border border-border/60">
                <div className="font-semibold mb-3">Seguinos en redes</div>
                <div className="flex gap-3">
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground hover:scale-110 transition-smooth">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground hover:scale-110 transition-smooth">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="h-11 w-11 rounded-xl bg-gradient-brand flex items-center justify-center text-primary-foreground hover:scale-110 transition-smooth">
                    <TikTokIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-brand border border-border/60 aspect-square md:aspect-auto md:h-[480px]">
            <iframe
              title="Ubicación Olam"
              src="https://www.google.com/maps?q=Aristobulo+del+Valle+1090+La+Banda+Santiago+del+Estero&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Olam" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-display font-bold text-gradient-brand">OLAM · Regalos Eternos</div>
              <div className="text-xs text-muted-foreground">Donde hacemos realidad tu imaginación</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-smooth">
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-smooth">
              <Phone className="h-4 w-4" />
            </a>
          </div>
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} Olam — La Banda, Santiago del Estero</div>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-brand shadow-brand flex items-center justify-center hover:scale-110 transition-smooth"
      >
        <Phone className="h-6 w-6 text-primary-foreground" />
      </a>
    </div>
  );
}
