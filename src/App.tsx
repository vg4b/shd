import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CouponList from './components/CouponList';
import InfoTile from './components/InfoTile';
import LanguagePicker from './components/LanguagePicker';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import { DiscountCoupon } from './types';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  const coupons: DiscountCoupon[] = [
    {
      description: t('coupons.webhostingNoLimit') + ':',
      code: 'WN252AY1ME'
    },
    {
      description: t('coupons.webhostingLowCost') + ':',
      code: 'WN251YEAKI'
    },
    {
      description: t('coupons.domains') + ':',
      code: 'DM251GO78Y'
    },
    {
      description: t('coupons.vps') + ':',
      code: 'VN251Y7PDS'
    },
    {
      description: t('coupons.website') + ':',
      code: 'WS251YW5UR'
    },
    {
      description: t('coupons.cd') + ':',
      code: 'CD251AST7P'
    },
    {
      description: t('coupons.mailhosting') + ':',
      code: 'MH251FGR9N'
    },
    {
      description: t('coupons.renewal') + ':',
      code: 'WTPXS2025',
      validUntil: '21.4.2025',
      additionalInfo: t('coupons.renewalInfo')
    }
  ];

  return (
    <div className="App">
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom d-flex justify-content-between align-items-center">
          <a href="/" className="d-flex align-items-center text-body-emphasis text-decoration-none">
            <svg
              width="32"
              height="32"
              className="me-2"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 17.9199L17 7.91992"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11.9199C9.10457 11.9199 10 11.0245 10 9.91992C10 8.81535 9.10457 7.91992 8 7.91992C6.89543 7.91992 6 8.81535 6 9.91992C6 11.0245 6.89543 11.9199 8 11.9199Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17.9199C17.1046 17.9199 18 17.0245 18 15.9199C18 14.8154 17.1046 13.9199 16 13.9199C14.8954 13.9199 14 14.8154 14 15.9199C14 17.0245 14.8954 17.9199 16 17.9199Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="fs-4">slevy-hosting-domeny.cz</span>
          </a>
          <LanguagePicker />
        </header>

        <div className="p-2 mb-4 bg-body-tertiary rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">
              {t('title')}
            </h1>
            <p className="col-md-8 fs-4">
              {t('subtitle')}
            </p>
            <CouponList coupons={coupons} />
            <div className="text-left">
              <a 
                href="https://vedos.cz/?ap=Lf2pCY" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-lg mt-4"
              >
                {t('cta')}
              </a>
            </div>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <InfoTile
            title={t('services.webhostingNoLimit.title')}
            content={t('services.webhostingNoLimit.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "WN252AY1ME",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://order.wedos.com/cs/webhosting/order.html?step=1&coupon_code=WN252AY1ME&variant=nolimit&ap=Lf2pCY",
              text: t('services.webhostingNoLimit.cta')
            }}
          />
          <InfoTile
            title={t('services.webhostingLowCost.title')}
            content={t('services.webhostingLowCost.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "WN251YEAKI",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://order.wedos.com/cs/webhosting/order.html?step=1&coupon_code=WN251YEAKI&variant=lowcost&ap=Lf2pCY",
              text: t('services.webhostingLowCost.cta')
            }}
          />
          <InfoTile
            title={t('services.domains.title')}
            content={t('services.domains.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "DM251GO78Y",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://www.vedos.cz/domeny/?ap=Lf2pCY",
              text: t('services.domains.cta')
            }}
          />
          <InfoTile
            title={t('services.vps.title')}
            content={t('services.vps.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "VN251Y7PDS",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://www.vedos.cz/vps-ssd/?ap=Lf2pCY",
              text: t('services.vps.cta')
            }}
          />
          <InfoTile
            title={t('services.website.title')}
            content={t('services.website.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "WS251YW5UR",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://www.vedos.cz/website-1-0/?ap=Lf2pCY",
              text: t('services.website.cta')
            }}
          />
          <InfoTile
            title={t('services.cd.title')}
            content={t('services.cd.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "CD251AST7P",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://www.vedos.cz/cd/?ap=Lf2pCY",
              text: t('services.cd.cta')
            }}
          />
          <InfoTile
            title={t('services.mailhosting.title')}
            content={t('services.mailhosting.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "MH251FGR9N",
              validUntil: "31.12.2025"
            }}
            link={{
              url: "https://www.vedos.cz/mailhosting/?ap=Lf2pCY",
              text: t('services.mailhosting.cta')
            }}
          />
          <InfoTile
            title={t('services.renewal.title')}
            content={t('services.renewal.content')}
            bgColor="#003484"
            textColor="light"
            discountCode={{
              code: "WTPXS2025",
              validUntil: "21.4.2025"
            }}
            link={{
              url: "https://www.vedos.cz/?ap=Lf2pCY",
              text: t('services.renewal.cta')
            }}
          />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
