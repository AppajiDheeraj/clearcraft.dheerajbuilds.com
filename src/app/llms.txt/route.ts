export const dynamic = "force-static";

export function GET() {
  return new Response(
    "Studio is a web design and development agency creating high-quality landing pages, UI/UX systems, and conversion-focused digital experiences.",
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
}
