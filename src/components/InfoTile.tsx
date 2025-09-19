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
  internalLink?: string; // For React Router navigation
  bgColor?: string;
  textColor?: string;
  discountCode?: {
    code: string;
    validUntil?: string;
  };
}

const InfoTile: React.FC<InfoTileProps> = ({ 
  title, 
  content, 
  link, 
  internalLink,
  bgColor = '#f8f9fa', 
  textColor = 'dark',
  discountCode 
}) => {
  const { t } = useLanguage();
  const navigateWithLanguage = useLanguageAwareNavigation();

  const tileContent = (
    <div 
      className={`info-tile h-100 p-5 rounded-3 text-${textColor} ${internalLink ? 'cursor-pointer' : ''}`}
      style={{ backgroundColor: bgColor }}
    >
      <h2>{title}</h2>
      <p>{content}</p>
      {discountCode && (
        <p className="mb-3">
          <strong>{t('discountCode')}: </strong>
          {discountCode.code}
          {discountCode.validUntil && (
            <span className="ms-2">({t('validUntil')} {discountCode.validUntil})</span>
          )}
        </p>
      )}
      {internalLink ? (
        <div className="mt-3">
          <span className="btn btn-outline-light">
            Více informací →
          </span>
        </div>
      ) : (
        link && (
          <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            {link.text}
          </a>
        )
      )}
    </div>
  );

  return (
    <div className="col-md-6 mb-4">
      {internalLink ? (
        <Link 
          to="" 
          onClick={(e) => { 
            e.preventDefault(); 
            navigateWithLanguage(internalLink);
          }} 
          className="text-decoration-none"
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