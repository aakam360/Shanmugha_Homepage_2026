import React from "react";
import Link from "next/link";
import newsData from "../../data/news";
import HeaderThree from "../../components/institutions/header-3";
import Footer from "../../components/institutions/footer";

export default function NewsListPage() {
  return (
    <div className="main-wrapper">
      <HeaderThree />

      <main className="news-list-section">
        <div className="container">
          {/* Back to Home Button */}
          <div className="breadcrumb-section">
            <Link href="/" className="back-link">
              ← Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="news-list-header">
            <h1 className="news-list-title">Campus News</h1>
            <p className="news-list-subtitle">
              Stay updated with the latest news and events from Sri Shanmugha
              Educational Institutions
            </p>
          </div>

          {/* News Grid */}
          <div className="news-grid">
            {newsData.map((article) => (
              <Link
                key={article.slug}
                href={`/news/${article.slug}`}
                className="news-grid-card"
              >
                <div className="news-grid-image">
                  <img src={article.images[0]} alt={article.title} />
                  <div className="news-grid-overlay"></div>
                </div>
                <div className="news-grid-content">
                  <span className="news-grid-category">{article.category}</span>
                  <h3 className="news-grid-title">{article.title}</h3>
                  <span className="news-grid-date">{article.date}</span>
                  <div className="news-grid-arrow">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        .news-list-section {
          padding: 120px 24px 64px;
          background-color: #fff;
          font-family: "Source Sans Pro", sans-serif;
          min-height: 100vh;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .breadcrumb-section {
          margin-bottom: 40px;
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
          cursor: pointer;
        }

        .back-link:hover {
          color: #1a458e;
        }

        .news-list-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .news-list-title {
          font-size: 48px;
          font-weight: 800;
          color: #000;
          margin: 0 0 16px 0;
          line-height: 1.2;
        }

        .news-list-subtitle {
          font-size: 18px;
          color: #666;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
          margin-bottom: 40px;
        }

        .news-grid-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .news-grid-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .news-grid-image {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background-color: #e5e7eb;
        }

        .news-grid-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
          display: block;
        }

        .news-grid-card:hover .news-grid-image img {
          transform: scale(1.08);
        }

        .news-grid-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
        }

        .news-grid-card:hover .news-grid-overlay {
          background: rgba(0, 0, 0, 0.1);
        }

        .news-grid-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex-grow: 1;
          position: relative;
        }

        .news-grid-category {
          display: inline-block;
          background-color: #1a458e;
          color: #fff;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          width: fit-content;
        }

        .news-grid-title {
          font-size: 18px;
          font-weight: 700;
          color: #000;
          line-height: 1.4;
          margin: 0;
          flex-grow: 1;
          transition: color 0.2s ease;
        }

        .news-grid-card:hover .news-grid-title {
          color: #1a458e;
        }

        .news-grid-date {
          display: block;
          color: #888;
          font-size: 14px;
          font-weight: 500;
        }

        .news-grid-arrow {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 24px;
          color: #1a458e;
          opacity: 0;
          transition: all 0.3s ease;
          font-weight: 700;
        }

        .news-grid-card:hover .news-grid-arrow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .news-list-section {
            padding: 100px 16px 40px;
          }

          .news-list-title {
            font-size: 32px;
          }

          .news-list-subtitle {
            font-size: 16px;
          }

          .news-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
          }

          .news-grid-image {
            height: 180px;
          }
        }

        @media (max-width: 480px) {
          .news-list-title {
            font-size: 24px;
          }

          .news-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
