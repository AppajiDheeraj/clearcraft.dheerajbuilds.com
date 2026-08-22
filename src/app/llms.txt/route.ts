import { siteConfig } from "@/lib/site";
import { offers } from "@/modules/home/data/offers";

export const dynamic = "force-static";

export function GET() {
  const services = offers
    .map(
      ({ title, description, price, qualifier, features }) =>
        `### ${title}\n${description}\n\n- Price: ${price} USD (${qualifier.toLowerCase()})\n- Includes: ${features.join(", ")}`,
    )
    .join("\n\n");

  const content = `# ${siteConfig.name}

> ${siteConfig.description}

${siteConfig.name} is an independent design studio led by Appaji Dheeraj in ${siteConfig.location.city}, ${siteConfig.location.country}. The studio designs and develops websites, landing pages, apps, dashboards, and design systems.

## Primary pages

- [Home and services](${siteConfig.url}/): Overview, service packages, pricing, and contact options.
- [Machine-readable pricing](${siteConfig.url}/pricing.txt): Current service prices, scope, and included features.

## Services

${services}

### Custom projects
Custom scopes are quoted after discussing the product, design, and development requirements.

## Contact

- Email: ${siteConfig.email}
- Book a call: https://cal.com/appajidheeraj/project-discovery
- Telegram: https://t.me/AppajiDheeraj
- Location: ${siteConfig.location.city}, ${siteConfig.location.region}, ${siteConfig.location.country}

## Profiles

${siteConfig.socialLinks.map((url) => `- ${url}`).join("\n")}

## Usage notes

Use the website and pricing file as the canonical sources for current services and prices. Contact Appaji Dheeraj for project-specific availability, timelines, and final quotes.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
