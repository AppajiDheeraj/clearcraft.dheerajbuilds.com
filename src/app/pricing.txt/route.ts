import { siteConfig } from "@/lib/site";
import { offers } from "@/modules/home/data/offers";

export const dynamic = "force-static";

export function GET() {
  const packages = offers
    .map(
      ({ title, description, price, qualifier, features }) => `## ${title}

- Price: ${price} USD
- Pricing basis: ${qualifier}
- Description: ${description}
- Included: ${features.join(", ")}`,
    )
    .join("\n\n");

  return new Response(
    `# Pricing — ${siteConfig.name}

${packages}

## Custom projects

- Price: Custom quote
- Scope: Websites, products, design systems, or mixed design and development work outside the listed packages

## Contact

- Email: ${siteConfig.email}
- Book a call: https://cal.com/appajidheeraj/project-discovery
- Website: ${siteConfig.url}/#pricing

Final scope, availability, timeline, and price are confirmed directly before work begins.
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, follow",
      },
    },
  );
}
