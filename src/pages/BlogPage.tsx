import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { blogPosts, getEstimatedReadingMinutes } from "../blog/posts";

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = t("blog.pageTitle");
  }, [t]);

  const withLanguage = (path: string) =>
    language === "cs" ? `/${path}` : `/${language}/${path}`;
  const localizedPosts = blogPosts.filter((post) => post.language === language);

  const formatReadingTime = (minutes: number): string => {
    if (minutes < 1) {
      return t("blog.lessThanMinute");
    }
    return `${Math.round(minutes)} ${t("blog.minutes")}`;
  };

  return (
    <Layout>
      <div className="blog-header mb-4">
        <h1 className="mb-2">{t("blog.title")}</h1>
        <p className="mb-0">{t("blog.subtitle")}</p>
      </div>

      <div className="row">
        {localizedPosts.map((post) => (
          <div key={post.slug} className="col-lg-4 col-md-6 mb-4">
            <article className="blog-card">
              <div className="blog-card__meta">
                <span>{post.category}</span>
                <span>·</span>
                <span>{formatReadingTime(getEstimatedReadingMinutes(post))}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              {post.productLinks[0] && (
                <a
                  href={post.productLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card__affiliate-link"
                >
                  {t("blog.openOffer")}: {post.productLinks[0].label}
                </a>
              )}
              <div className="blog-card__footer">
                <small>{t("blog.published")}: {post.publishedAt}</small>
                <Link to={withLanguage(`blog/${post.slug}`)}>{t("blog.readMore")}</Link>
              </div>
            </article>
          </div>
        ))}
        {localizedPosts.length === 0 && (
          <div className="col-12">
            <p className="text-muted">{t("blog.noPostsForLanguage")}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPage;
