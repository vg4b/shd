import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useLanguage } from "../contexts/LanguageContext";
import { getBlogPostBySlug, getEstimatedReadingMinutes } from "../blog/posts";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const { t, language } = useLanguage();
  const post = getBlogPostBySlug(slug);

  const withLanguage = (path: string) =>
    language === "cs" ? `/${path}` : `/${language}/${path}`;

  const formatReadingTime = (minutes: number): string => {
    if (minutes < 1) {
      return t("blog.lessThanMinute");
    }
    return `${Math.round(minutes)} ${t("blog.minutes")}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = post ? `${post.title} | ${t("blog.title")}` : t("blog.notFoundTitle");
  }, [post, t]);

  if (!post) {
    return (
      <Layout>
        <div className="container py-5">
          <h1>{t("blog.notFoundTitle")}</h1>
          <p>{t("blog.notFoundText")}</p>
          <Link to={withLanguage("blog")} className="btn-modern btn-modern-primary">
            {t("blog.backToBlog")}
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="blog-post">
        <header className="blog-post__header">
          <div className="blog-card__meta">
            <span>{post.category}</span>
            <span>·</span>
            <span>{formatReadingTime(getEstimatedReadingMinutes(post))}</span>
          </div>
          <h1>{post.title}</h1>
          <p>
            {t("blog.published")}: {post.publishedAt}
            {post.updatedAt ? ` · ${t("blog.updated")}: ${post.updatedAt}` : ""}
          </p>
        </header>

        {post.language !== language && (
          <div className="blog-language-notice">{t("blog.languageMismatchNotice")}</div>
        )}

        <div className="blog-post__content">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {post.productLinks.length > 0 && (
          <section className="blog-affiliate-box">
            <h2>{t("blog.relatedOffers")}</h2>
            <ul>
              {post.productLinks.map((productLink) => (
                <li key={productLink.url}>
                  <a href={productLink.url} target="_blank" rel="noopener noreferrer">
                    {t("blog.openOffer")}: {productLink.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-4">
          <Link to={withLanguage("blog")} className="btn-modern btn-modern-outline">
            {t("blog.backToBlog")}
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
