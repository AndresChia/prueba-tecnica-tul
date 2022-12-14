export interface Menu {
  id?: string;
  key: string;
  icon?: string;
  title: string;
  route: string;
  translate?: boolean;
  'exclude-country'?: Array<String>;
  subRoute?: Array<SubRoute>;
  children: Array<Menu>;
}

export interface SubRoute {
  id: string;
  title: string;
  key?: string;
  route: string;
}

export const mockMenu: Array<Menu> = [
  {
    key: 'general.order',
    icon: 'shopping-cart',
    title: 'orders',
    route: '/general/orders',
    children: [
      {
        id: 'G-OR-ZRR9W',
        key: 'general.order.all',
        title: 'listOrders',
        route: '/general/orders/list-orders',
        children: [],
      },
      {
        id: 'G-PA-UBRWN',
        key: 'general.order.payments',
        title: 'payments',
        route: '/general/orders/payments',
        children: [],
      },
      {
        id: 'G-PS-G28C8TYJ',
        key: 'general.orders.payment-settings',
        title: 'paymentSettings',
        route: '/general/orders/payment-settings',
        children: [
          {
            id: 'G-PA-XAMA7',
            key: 'general.orders.payment-settings.payment-methods',
            title: 'paymentMethods',
            route: '/general/orders/payment-settings/payment-methods',
            subRoute: [
              {
                id: 'G-BA-PWB8U',
                title: 'banks',
                route: '/general/orders/payment-settings/payment-methods/banks',
              },
              {
                id: 'G-OP-63RRN',
                title: 'ordersPayment',
                route:
                  '/general/orders/payment-settings/payment-methods/orders-payment',
              },
              {
                id: 'G-SU-TW9J9',
                title: 'subsidiaries',
                route:
                  '/general/orders/payment-settings/payment-methods/subsidiaries',
              },
            ],
            children: [],
          },
          {
            id: 'G-TA-S7VC3',
            key: 'general.orders.payment-settings.taxe',
            title: 'taxes',
            route: '/general/orders/payment-settings/taxes',
            children: [],
          },
          {
            id: 'G-IIF-Q9329',
            key: 'general.orders.payment-settings.iva-in-freight',
            title: 'ivaInFreight',
            route: '/general/orders/payment-settings/iva-in-freight',
            children: [],
          },
        ],
      },
      {
        id: 'G-CR-ASG3KXMX',
        key: 'general.orders.cancellation-reason',
        title: 'reasonsForCancellation',
        route: '/general/orders/cancellation-reason',
        children: [
          {
            id: 'G-OCBC-XNE43',
            key: 'general.orders.cancellation-reason.order-cancellation-by-customer',
            title: 'orderCancellationByCustomer',
            route:
              '/general/orders/cancellation-reason/order-cancellation-by-customer',
            children: [],
          },
          {
            id: 'G-OC-6NSZ5',
            key: 'general.orders.cancellation-reason.order-cancellations',
            title: 'orderCancellations',
            route: '/general/orders/cancellation-reason/order-cancellations',
            children: [],
          },
        ],
      },
    ],
  },
  {
    key: 'general.product',
    icon: 'ant-design',
    title: 'products',
    route: '/general/products',
    children: [
      {
        id: 'G-PR-Q9X4L',
        key: 'general.product.all',
        title: 'listProducts',
        route: '/general/products/list-products',
        subRoute: [
          {
            id: 'G-LPI-Q9X4M',
            key: 'general.product.all.list-products-store',
            title: 'productsStore',
            route: '/general/products/list-products/list-products-store',
          },
          {
            id: 'G-LPI-Q9X4N',
            key: 'general.product.all.list-products-allied',
            title: 'productsAllied',
            route: '/general/products/list-products/list-products-allied',
          },
        ],
        children: [],
      },
      {
        id: 'G-PP-RDT3F',
        key: 'general.product.product-planner',
        title: 'productPlanner',
        route: '/general/products/product-planner',
        children: [],
      },
      {
        id: 'G-KP-EKQUS',
        key: 'general.product.kit',
        title: 'kitProducts',
        route: '/general/products/kit-products',
        children: [],
      },
      {
        id: 'G-GP-76BXH',
        key: 'general.product.group',
        title: 'groupProducts',
        route: '/general/products/group-products',
        children: [],
      },
      {
        id: 'G-CT-E58CP',
        key: 'general.product.category',
        title: 'categories',
        route: '/general/products/categories',
        children: [],
      },
      {
        id: 'G-CG-GO7CA',
        key: 'general.product.category-goal',
        title: 'categoriesGoal',
        route: '/general/products/categories-goal',
        children: [],
      },
      {
        id: 'G-BR-SJFBB',
        key: 'general.product.brand',
        title: 'brands',
        route: '/general/products/brands',
        children: [],
      },
      {
        key: 'general.product.prices',
        title: 'prices',
        route: '/general/products/prices',
        children: [
          {
            id: 'G-MM-ZEKCW',
            key: 'general.product.prices.markups-markdowns',
            title: 'markups/markdowns',
            route: '/general/products/prices/markups-markdowns',
            children: [],
          },
          {
            key: 'general.product.prices.scrapy',
            title: 'scrapy',
            route: '/general/products/prices/scrapy',
            children: [
              {
                id: 'G-SC-GQ336',
                key: 'general.product.prices.scrapy.scraping',
                title: 'scraping',
                route: '/general/products/prices/scrapy/scraping',
                children: [],
              },
              {
                id: 'G-SD-EZNL4',
                key: 'general.product.prices.scrapy.scraping-doms',
                title: 'scrapingDoms',
                route: '/general/products/prices/scrapy/scraping-doms',
                children: [],
              },
            ],
          },
          {
            id: 'G-SPL-MKZTC',
            key: 'general.product.prices.sale-prices-lowers',
            title: 'salePricesLowers',
            route: '/general/products/prices/sale-prices-lowers',
            children: [],
          },
          {
            id: 'G-PPS-JFGST',
            key: 'general.product.prices.scan-qr-invoices',
            title: 'scanQrInvoices',
            route: '/general/products/prices/scan-qr-invoices',
            children: [],
          },
        ],
      },
      {
        id: 'G-CR-Q94MC',
        key: 'general.product.clusters',
        title: 'clusters',
        route: '/general/products/clusters',
        children: [],
      },
      {
        key: 'general.product.purchases',
        title: 'purchases',
        route: '/general/products/purchases',
        children: [
          {
            id: 'G-RE-CVMLM',
            key: 'general.product.purchases.recommendations',
            title: 'recommendations',
            route: '/general/products/purchases/recommendations',
            children: [],
          },
        ],
      },
      {
        key: 'general.product.purchase-restrictions',
        title: 'purchaseRestrictions',
        route: '/general/products/purchase-restrictions',
        children: [
          {
            id: 'G-PR-V79WJ',
            key: 'general.product.purchase-restrictions.by-method-of-payments',
            title: 'byMethodOfPayments',
            route:
              '/general/products/purchase-restrictions/by-method-of-payments',
            children: [],
          },
          {
            id: 'G-CR-JZ2C4',
            key: 'general.product.purchase-restrictions.cluster-restriction',
            title: 'clusterRestriction',
            route:
              '/general/products/purchase-restrictions/cluster-restriction',
            children: [],
          },
          {
            id: 'G-TR-MM55T',
            key: 'general.product.purchase-restrictions.tul-credits-restrictions',
            title: 'tulCreditsRestrictions',
            route:
              '/general/products/purchase-restrictions/tul-credits-restrictions',
            children: [],
          },
          {
            id: 'G-TR-TBFQU',
            key: 'general.product.purchase-restrictions.promotional-product-delivery',
            title: 'promotionalProductDelivery',
            route:
              '/general/products/purchase-restrictions/promotional-product-delivery',
            children: [],
          },
        ],
      },
      {
        key: 'general.product.builder-solutions',
        title: 'builderSolutions',
        route: '/general/products/builder-solutions',
        children: [
          {
            id: 'G-BS-4C496',
            key: 'general.product.builder-solutions.solutions',
            title: 'solutions',
            route: '/general/products/builder-solutions/solutions',
            children: [],
          },
        ],
      },
    ],
  },
  {
    key: 'general.client',
    icon: 'usergroup-add',
    title: 'clients',
    route: '/general/clients',
    children: [
      {
        id: 'G-LC-35V3E',
        key: 'general.client.all',
        title: 'listClients',
        route: '/general/clients/list-clients',
        children: [],
      },
      {
        id: 'G-LA-PUSHM',
        key: 'general.client.list-addresses',
        title: 'listAddresses',
        route: '/general/clients/list-addresses',
        children: [],
      },
      {
        id: 'G-RT-JRGT5',
        key: 'general.client.retentions',
        title: 'retentions',
        route: '/general/clients/retentions',
        children: [],
      },
      {
        id: 'G-CA-MXR76',
        key: 'general.client.shop_cart',
        title: 'carts',
        route: '/general/clients/carts',
        children: [],
      },
      {
        key: 'general.client.ironmongeries',
        title: 'ironmongeries',
        route: '/general/clients/ironmongeries',
        children: [
          {
            id: 'G-IR-GCNN2',
            key: 'general.client.ironmongeries.ironmongeries',
            title: 'ironmongeries',
            route: '/general/clients/ironmongeries/ironmongeries',
            children: [],
          },
          {
            id: 'G-RI-JJ63T',
            key: 'general.client.ironmongeries.referenced-ironmongeries',
            title: 'referencedIronmongeries',
            route: '/general/clients/ironmongeries/referenced-ironmongeries',
            children: [],
          },
          {
            id: 'G-AS-MJZ2K',
            key: 'general.client.ironmongeries.additional-services',
            title: 'additionalServices',
            route: '/general/clients/ironmongeries/additional-services',
            children: [],
          },
        ],
      },
      {
        key: 'general.client.segmentation',
        title: 'segmentation',
        route: '/general/clients/segmentation',
        children: [
          {
            id: 'G-OB-LR2PU',
            key: 'general.client.segmentation.onboarding',
            title: 'onboarding',
            route: '/general/clients/segmentation/onboarding',
            children: [],
          },
          {
            id: 'G-CT-CN5UP',
            key: 'general.client.segmentation.categories',
            title: 'categoriesB2B',
            route: '/general/clients/segmentation/categories',
            children: [],
          },
          {
            id: 'G-RO-RRWNK',
            key: 'general.client.segmentation.roles',
            title: 'rolesB2C',
            route: '/general/clients/segmentation/roles',
            children: [],
          },
          {
            id: 'G-FOT-HFOAT',
            key: 'general.client.segmentation.how-find-out-tul',
            title: 'howFindOutTul',
            route: '/general/clients/segmentation/how-find-out-tul',
            children: [],
          },
        ],
      },
      {
        id: 'G-CL-ZYDKY',
        key: 'general.client.cluster',
        title: 'clusters',
        route: '/general/clients/clusters',
        children: [],
      },
      {
        id: 'G-LE-8CY82',
        key: 'general.client.level',
        title: 'levels',
        route: '/general/clients/levels',
        children: [],
      },
      {
        id: 'G-TC-YNT3E',
        key: 'general.client.tulCredits',
        title: 'tulCredits',
        route: '/general/clients/tul-credits',
        children: [],
      },
      {
        key: 'general.client.soat',
        title: 'soat',
        route: '/general/clients/soat',
        children: [
          {
            id: 'G-FW-X6CX2',
            key: 'general.client.soat.faqs-wikichamo',
            title: 'faqsWikichamo',
            route: '/general/clients/soat/faqs-wikichamo',
            children: [],
          },
          {
            id: 'G-HS-HC94B',
            key: 'general.client.soat.hardware-store',
            title: 'hardwareStore',
            route: '/general/clients/soat/hardware-store',
            children: [],
          },
          {
            id: 'G-TC-BQFT5',
            key: 'general.client.soat.t-and-c',
            title: 'termsAndConditions',
            route: '/general/clients/soat/t-and-c',
            children: [],
          },
          {
            id: 'G-OR-DFZEB',
            key: 'general.client.soat.orders',
            title: 'orders',
            route: '/general/clients/soat/orders',
            children: [],
          },
          {
            id: 'G-CO-USYHS',
            key: 'general.client.soat.commissions',
            title: 'commissions',
            route: '/general/clients/soat/commissions',
            children: [],
          },
          {
            id: 'G-LE-K45PF',
            key: 'general.client.soat.leads',
            title: 'leads',
            route: '/general/clients/soat/leads',
            children: [],
          },
          {
            id: 'G-PA-R7PZ8',
            key: 'general.client.soat.personal-data-authorization',
            title: 'personalDataAuthorization',
            route: '/general/clients/soat/personal-data-authorization',
            children: [],
          },
          {
            id: 'G-PR-S62GN',
            key: 'general.client.soat.promotions',
            title: 'promotions',
            route: '/general/clients/soat/promotions',
            children: [],
          },
          {
            id: 'G-BU-637CG',
            key: 'general.client.soat.businesses',
            title: 'businesses',
            route: '/general/clients/soat/businesses',
            children: [],
          },
        ],
      },
      {
        key: 'general.client.searches',
        title: 'searches',
        route: '/general/clients/searches',
        children: [
          {
            id: 'G-KW-VGZN4',
            key: 'general.client.searches.key-words',
            title: 'keyWords',
            route: '/general/clients/searches/key-words',
            children: [],
          },
          {
            id: 'G-SE-QTCGE',
            key: 'general.client.searches.searches',
            title: 'searches',
            route: '/general/clients/searches/searches',
            children: [],
          },
          {
            id: 'G-SU-GY6KY',
            key: 'general.client.searches.suggestions',
            title: 'suggestions',
            route: '/general/clients/searches/suggestions',
            children: [],
          },
        ],
      },
      {
        id: 'G-CA-MXR76',
        key: 'general.client.deletion-data',
        title: 'deletionData',
        route: '/general/clients/deletion-data',
        children: [],
      },
      {
        id: 'G-CS-U5YHL',
        key: 'general.client.suggestions',
        title: 'suggestions',
        route: '/general/clients/suggestions',
        children: [],
      },
      {
        key: 'general.client.ubits',
        title: 'ubits',
        route: '/general/clients/ubits',
        children: [
          {
            id: 'G-UC-DTK9W',
            key: 'general.client.ubits.clients',
            title: 'clients',
            route: '/general/clients/ubits/clients',
            children: [],
          },
          {
            id: 'G-UT-8FBLM',
            key: 'general.client.ubits.terms-and-conditions',
            title: 'termsAndConditions',
            route: '/general/clients/ubits/terms-and-conditions',
            children: [],
          },
          {
            id: 'G-UD-82GQE',
            key: 'general.client.ubits.data-treatment',
            title: 'dataTreatment',
            route: '/general/clients/ubits/data-treatment',
            children: [],
          },
        ],
      },
    ],
  },
  {
    key: 'general.fintech',
    icon: 'sliders',
    title: 'fintech',
    route: '/general/fintech',
    children: [
      {
        id: 'G-PL-J4GWY',
        key: 'general.fintech.payment-link',
        title: 'paymentLink',
        route: '/general/fintech/payment-link',
        children: [],
      },
      {
        key: 'general.fintech.cupoTul',
        title: 'cupoTul',
        route: '/general/fintech/cupo-tul',
        children: [
          {
            id: 'G-BV-TS59U',
            key: 'general.fintech.cupoTul.banking-vendor',
            title: 'bankingVendors',
            route: '/general/fintech/cupo-tul/banking-vendor',
            children: [],
          },
          {
            id: 'G-OF-YCXAV',
            key: 'general.fintech.cupoTul.onboardingFlow',
            title: 'onboardingFlow',
            route: '/general/fintech/cupo-tul/onboarding-flow',
            children: [],
          },
          {
            id: 'G-RE-U43TC',
            key: 'general.fintech.cupoTul.requests',
            title: 'requests',
            route: '/general/fintech/cupo-tul/requests',
            children: [],
          },
          {
            id: 'G-VV-Y9MBW',
            key: 'general.fintech.cupoTul.verification-vendors',
            title: 'verificationVendors',
            route: '/general/fintech/cupo-tul/verification-vendors',
            children: [],
          },
          {
            key: 'general.fintech.cupoTul.terms-and-conditions',
            title: 'termsAndConditions',
            route: '/general/fintech/cupo-tul/terms-and-conditions',
            children: [
              {
                id: 'G-TC-7YLD3',
                key: 'general.fintech.cupoTul.terms-and-conditions.credit-agreement',
                title: 'creditAgreement',
                route:
                  '/general/fintech/cupo-tul/terms-and-conditions/credit-agreement',
                children: [],
              },
              {
                id: 'G-DA-U9QPA',
                key: 'general.fintech.cupoTul.terms-and-conditions.data-authorization',
                title: 'personalDataAuthorization',
                route:
                  '/general/fintech/cupo-tul/terms-and-conditions/data-authorization',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'G-AG-W3HHS',
        key: 'general.fintech.agreements',
        title: 'agreements',
        route: '/general/fintech/agreements',
        children: [],
      },
      {
        key: 'general.fintech.techo-tul',
        title: 'techoTul',
        route: '/general/fintech/techo-tul',
        children: [
          {
            id: 'G-TT-BW75C',
            key: 'general.fintech.techo-tul.register-b2b',
            title: 'registerB2b',
            route: '/general/fintech/techo-tul/register-b2b',
            children: [],
          },
          {
            id: 'G-TT-CHW5F',
            key: 'general.fintech.techo-tul.terms-and-conditions',
            title: 'termsAndConditions',
            route: '/general/fintech/techo-tul/terms-and-conditions',
            children: [],
          },
        ],
      },
      {
        key: 'general.fintech.tul-payments',
        title: 'tulPayments',
        route: '/general/fintech/tul-payments',
        children: [
          {
            id: 'G-FE-WYJJ2',
            key: 'general.fintech.tul-payments.fees',
            title: 'fees',
            route: '/general/fintech/tul-payments/fees',
            children: [],
          },
          {
            id: 'G-TP-HFN8Y',
            key: 'general.fintech.tul-payments.faqs',
            title: 'frequentQuestions',
            route: '/general/fintech/tul-payments/faqs',
            children: [],
          },
          {
            key: 'general.fintech.tul-payments.debit-card',
            title: 'debitCard',
            route: '/general/fintech/tul-payments/debit-card',
            children: [
              {
                id: 'G-RE-MZB8D',
                key: 'general.fintech.tul-payments.debit-card.requests',
                title: 'requests',
                route: '/general/fintech/tul-payments/debit-card/requests',
                children: [],
              },
              {
                id: 'G-TC-39KV6',
                key: 'general.fintech.tul-payments.debit-card.terms-and-conditions',
                title: 'termsAndConditions',
                route:
                  '/general/fintech/tul-payments/debit-card/terms-and-conditions',
                children: [],
              },
            ],
          },
          {
            id: 'G-RE-47FNS',
            key: 'general.fintech.tul-payments.requests',
            title: 'requests',
            route: '/general/fintech/tul-payments/requests',
            children: [],
          },
          {
            key: 'general.fintech.tul-payments.dataphone',
            title: 'dataphone',
            route: '/general/fintech/tul-payments/dataphone',
            children: [
              {
                id: 'G-RE-QD3L7',
                key: 'general.fintech.tul-payments.dataphone.requests',
                title: 'requests',
                route: '/general/fintech/tul-payments/dataphone/requests',
                children: [],
              },
              {
                id: 'G-TC-F5ATS',
                key: 'general.fintech.tul-payments.dataphone.terms-and-conditions-acquisition',
                title: 'termsAndConditionsAcquisition',
                route:
                  '/general/fintech/tul-payments/dataphone/terms-and-conditions-acquisition',
                children: [],
              },
            ],
          },
          {
            key: 'general.fintech.tul-payments.payments',
            title: 'payments',
            route: '/general/fintech/tul-payments/payments',
            children: [
              {
                id: 'G-CM-FFB2U',
                key: 'general.fintech.tul-payments.payments.cash-in-methods',
                title: 'cashInMethods',
                route: '/general/fintech/tul-payments/payments/cash-in-methods',
                children: [],
              },
              {
                id: 'G-CO-69KUR',
                key: 'general.fintech.tul-payments.payments.cash-out-methods',
                title: 'cashOutMethods',
                route:
                  '/general/fintech/tul-payments/payments/cash-out-methods',
                children: [],
              },
            ],
          },
          {
            key: 'general.fintech.tul-payments.terms-and-conditions',
            title: 'termsAndConditions',
            route: '/general/fintech/tul-payments/terms-and-conditions',
            children: [
              {
                id: 'G-TC-3GKEC',
                key: 'general.fintech.tul-payments.terms-and-conditions.tul-pagos-terms',
                title: 'termsAndConditionsTulPayments',
                route:
                  '/general/fintech/tul-payments/terms-and-conditions/tul-pagos-terms',
                children: [],
              },
              {
                id: 'G-TC-FD397',
                key: 'general.fintech.tul-payments.terms-and-conditions.provider-terms',
                title: 'termsAndConditionsProvider',
                route:
                  '/general/fintech/tul-payments/terms-and-conditions/provider-terms',
                children: [],
              },
              {
                id: 'G-TC-4UMAT',
                key: 'general.fintech.tul-payments.terms-and-conditions.provider-linked-terms',
                title: 'termsAndConditionsLinkedProvider',
                route:
                  '/general/fintech/tul-payments/terms-and-conditions/provider-linked-terms',
                children: [],
              },
              {
                id: 'G-TC-NAD4D',
                key: 'general.fintech.tul-payments.terms-and-conditions.provider-share-information-terms',
                title: 'termsAndConditionsShareInfoProvider',
                route:
                  '/general/fintech/tul-payments/terms-and-conditions/provider-share-information-terms',
                children: [],
              },
              {
                id: 'G-TC-LX3TP',
                key: 'general.fintech.tul-payments.terms-and-conditions.provider-third-party-terms',
                title: 'termsAndConditionsShareThirdPartiesInfoProvider',
                route:
                  '/general/fintech/tul-payments/terms-and-conditions/provider-third-party-terms',
                children: [],
              },
            ],
          },
        ],
      },
      {
        key: 'general.fintech.additional-services',
        title: 'additionalServices',
        route: '/general/fintech/additional-services',
        children: [
          {
            id: 'G-CT-BLPP3',
            key: 'general.fintech.additional-services.client-features',
            title: 'profilesNoMonolith',
            route: '/general/fintech/additional-services/client-features',
            children: [],
          },
          {
            id: 'G-AD-EDW2B',
            key: 'general.fintech.additional-services.profiles',
            title: 'profiles',
            route: '/general/fintech/additional-services/profiles',
            children: [],
          },
        ],
      },
      {
        id: 'G-CL-SBF82',
        key: 'general.fintech.external-client-types',
        title: 'externalClientTypes',
        route: '/general/fintech/external-client-types',
        children: [],
      },
      {
        key: 'general.fintech.configurable-items-ui',
        title: 'configurableItemsUi',
        route: '/general/fintech/configurable-items-ui',
        children: [
          {
            id: 'G-UI-T58PX',
            key: 'general.fintech.configurable-items-ui.ui-items',
            title: 'uiItems',
            route: '/general/fintech/configurable-items-ui/ui-items',
            children: [],
          },
        ],
      },
    ],
  },
  {
    key: 'general.partners',
    icon: 'shopping',
    title: 'partners',
    route: '/general/partners',
    children: [
      {
        id: 'G-SU-N3NR6',
        key: 'general.partners.suppliers',
        title: 'suppliers',
        route: '/general/partners/suppliers',
        children: [],
      },
    ],
  },
  {
    key: 'general.sale-force',
    icon: 'stock',
    title: 'saleForce',
    route: '/general/sale-force',
    'exclude-country': ['CO', 'MX', 'BR', 'EC'],
    children: [
      {
        id: 'G-ST-GG7PM',
        key: 'general.sale-force.moto-tul',
        title: 'motoTul',
        route: '/general/sale-force/moto-tul',
        children: [],
      },
      {
        id: 'G-CP-CDBA2',
        key: 'general.sale-force.potential-clients',
        title: 'clientesPotenciales',
        route: '/general/sale-force/potential-clients',
        children: [],
      },
    ],
  },
  {
    key: 'general.logistic',
    icon: 'car',
    title: 'logistics',
    route: '/general/logistics',
    children: [
      {
        id: 'G-WA-KZ5VZ',
        key: 'general.logistic.warehouse',
        title: 'warehouses',
        route: '/general/logistics/warehouses',
        children: [],
      },
      {
        id: 'G-SM-5RQ2G',
        key: 'general.logistic.shipping_method',
        title: 'shippingMethods',
        route: '/general/logistics/shipping-methods',
        children: [],
      },
      {
        key: 'general.logistic.dispatch',
        title: 'dispatches',
        route: '/general/logistics/dispatches',
        children: [
          {
            id: 'G-SH-N34TL',
            key: 'general.logistic.dispatch.shipments',
            title: 'shipments',
            route: '/general/logistics/dispatches/shipments',
            children: [],
          },
          {
            id: 'G-SZ-8PD73',
            key: 'general.logistic.dispatch.shippingZones',
            title: 'shippingZones',
            route: '/general/logistics/dispatches/shipping-zones',
            children: [],
          },
          {
            id: 'G-SX-PBDED',
            key: 'general.logistic.dispatch.routes',
            title: 'routes',
            route: '/general/logistics/dispatches/routes',
            children: [
              {
                id: 'G-MBC-3X2MP',
                key: 'general.logistic.dispatch.routes.drivers',
                title: 'drivers',
                route: '/general/logistics/dispatches/routes/drivers',
                children: [],
              },
              {
                id: 'G-MBC-3X2NP',
                key: 'general.logistic.dispatch.routes.truckTypes',
                title: 'truckTypes',
                route: '/general/logistics/dispatches/routes/truck-types',
                children: [],
              },
              {
                id: 'G-MBC-3X2OP',
                key: 'general.logistic.dispatch.routes.trucks',
                title: 'trucks',
                route: '/general/logistics/dispatches/routes/trucks',
                children: [],
              },
              {
                id: 'G-NHC-9X2FL',
                key: 'general.logistic.dispatch.routes.routes',
                title: 'routes',
                route: '/general/logistics/dispatches/routes/routes',
                children: [],
              },
              {
                id: 'G-DFT-8XCTD',
                key: 'general.logistic.dispatch.routes.assistants',
                title: 'assistants',
                route: '/general/logistics/dispatches/routes/assistants',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'G-IN-6T49V',
        key: 'general.logistic.income_netsuite',
        title: 'incomeNetsuite',
        route: '/general/logistics/income-netsuite',
        children: [],
      },
    ],
  },
  {
    key: 'general.marketing',
    icon: 'qrcode',
    title: 'marketing',
    route: '/general/marketing',
    children: [
      {
        key: 'general.marketing.banners',
        title: 'banners',
        route: '/general/marketing/banners',
        children: [
          {
            id: 'G-BH-QU78V',
            key: 'general.marketing.banners.banners-home',
            title: 'bannersHome',
            route: '/general/marketing/banners/banners-home',
            children: [],
          },
          {
            id: 'G-BC-RGLBU',
            key: 'general.marketing.banners.categories',
            title: 'bannersCategories',
            route: '/general/marketing/banners/categories',
            children: [],
          },
          {
            key: 'general.marketing.banners.brands',
            title: 'bannersBrands',
            route: '/general/marketing/banners/brands',
            children: [
              {
                id: 'G-BBH-KLANQ',
                key: 'general.marketing.banners.brands.home',
                title: 'bannersHome',
                route: '/general/marketing/banners/brands/home',
                children: [],
              },
              {
                id: 'G-BBHD-N2JQ8',
                key: 'general.marketing.banners.brands.details-brands',
                title: 'brandsDetails',
                route: '/general/marketing/banners/brands/details',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 'G-NF-86AXC',
        key: 'general.marketing.new-features',
        title: 'newFeatures',
        route: '/general/marketing/new-features',
        children: [],
      },
      {
        id: 'G-MZ-F8XXK',
        key: 'general.marketing.zones',
        title: 'zones',
        route: '/general/marketing/zones',
        children: [],
      },
      {
        id: 'G-PM-EDM4A',
        key: 'general.marketing.promotions',
        title: 'promotions',
        route: '/general/marketing/promotions',
        children: [],
        subRoute: [
          {
            id: 'G-PM-8KOH1',
            title: 'tags',
            route: '/general/marketing/promotions/tags',
          },
          {
            id: 'G-PM-RBJ35',
            title: 'tulCredits',
            route: '/general/marketing/promotions/tul-credits',
          },
          {
            id: 'G-PM-DCIL9',
            title: 'shipping',
            route: '/general/marketing/promotions/shipping',
          },
          {
            id: 'G-PM-6IN77',
            title: 'regular',
            route: '/general/marketing/promotions/regular',
          },
          {
            id: 'G-PM-9L8KP',
            title: 'volume',
            route: '/general/marketing/promotions/volume',
          },
          {
            id: 'G-PM-GYFWW',
            title: 'more-for-less',
            route: '/general/marketing/promotions/more-for-less',
          },
          {
            id: 'G-PM-QX2TX',
            title: 'buy-together',
            route: '/general/marketing/promotions/buy-together',
          },
          {
            id: 'G-PM-8FS4D',
            title: 'live-tul-credits',
            route: '/general/marketing/promotions/live-tul-credits',
          },
          {
            id: 'G-PM-PW7WH',
            title: 'conditional-tul-credits',
            route: '/general/marketing/promotions/conditional-tul-credits',
          },
        ],
      },
    ],
  },
  {
    key: 'general.accounting',
    icon: 'user',
    title: 'accounting',
    route: '/general/accounting',
    children: [
      {
        id: 'G-IN-DQW73',
        key: 'general.accounting.invoicing',
        title: 'invoicing',
        route: '/general/accounting/invoicing',
        children: [],
      },
      {
        id: 'G-BR-T4DXZ',
        key: 'general.accounting.billing-resolution',
        title: 'billingResolution',
        route: '/general/accounting/billing-resolution',
        children: [],
      },
      {
        id: 'G-RG-PTUCG',
        key: 'general.accounting.remission-guides',
        title: 'remissionGuides',
        route: '/general/accounting/remission-guides',
        children: [],
      },
      {
        id: 'G-PD-2XDAX',
        key: 'general.accounting.portfolio-debt',
        title: 'portfolio',
        route: '/general/accounting/portfolio-debt',
        children: [],
      },
    ],
  },
  {
    key: 'general.income',
    title: 'income',
    icon: 'stock',
    route: '/general/income',
    children: [
      {
        id: 'G-PO-XYUUC',
        key: 'general.income.orders',
        title: 'purchaseOrders',
        route: '/general/income/purchase-orders',
        children: [],
      },
    ],
  },
  {
    key: 'general.user',
    icon: 'user',
    title: 'users',
    route: '/general/users',
    children: [
      {
        id: 'G-UL-HX55B',
        key: 'general.user.user',
        title: 'usersList',
        route: '/general/users/users-list',
        children: [],
      },
      {
        id: 'G-HU-SH38E',
        key: 'general.user.hunter',
        title: 'hunters',
        route: '/general/users/hunters',
        children: [],
      },
      {
        id: 'G-US-JFWLD',
        key: 'general.user.user-support',
        title: 'userSupport',
        route: '/general/users/user-support',
        children: [],
      },
      {
        id: 'G-RO-G4KT8',
        key: 'general.user.role',
        title: 'roles',
        route: '/general/users/roles',
        children: [],
      },
    ],
  },
  {
    key: 'general.setting',
    icon: 'ant-design',
    title: 'settings',
    route: '/general/settings',
    children: [
      {
        key: 'general.setting.security-timeout',
        title: 'securityTimeout',
        route: '/general/settings/security-timeout',
        children: [],
      },
      {
        id: 'G-CA-B5DCN',
        key: 'general.settings.collection-accounts',
        title: 'collectionAccounts',
        route: '/general/settings/collection-accounts',
        children: [],
      },
      {
        key: 'general.setting.location',
        title: 'locations',
        route: '/general/settings/locations',
        children: [
          {
            id: 'G-DE-HQSD5',
            key: 'general.setting.location.department',
            title: 'departments',
            route: '/general/settings/locations/departments',
            translate: true,
            children: [],
          },
          {
            id: 'G-CI-8JAY6',
            key: 'general.setting.location.city',
            title: 'cities',
            route: '/general/settings/locations/cities',
            children: [],
          },
          {
            id: 'G-LO-C3GH6',
            key: 'general.setting.location.location',
            title: 'locations',
            route: '/general/settings/locations/locations',
            translate: true,
            children: [],
          },
          {
            id: 'G-NE-BY242',
            key: 'general.setting.location.neighborhood',
            title: 'neighborhoods',
            route: '/general/settings/locations/neighborhoods',
            translate: true,
            children: [],
          },
          {
            key: 'general.setting.location.zone',
            title: 'zones',
            route: '/general/settings/locations/zones',
            children: [
              {
                id: 'G-ZO-LWRA3',
                key: 'general.setting.location.zone.zone',
                title: 'zones',
                route: '/general/settings/locations/zones/zones',
                children: [],
              },
              {
                id: 'G-ZM-HUJMK',
                key: 'general.setting.location.zone.zonemap',
                title: 'zoneMap',
                route: '/general/settings/locations/zones/zonemap',
                children: [],
              },
            ],
          },
        ],
      },
      {
        key: 'general.setting.netsuite',
        title: 'netsuite',
        route: '/general/settings/netsuite',
        children: [
          {
            id: 'G-WI-A3PA2',
            key: 'general.setting.netsuite.warehouse-identifier',
            title: 'warehouseIdentifier',
            route: '/general/settings/netsuite/warehouse-identifier',
            children: [],
          },
        ],
      },
      {
        key: 'general.setting.cause',
        title: 'cause',
        route: '/general/settings/cause',
        children: [
          {
            id: 'G-RR-ZZAS3',
            key: 'general.setting.cause.rejection-reasons-partial',
            title: 'rejectionReasonsPartial',
            route: '/general/settings/cause/rejection-reasons-partial',
            children: [],
          },
          {
            id: 'G-RR-ZXAS3',
            key: 'general.setting.cause.rejection-reasons-total',
            title: 'rejectionReasonsTotal',
            route: '/general/settings/cause/rejection-reasons-total',
            children: [],
          },
          {
            id: 'G-PC-IRM22',
            key: 'general.setting.cause.partial-consignment-reasons',
            title: 'partialConsignmentReasons',
            route: '/general/settings/cause/partial-consignment-reasons',
            children: [],
          },
          {
            id: 'G-RNA-MMCS2',
            key: 'general.setting.cause.reasons-of-novelty-audit',
            title: 'reasonOfNoveltyAudit',
            route: '/general/settings/cause/reason-of-novelty-audit',
            children: [],
          },
          {
            id: 'G-RN-LIM22',
            key: 'general.setting.cause.reasons-novelty-of-load',
            title: 'reasonsNoveltyOfLoad',
            route: '/general/settings/cause/reasons-novelty-of-load',
            children: [],
          },
          {
            id: 'G-RNC-QUUOR',
            key: 'general.setting.cause.reasons-for-novelty-in-counting',
            title: 'reasonsForNoveltyInCounting',
            route: '/general/settings/cause/reasons-for-novelty-in-counting',
            children: [],
          },
        ],
      },
      {
        id: 'G-LT-525EQ',
        key: 'general.setting.license-types',
        title: 'licenseTypes',
        route: '/general/settings/license-types',
        children: [],
      },
      {
        id: 'G-FA-AHEMF',
        key: 'general.setting.faqs',
        title: 'faqs',
        route: '/general/settings/faqs',
        children: [],
      },
    ],
  },
  {
    key: 'general.apps',
    title: 'apps',
    icon: 'appstore-add',
    route: '/general/apps',
    children: [
      {
        key: 'general.apps.ferretero',
        title: 'ferretero',
        route: '/general/apps/ferretero',
        children: [
          {
            key: 'general.apps.ferretero.data-authorization',
            title: 'dataAuthorization',
            route: '/general/apps/ferretero/data-authorization',
            children: [
              {
                id: 'G-NU-ZU6G8',
                key: 'general.apps.ferretero.data-authorization.new-users',
                title: 'newUsers',
                route: '/general/apps/ferretero/data-authorization/new-users',
                children: [],
              },
              {
                id: 'G-OU-QNDBL',
                key: 'general.apps.ferretero.data-authorization.old-users',
                title: 'oldUsers',
                route: '/general/apps/ferretero/data-authorization/old-users',
                children: [],
              },
            ],
          },
          {
            id: 'G-TC-4EWQB',
            key: 'general.apps.ferretero.terms-and-conditions',
            title: 'termsAndConditions',
            route: '/general/apps/ferretero/terms-and-conditions',
            children: [],
          },
          {
            id: 'G-PP-7KY7Z',
            key: 'general.apps.ferretero.privacy-policy',
            title: 'privacyPolicy',
            route: '/general/apps/ferretero/privacy-policy',
            children: [],
          },
        ],
      },
      {
        key: 'general.apps.backoffice',
        title: 'backoffice',
        route: '/general/apps/backoffice',
        children: [
          {
            key: 'general.apps.backoffice.data-authorization',
            title: 'dataAuthorization',
            route: '/general/apps/backoffice/data-authorization',
            children: [
              {
                id: 'G-NDA-HJEBP',
                key: 'general.apps.backoffice.data-authorization.new-data-authorization',
                title: 'newDataAuthorization',
                route:
                  '/general/apps/backoffice/data-authorization/new-data-authorization',
                children: [],
              },
              {
                id: 'G-ODA-UXDK6',
                key: 'general.apps.backoffice.data-authorization.old-data-authorization',
                title: 'oldDataAuthorization',
                route:
                  '/general/apps/backoffice/data-authorization/old-data-authorization',
                children: [],
              },
            ],
          },
        ],
      },
      {
        key: 'general.apps.module-builder',
        title: 'moduleBuilder',
        route: '/general/apps/module-builder',
        children: [
          {
            id: 'G-LC-dB9cX',
            key: 'general.apps.module-builder.landing-catalog',
            title: 'landingCatalog',
            route: '/general/apps/module-builder/landing-catalog',
            children: [],
          },
        ],
      },
    ],
  },
  {
    key: 'general.help',
    icon: 'question-circle',
    title: 'help',
    route: '/general/help',
    children: [
      {
        id: 'G-CW-SFGBJ',
        key: 'general.help.configurate-wikichamo',
        children: [],
        title: 'configurateWikichamo',
        route: '/general/help/configurate-wikichamo',
      },
    ],
  },
];
