import * as z from "zod"
import * as imports from "../zod-add-schema"
import { settings_qualify_type } from "@prisma/client"

export const settingsModel = z.object({
  id: z.number().int(),
  showGroupValuesOnAffReg: z.boolean(),
  showGroupsLanguages: z.string(),
  qrcode: z.boolean(),
  facebookshare: z.boolean(),
  webTitle: z.string(),
  webMail: z.string(),
  mail_server: z.string(),
  mail_replyTo: z.string(),
  mail_username: z.string(),
  mail_password: z.string(),
  fromName: z.string(),
  pending: z.number().int(),
  creative_iframe: z.number().int(),
  creative_mobile_leader: z.number().int(),
  creative_mobile_splash: z.number().int(),
  creative_email: z.number().int(),
  creative_html5: z.boolean(),
  deal_cpl: z.number().int(),
  deal_cpm: z.number().int(),
  deal_pnl: z.boolean(),
  deal_cpc: z.number().int(),
  deal_tier: z.number().int(),
  deal_revshare_spread: z.number().int(),
  deal_revshare: z.number().int(),
  export: z.number().int(),
  terms_link: z.string(),
  multi: z.number().int(),
  multi_languages: z.string(),
  sub_com: z.number().int(),
  show_deposit: z.number().int(),
  revenue_formula: z.string(),
  qualify_type: z.nativeEnum(settings_qualify_type),
  qualify_amount: z.number().int(),
  analyticsCode: z.string(),
  isNetwork: z.number().int(),
  reportsToHide: z.string(),
  showMiminumDepositOnAffAccount: z.number().int(),
  defaultTimeFrameForAffiliate: z.string(),
  defaultTimeFrameForAffiliateReports: z.string(),
  multiMerchantsPerTrader: z.boolean(),
  hideNetRevenueForNonRevDeals: z.boolean(),
  hideFTDamountForCPADeals: z.boolean(),
  SMTPSecure: z.string(),
  SMTPAuth: z.boolean(),
  mail_Port: z.number().int(),
  availablePayments: z.string(),
  availableQualifications: z.string(),
  autoRelateSubAffiliate: z.boolean(),
  dashBoardMainTitle: z.string(),
  showRealFtdToAff: z.boolean(),
  show_credit_as_default_for_new_affiliates: z.number().int().nullish(),
  showCreditForAM: z.boolean(),
  blockAffiliateLogin: z.boolean().nullish(),
  showAllCreativesToAffiliate: z.boolean(),
  showVolumeForAffiliate: z.boolean(),
  showAffiliateRiskForAffiliate: z.boolean(),
  newsletterCheckboxCaption: z.string(),
  affiliateNewsletterCheckboxValue: z.boolean(),
  utmtags: z.string(),
  showDCPAonAffiliateComStruc: z.boolean(),
  hideWithdrawalAmountForCPADeals: z.boolean(),
  hideBonusAmountForCPADeals: z.boolean(),
  hideDepositAmountForCPADeals: z.boolean(),
  hideTotalDepositForCPADeals: z.boolean(),
  showDealTypeHistoryToAM: z.boolean(),
  hideFrozenOnCPAdeals: z.boolean(),
  AllowDealChangesByManager: z.boolean(),
  autoRelateNewAffiliateToAllMerchants: z.number().int(),
  emailFooterImageURL: z.string(),
  emailHeaderImageURL: z.string(),
  rowsNumberAfterSearch: z.number().int(),
  emailSignature: z.string(),
  hideDrillDownOnInvoiceForAffiliatesWithNonRevDeals: z.number().int(),
  showPositionsRevShareDeal: z.number().int(),
  dateOfMonthlyPayment: z.string(),
  extraAgreement2Name: z.string(),
  extraAgreement2Link: z.string(),
  extraAgreement3Name: z.string(),
  extraAgreement3Link: z.string(),
  availableCurrencies: z.string(),
  forceParamsForTracker: z.string(),
  showDocumentsModule: z.boolean(),
  showRequierdDocsOnAffiliateDash: z.boolean(),
  AskDocTypeCompany: z.boolean(),
  AskDocTypeAddress: z.boolean(),
  AskDocTypePassport: z.boolean(),
  AskDocSentence: z.string(),
  hideMarketingSectionOnAffiliateRegPage: z.boolean(),
  hideInvoiceSectionOnAffiliateRegPage: z.boolean(),
  affiliateLoginImage: z.string(),
  adminLoginImage: z.string(),
  AllowAffiliateDuplicationOnCampaignRelation: z.boolean(),
  ShowIMUserOnAffiliatesList: z.boolean(),
  introducingBrokerInterface: z.boolean(),
  hideCountriesOnRegistration: z.string(),
  ShowEmailsOnTraderReportForAffiliate: z.boolean(),
  ShowEmailsOnTraderReportForAdmin: z.boolean(),
  blockAccessForManagerAndAdmins: z.boolean(),
  allowCapthaOnMerchantReset: z.boolean(),
  allowCapthaOnMerchantReg: z.boolean(),
  allowCapthaOnReg: z.boolean(),
  allowCapthaOnReset: z.boolean(),
  combinedPixelOption: z.string(),
  CouponTrackerIsStrongerThanCtag: z.boolean(),
  apiAccessType: z.string(),
  apiStaticIP: z.string(),
  apiToken: z.string(),
  ShowGraphOnDashBoards: z.boolean(),
  affiliateRegistrationPixel: z.string(),
  def_qualify_type_for_affiliates: z.boolean(),
  showTitleOnLoginPage: z.boolean(),
  secondaryPoweredByLogo: z.string(),
  secondaryPoweredByLogoHrefUrl: z.string(),
  hidePoweredByABLogo: z.boolean(),
  brandsPoweredbyText: z.string(),
  logoPath: z.string(),
  billingLogoPath: z.string(),
  faviconPath: z.string(),
  exportAffiliateIDonTrackerFieldName: z.string(),
  exportProfileNameToTrackerFieldName: z.string(),
  numberOfFailureLoginsAttempts: z.number().int(),
  sitebaseurl: z.string(),
  isSmtpDebugMode: z.boolean(),
  showParamTwoOnReports: z.boolean(),
  isOffice365: z.number().int(),
  chartTheme: z.string(),
  hideBrandsDescriptionfromAffiliateFooter: z.boolean(),
  hideCommissionOnTraderReportForRevDeal: z.boolean(),
  defaultTrackingUrl: z.string(),
  paidStatusBGColor: z.string(),
  pendingStatusBGColor: z.string(),
  allowDeleteCRMnoteForManager: z.boolean(),
  exportCreativeNameWithParam: z.string(),
  isBasicVer: z.boolean(),
  cronUrls: z.string(),
  mustFields: z.string(),
  login_session_duration: z.number().int(),
  exportLangCreativeNameWithParam: z.boolean(),
  displayLastMessageFieldsOnReports: z.boolean(),
  IBpushLeadOnRegistrationUrl: z.string(),
  def_profilePermissionsForAffiliate: z.boolean(),
  cronRecordsTimeDif: z.number().int(),
  ShowAffiliateTypes: z.boolean(),
  lastClicksCronJobRunningDate: z.date().nullish(),
  qualifiedCommissionOnCPAonly: z.boolean(),
  hidePendingProcessHighAmountDeposit: z.number().int(),
  AllowManagerEditrCreative: z.boolean(),
  showAgreementsModule: z.boolean(),
  showInvoiceModule: z.number().int(),
  pendingDepositsAmountLimit: z.number().int(),
  showProductsPlace: z.boolean(),
  BlockLoginUntillEmailVerification: z.number().int(),
  ShowNextDepositsColumn: z.boolean(),
  showCampaignOnTraderReport: z.number().int(),
  AllowSecuredTrackingCode: z.boolean(),
  captureAffiliatesRegistration: z.number().int(),
  affiliateStaticReportMonths: z.number().int(),
  currency: z.string(),
  ShowOnlyFeaturedCreativesWhenGotSome: z.number().int(),
  showProductsPlaceToManager: z.number().int(),
  hideSubAffiliation: z.number().int(),
  showDeskNameOnAffiliateDashboard: z.boolean(),
  writeFinalTrackingUrlToLog: z.boolean(),
  systemCompanyDetails: z.string(),
  merchants_terms_link: z.string(),
  ShowPhonesOnTraderReportForAdmin: z.boolean(),
  deal_geoLocation: z.boolean(),
  pnlTable: z.string(),
  ShowQualificationOnChart: z.boolean(),
  hasContinuousyCommissionType: z.boolean(),
})
