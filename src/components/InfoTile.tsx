import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface InfoTileProps {
  title: string;
  content: string;
  link?: {
    url: string;
    text: string;
  };
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
  bgColor = '#f8f9fa', 
  textColor = 'dark',
  discountCode 
}) => {
  const { t } = useLanguage();

  return (
    <div className="col-md-6 mb-4">
      <div 
        className={`info-tile h-100 p-5 rounded-3 text-${textColor}`}
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
        {link && (
          <a 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light"
          >
            {link.text}
          </a>
        )}
      </div>
    </div>
  );
};

export default InfoTile; 