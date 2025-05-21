import React from 'react';
import { CouponListProps } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const CouponList: React.FC<CouponListProps> = ({ coupons }) => {
  const { t } = useLanguage();

  return (
    <ul className="list-group">
      {coupons.map((coupon, index) => (
        <li key={index} className="list-group-item">
          {coupon.description}{' '}
          <strong>{coupon.code}</strong>
          {coupon.validUntil && (
            <span className="text-muted"> ({t('validUntil')} {coupon.validUntil})</span>
          )}
          {coupon.additionalInfo && (
            <span className="text-muted"> {coupon.additionalInfo}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default CouponList; 