export interface DiscountCoupon {
  description: string;
  code: string;
  validUntil?: string;
  additionalInfo?: string;
}

export interface CouponListProps {
  coupons: DiscountCoupon[];
} 