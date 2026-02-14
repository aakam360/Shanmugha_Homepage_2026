"use client";

import { useState } from "react";

import newsData from "../../data/news";

/* =========================
   News Data with Variants
   We map the imported data to the required format and assign variants.
========================= */
const news = newsData.map((item, index) => {
  // Assign layout variants based on index
  // 0 and 5 are large (spotlight/wide), others are standard.
  let variant = "standard";
  if (index === 0 || index === 5) variant = "spotlight";

  return {
    id: index + 1,
    category: item.category || "Campus News",
    title: item.title,
    image: item.images[0], // Use the first image
    href: `/news/${item.slug}`,
    variant: variant,
  };
});

/* =========================
   NewsCard – two visual variants
========================= */
function NewsCard({ item, extraClass = "" }) {
  const [hovered, setHovered] = useState(false);

  if (item.variant === "standard") {
    return (
      <article
        className={`cn-card cn-card-standard ${extraClass}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          boxShadow: hovered
            ? "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)"
            : "0 1px 2px 0 rgba(0,0,0,.05)",
        }}
      >
        <a href={item.href} className="cn-card-link">
          <div className="cn-card-img-wrap">
            <img
              src={item.image}
              alt={item.title}
              className="cn-card-img"
              style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
            />
          </div>
          <div className="cn-card-body">
            <p className="cn-card-category">{item.category}</p>
            <h3
              className="cn-card-title"
              style={{ textDecoration: hovered ? "underline" : "none" }}
            >
              {item.title}
            </h3>
          </div>
        </a>
      </article>
    );
  }

  /* Spotlight / Wide overlay variant */
  return (
    <article
      className={`cn-card cn-card-overlay ${extraClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <a href={item.href} className="cn-card-link cn-card-link-full">
        <div className="cn-overlay-inner">
          <img
            src={item.image}
            alt={item.title}
            className="cn-overlay-img"
            style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
          />
          <div
            className="cn-overlay-dark"
            style={{
              backgroundColor: hovered
                ? "rgba(0,0,0,0.60)"
                : "rgba(0,0,0,0.45)",
            }}
          />
          <div className="cn-overlay-text">
            <p className="cn-overlay-category">{item.category}</p>
            <h3 className="cn-overlay-title">{item.title}</h3>
          </div>
        </div>
      </a>
    </article>
  );
}

/* =========================
   Embedded Stylesheet
========================= */
const campusNewsStyles = `
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap');

/* ---- Section ---- */
.cn-section {
  padding: 64px 0;
  background-color: #f6f6f6;
  font-family: "Source Sans Pro", sans-serif;
}
@media (min-width: 768px) {
  .cn-section { padding: 96px 0; }
}

.cn-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* ---- Header ---- */
.cn-header {
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
}
.cn-heading {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  color: #000;
  margin: 0;
  line-height: 1.1;
}
@media (min-width: 768px) {
  .cn-heading { font-size: 3.75rem; }
}
.cn-subheading {
  margin-top: 16px;
  font-size: 1.125rem;
  color: #404040;
  font-weight: 500;
}
@media (min-width: 768px) {
  .cn-subheading { font-size: 1.25rem; }
}

/* ---- Grid ---- */
.cn-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 40px;
}
@media (min-width: 768px) {
  .cn-grid {
    grid-template-columns: repeat(12, 1fr);
  }
  .cn-col-6 { grid-column: span 6; }
  .cn-col-3 { grid-column: span 3; }
}

/* ---- Card shared ---- */
.cn-card {
  border-radius: 2px;
  overflow: hidden;
  transition: box-shadow 300ms;
}
.cn-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
}
.cn-card-link-full {
  height: 100%;
}

/* ---- Standard card ---- */
.cn-card-standard {
  background-color: #fff;
}
.cn-card-img-wrap {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 10;
}
.cn-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 300ms;
}
.cn-card-body {
  padding: 16px;
}
.cn-card-category {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a458e;
  margin: 0;
}
.cn-card-title {
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.4;
  color: #000;
  margin-bottom: 0;
}

/* ---- Overlay card (spotlight / wide) ---- */
.cn-card-overlay {
  position: relative;
}
.cn-overlay-inner {
  position: relative;
  height: 100%;
  min-height: 260px;
}
.cn-overlay-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 300ms;
}
.cn-overlay-dark {
  position: absolute;
  inset: 0;
  transition: background-color 300ms;
}
.cn-overlay-text {
  position: absolute;
  inset: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.cn-overlay-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}
.cn-overlay-title {
  margin-top: 4px;
  color: #fff;
  font-size: 22px;
  font-weight: 800;
  line-height: 1.4;
  max-width: 46ch;
  margin-bottom: 0;
}
@media (min-width: 768px) {
  .cn-overlay-title { font-size: 24px; }
}

/* ---- min-height helper ---- */
.cn-min-h-280 {
  min-height: 280px;
}

/* ---- CTA Button ---- */
.cn-cta-wrap {
  margin-top: 48px;
  text-align: center;
}
.cn-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: #1a458e;
  padding: 12px 32px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  transition: background-color 200ms;
  border: none;
  cursor: pointer;
  font-family: "Source Sans Pro", sans-serif;
}
.cn-btn:hover {
  background-color: #142a5e;
}
`;

/* =========================
   CampusNews – the full section
========================= */
export default function CampusNews() {
  return (
    <>
      <style>{campusNewsStyles}</style>
      <section className="cn-section" style={{paddingTop:50}}>
        <div className="cn-container">
          {/* Header */}
          <header className="cn-header">
            <h2 className="cn-heading">Campus News</h2>
            <p className="cn-subheading">
              Stories about people, research, and innovation across the campus
            </p>
          </header>

          {/* 12-col News Grid */}
          <div className="cn-grid">
            {/* Row 1 */}
            <NewsCard item={news[0]} extraClass="cn-col-6 cn-min-h-280" />
            <NewsCard item={news[1]} extraClass="cn-col-3" />
            <NewsCard item={news[2]} extraClass="cn-col-3" />
            {/* Row 2 */}
            <NewsCard item={news[3]} extraClass="cn-col-3" />
            <NewsCard item={news[4]} extraClass="cn-col-3" />
            <NewsCard item={news[5]} extraClass="cn-col-6 cn-min-h-280" />
          </div>

          {/* CTA Button */}
          <div className="cn-cta-wrap">
            <a href="/news" className="cn-btn">
              More campus news
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
