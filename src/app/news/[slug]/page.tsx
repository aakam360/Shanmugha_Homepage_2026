import React from "react";
import { notFound } from "next/navigation";
import newsData from "../../../data/news"; // Adjust path as needed
import HeaderThree from "../../../components/institutions/header-3";
import Footer from "../../../components/institutions/footer";
import Link from "next/link";

// Required for static export
export async function generateStaticParams() {
  return newsData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const newsItem = newsData.find((item) => item.slug === slug);

  if (!newsItem) {
    return notFound();
  }

  // Get related news (all except current article)
  const relatedNews = newsData.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="main-wrapper">
      <HeaderThree />

      <main className="news-detail-section">
        <div className="container">
          {/* Back to Home Button */}
          <div className="breadcrumb-section">
            <Link href="/" className="back-link">
              ← Back to Home
            </Link>
          </div>

          <div className="news-header">
            <span className="news-date">{newsItem.date}</span>
            <h1 className="news-title">{newsItem.title}</h1>
            <span className="news-category">{newsItem.category}</span>
          </div>

          <div className="news-image-wrapper">
            <img
              src={newsItem.images[0]}
              alt={newsItem.title}
              className="news-main-image"
            />
          </div>

          <div className="news-content">
            {newsItem.content.split("\n").map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Related News Section */}
        {relatedNews.length > 0 && (
          <div className="related-news-section">
            <div className="container">
              <h2 className="related-news-title">Related News</h2>
              <div className="related-news-grid">
                {relatedNews.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/news/${article.slug}`}
                    className="related-news-card"
                  >
                    <div className="related-news-image">
                      <img src={article.images[0]} alt={article.title} />
                    </div>
                    <div className="related-news-content">
                      <span className="related-news-category">
                        {article.category}
                      </span>
                      <h3 className="related-news-title-text">
                        {article.title}
                      </h3>
                      <span className="related-news-date">{article.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <style>{`
        .news-detail-section {
          padding: 120px 24px 64px; /* Top padding for fixed header */
          background-color: #fff;
          font-family: "Source Sans Pro", sans-serif;
          min-height: 60vh;
        }
        .container {
          max-width: 900px;
          margin: 0 auto;
        }
        .breadcrumb-section {
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid #e5e7eb;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          color: #1a458e;
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .back-link:hover {
          color: #1a458e;
          gap: 4px;
        }
        .news-header {
          margin-bottom: 32px;
          text-align: center;
        }
        .news-date {
          display: block;
          color: #666;
          font-size: 16px;
          margin-bottom: 8px;
        }
        .news-title {
          font-size: 32px;
          font-weight: 800;
          color: #000;
          line-height: 1.3;
          margin-bottom: 12px;
        }
        .news-category {
           display: inline-block;
           background-color: #1a458e;
           color: #fff;
           padding: 4px 12px;
           border-radius: 4px;
           font-size: 14px;
           font-weight: 600;
           text-transform: uppercase;
        }
        .news-image-wrapper {
          margin-bottom: 40px;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .news-main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .news-content {
          font-size: 18px;
          line-height: 1.8;
          color: #333;
        }
        .news-content p {
          margin-bottom: 24px;
        }
        
        /* Related News Section */
        .related-news-section {
          background-color: #f8f9fa;
          padding: 64px 24px;
          margin-top: 64px;
        }
        .related-news-section .container {
          max-width: 900px;
          margin: 0 auto;
        }
        .related-news-title {
          font-size: 28px;
          font-weight: 700;
          color: #000;
          margin-bottom: 40px;
          text-align: center;
          position: relative;
          padding-bottom: 16px;
        }
        .related-news-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background-color: #1a458e;
          border-radius: 2px;
        }
        .related-news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }
        .related-news-card {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        .related-news-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
        .related-news-image {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background-color: #e5e7eb;
        }
        .related-news-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .related-news-card:hover .related-news-image img {
          transform: scale(1.05);
        }
        .related-news-content {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .related-news-category {
          display: inline-block;
          background-color: #1a458e;
          color: #fff;
          padding: 4px 10px;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          width: fit-content;
        }
        .related-news-title-text {
          font-size: 16px;
          font-weight: 700;
          color: #000;
          line-height: 1.4;
          margin: 0;
          flex-grow: 1;
        }
        .related-news-date {
          display: block;
          color: #666;
          font-size: 14px;
          margin-top: 8px;
        }
        
        @media (min-width: 768px) {
          .news-title {
            font-size: 42px;
          }
          .news-detail-section {
            padding-top: 140px;
          }
          .related-news-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
