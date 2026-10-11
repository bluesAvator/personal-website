import Image from "next/image"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { gallery, placeholderImages, pricingTiers, site } from "@/lib/site"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main>
        <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-end">
            <div className="max-w-lg space-y-6">
              <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Photography
              </p>
              <h1 className="font-heading text-4xl leading-tight font-medium tracking-tight text-balance md:text-5xl">
                Light, gesture, and the moments in between.
              </h1>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                I am {site.name}, a photographer based in Taipei. I work on
                portraits, editorial assignments, and quiet stories about
                everyday life.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  View selected work
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
                >
                  {site.email}
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted md:aspect-[5/6]">
              <Image
                src={placeholderImages.hero.src}
                alt={placeholderImages.hero.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
            <div className="relative aspect-[3/4] overflow-hidden bg-muted">
              <Image
                src={placeholderImages.portrait.src}
                alt={placeholderImages.portrait.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
                Introduction
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  My work sits between documentary and portrait: I look for
                  unguarded expressions, honest light, and compositions that
                  leave room to breathe.
                </p>
                <p>
                  I shoot on film and digital, often mixing both on longer
                  projects. Clients include independent magazines, small
                  businesses, and families who want images that feel lived-in
                  rather than staged.
                </p>
                <p>
                  If you are planning a session or assignment, share a few
                  reference images and your timeline — I reply within two
                  business days.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 border-t border-border/60 bg-muted/20">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
                  My work
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                  A small selection of recent frames. Each image below uses a
                  placeholder URL you can swap for your own files.
                </p>
              </div>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((item) => (
                <li key={item.id} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-3 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <Badge variant="secondary" className="font-mono text-[10px]">
                      {item.id}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="pricing" className="scroll-mt-20 border-t border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-2xl space-y-4">
              <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
                Pricing
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                Rates below are a starting point for personal and small
                commercial work. Travel, rush delivery, and licensing for
                larger campaigns are quoted separately. The table summarizes
                packages; cards highlight what is included in each tier.
              </p>
            </div>

            <div className="mt-12 hidden overflow-hidden rounded-none border border-border md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Starting at</TableHead>
                    <TableHead>Best for</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingTiers.map((tier) => (
                    <TableRow key={tier.name}>
                      <TableCell className="font-medium">{tier.name}</TableCell>
                      <TableCell>{tier.price}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {tier.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={cn(
                    "rounded-none border-border/80 shadow-none",
                    "featured" in tier &&
                      tier.featured &&
                      "border-primary/40 bg-muted/30"
                  )}
                >
                  <CardHeader className="gap-2">
                    {"featured" in tier && tier.featured ? (
                      <Badge className="w-fit">Most requested</Badge>
                    ) : null}
                    <CardTitle className="font-heading text-lg font-medium">
                      {tier.name}
                    </CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="font-heading text-3xl font-medium tracking-tight">
                      {tier.price}
                    </p>
                    <Separator />
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tier.includes.map((line) => (
                        <li key={line}>· {line}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border/60 bg-muted/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading text-2xl font-medium tracking-tight md:text-3xl">
                Contact
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Tell me about your project, location, and preferred dates. The
                fastest way to reach me is email — it is linked in the header
                and footer as well.
              </p>
              <a
                href={`mailto:${site.email}`}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-8 inline-flex text-sm md:text-base"
                )}
              >
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
