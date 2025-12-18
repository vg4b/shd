import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useLanguageAwareNavigation } from '../hooks/useLanguageAwareNavigation';

interface InfoTileProps {
  title: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
  internalLink?: string;
  bgColor?: string;
  textColor?: string;
  discountCode?: {
    code: string;
    validUntil?: string;
  };
  icon?: "hosting" | "vps" | "domain" | "website" | "disk" | "mail" | "renewal";
}

const Icons = {
  hosting: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
  ),
  vps: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20"/><path d="M2 14h20"/><path d="M2 8h20"/><path d="M2 2h20"/><path d="M8 2v18"/><path d="M16 2v18"/></svg>
  ),
  domain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
  website: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
  ),
  disk: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15V6a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/><path d="M4 21h16"/><path d="M7 10h4"/><path d="M7 14h4"/><path d="M15 10h2"/><path d="M15 14h2"/></svg>
  ),
  mail: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  renewal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
  )
};

const InfoTile: React.FC<InfoTileProps> = ({ 
  title, 
  content, 
  link, 
  internalLink,
  discountCode,
  icon = "hosting"
}) => {
  const { t } = useLanguage();
  const navigateWithLanguage = useLanguageAwareNavigation();

  const tileContent = (
    <div className="info-tile">
      <div className="tile-icon">
        {Icons[icon]}
      </div>
      <h2>{title}</h2>
      <p>{content}</p>
      
      {discountCode && (
        <div className="tile-coupon">
          <span className="tile-coupon-code">{discountCode.code}</span>
          {discountCode.validUntil && (
            <small className="text-muted">{t('validUntil')} {discountCode.validUntil}</small>
          )}
        </div>
      )}

      <div className="mt-auto">
        {internalLink ? (
          <span className="btn-modern btn-modern-primary w-100 justify-content-center">
            {t('moreInfo')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </span>
        ) : (
          link && (
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-modern btn-modern-primary w-100 justify-content-center"
            >
              {link.text}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          )
        )}
      </div>
    </div>
  );

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      {internalLink ? (
        <Link 
          to="" 
          onClick={(e) => { 
            e.preventDefault(); 
            navigateWithLanguage(internalLink);
          }} 
          className="text-decoration-none h-100 d-block"
        >
          {tileContent}
        </Link>
      ) : (
        tileContent
      )}
    </div>
  );
};

export default InfoTile; 