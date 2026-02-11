import React, { useEffect } from "react";

/* =========================
   Campus News Card
========================= */
function NewsCard({ item, className = "" }) {
  if (!item) return null;

  if (item.variant === "standard") {
    return (
      <article
        className={`bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
      >
        <a href={item.href} className="block group">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-4">
            <p className="text-[12px] font-extrabold uppercase tracking-wide text-[#b60000]">
              {item.category}
            </p>
            <h3 className="mt-2 text-[18px] font-bold leading-snug group-hover:underline text-black">
              {item.title}
            </h3>
          </div>
        </a>
      </article>
    );
  }

  return (
    <article className={`relative overflow-hidden rounded-sm ${className}`}>
      <a href={item.href} className="block group h-full">
        <div className="relative h-full min-h-[260px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-black/45 transition duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-white/80">
              {item.category}
            </p>
            <h3 className="mt-1 text-white text-[22px] md:text-[24px] font-extrabold leading-snug max-w-[46ch]">
              {item.title}
            </h3>
          </div>
        </div>
      </a>
    </article>
  );
}

/* =========================
   Campus News Section
========================= */
export default function CampusNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/assets/data/campusNews.json")
      .then((r) => r.json())
      .then(setNews)
      .catch((e) => console.error("campusNews.json load failed", e));
  }, []);

  if (news.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#f6f6f6]">
      <div className="container mx-auto px-6">
        <header className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black">
            Campus News
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-700 font-medium">
            Stories about people, research, and innovation across the campus
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {news.slice(0, 6).map((item, index) => {
            const layoutClasses = [
              "md:col-span-6 min-h-[280px]",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-6 min-h-[280px]",
            ];

            return (
              <NewsCard
                key={item.id || index}
                item={item}
                className={layoutClasses[index]}
              />
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/news"
            className="inline-flex items-center justify-center rounded-md bg-[#b60000] px-8 py-3 text-lg font-semibold text-white hover:bg-[#8c0000] transition"
          >
            More campus news
          </a>
        </div>
      </div>
    </section>
  );
}
