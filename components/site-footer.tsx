import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="text-muted-foreground">Available for commissions</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 inline-block font-medium text-foreground underline-offset-4 hover:underline"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
