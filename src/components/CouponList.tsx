import React, { useState } from 'react';
import { CouponListProps } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const CouponList: React.FC<CouponListProps> = ({ coupons }) => {
  const { t } = useLanguage();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <ul className="list-group">
      {coupons.map((coupon, index) => (
        <li key={index} className="list-group-item">
          <div className="coupon-text">
            {coupon.description}{' '}
            <strong className="code-with-copy">
              {coupon.code}
              <button
                onClick={() => copyToClipboard(coupon.code, index)}
                className="copy-btn-inline"
                aria-label={`Copy ${coupon.code}`}
                title="Kopírovat kód"
              >
                {copiedIndex === index ? (
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                ) : (
                  <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                  </svg>
                )}
              </button>
            </strong>
            {coupon.validUntil && (
              <span className="text-muted"> ({t('validUntil')} {coupon.validUntil})</span>
            )}
            {coupon.additionalInfo && (
              <span className="text-muted">
                {' '}
                {typeof coupon.additionalInfo === 'string' ? (
                  coupon.additionalInfo
                ) : (
                  <>
                    {coupon.additionalInfo.text}{' '}
                    <a 
                      href={coupon.additionalInfo.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {coupon.additionalInfo.linkText}
                    </a>
                  </>
                )}
              </span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CouponList; 