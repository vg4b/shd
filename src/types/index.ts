export interface DiscountCoupon {
  description: string;
  code: string;
  validUntil?: string;
  additionalInfo?: string | {
    text: string;
    linkText: string;
    linkUrl: string;
  };
}

export interface CouponListProps {
  coupons: DiscountCoupon[];
} 