/* eslint-disable max-len */
import { OfferRunStatus, OptimizableCategory, User } from '../models';
import { OfferRun } from '../models/potentialOffer';
import { ProcedureDetails } from '../models/procedure/ProcedureDetails';
import { ContractOptionsData } from './ContractOptions';

export enum HOUSING_ZONES {
  BLUE = 'Bleu',
  GREEN = 'Vert',
}

export enum MALJ_HOUSING_OWNERSHIP {
  RENTER = 'Locataire',
  OWNER = 'Propriétaire',
  CO_OWNER = 'Copropriétaire',
}

export enum MALJ_HOUSING_OFFERS {
  PRIMO = 'Primo',
  PRESTIGE_PLUS = 'Prestige +',
  ESSENTIEL_PLUS = 'Essentiel +',
  TRADITION_PLUS = 'Tradition +',
}

export enum EstimationGeneratorType {
  API = 'API',
  SCRAPER = 'SCRAPER',
  SIMULATOR = 'SIMULATOR',
  ON_DEMAND = 'ON_DEMAND',
}

export enum EstimationPartner {
  ACHEEL = 'acheel',
  AMI3F = 'ami_trois_f',
  APRIL = 'april',
  // APIVIA = 'apivia_mutuelle',
  ASAF = 'asaf',
  AXA = 'axa',
  FLITTER = 'flitter',
  GENERALI = 'generali',
  // INSURED = 'insured',
  // LUKO = 'luko',
  MALJ = 'malj',
  NEOLIANNE = 'neolianne',
  NETVOX = 'netvox',
  NOVELIA = 'novelia',
  SOLLYAZAR = 'sollyazar',
  SWISSLIFE = 'swisslife',
  REPAM = 'repam_assurances',
  UGIP = 'ugip',
  UTWIN = 'utwin',
  ZEPHIR = 'zephir',
  ASSUREA = 'assurea',
  DIRECTASSURANCE = 'direct_assurance',
}

export enum EstimationStatus {
  ERROR = 'ERROR',
  ERROR_ELIGIBILITY = 'ERROR_ELIGIBILITY',
  SUCCESS = 'SUCCESS',
  SUCCESS_WITH_DEFAULT_VALUES = 'SUCCESS_WITH_DEFAULT_VALUES',
}

export enum LoanPeriodicity {
  MONTHLY = 'mensuel',
  EVERY_3_MONTHS = 'trimestriel',
  YEARLY = 'annuel',
}

export enum LoanProjectType {
  CREDIT_TRAVAUX = 'credit_travaux',
  RESIDENCE_PRINCIPALE = 'credit_immobilier',
  BIEN_MIS_EN_LOCATION = 'credit_immobilier_locatif',
}

export enum LoanType {
  RELAIS = 'RELAIS',
  AMORTISSABLE = 'AMORTISSABLE',
  PRET_A_PALIER = 'PRET_A_PALIER',
  IN_FINE_AVEC_INTERET = 'IN_FINE_AVEC_INTERET',
  IN_FINE_SANS_INTERET = 'IN_FINE_SANS_INTERET',
}

export enum LoanDeferralType {
  TOTAL = 'TOTAL',
  PARTIEL = 'PARTIEL',
}

export enum LoanRatioType {
  FIXE = 'Fixe',
  VARIABLE = 'Variable',
}

export enum HospitalizationOption {
  NO = 'NO',
  YES_WITH_HOSPITALIZATION = 'YES_WITH_HOSPITALIZATION',
  YES_WITHOUT_HOSPITALIZATION = 'YES_WITHOUT_HOSPITALIZATION',
}

export enum SpecificOccupation {
  AGENT_DE_MAITRISE_CONTREMAITRE = 'AGENT_DE_MAITRISE_CONTREMAITRE',
  PROFESSIONS_AGRICOLES = 'PROFESSIONS_AGRICOLES',
  ARTISAN = 'ARTISAN',
  SANS_PROFESSION_ETUDIANT_INTERMITTENT_SAISONNIER = 'SANS_PROFESSION_ETUDIANT_INTERMITTENT_SAISONNIER',
  SALARIE_CADRE_ASSIMILE_CADRE_INGENIEUR_HORS_PERSONNEL_NAVIGANT = 'SALARIE_CADRE_ASSIMILE_CADRE_INGENIEUR_HORS_PERSONNEL_NAVIGANT',
  DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_MOINS_10_ARTISAN_COMMERCANT = 'DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_MOINS_10_ARTISAN_COMMERCANT',
  DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_MOINS_10_HORS_ARTISAN_COMMERCANT = 'DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_MOINS_10_HORS_ARTISAN_COMMERCANT',
  DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_10_ET_PLUS = 'DIRIGEANT_DE_SOCIETE_GERANT_CHEF_ENTREPRISE_10_ET_PLUS',
  COMMERCANT = 'COMMERCANT',
  EMPLOYE_BUREAU = 'EMPLOYE_BUREAU',
  SALARIE_NON_CADRE_MEDICAL_CHIRURGIEN = 'SALARIE_NON_CADRE_MEDICAL_CHIRURGIEN',
  SALARIE_NON_CADRE_MEDICAL_MEDECIN_PHARMACIEN = 'SALARIE_NON_CADRE_MEDICAL_MEDECIN_PHARMACIEN',
  SALARIE_NON_CADRE_MEDICAL_OSTEOPATHE = 'SALARIE_NON_CADRE_MEDICAL_OSTEOPATHE',
  SALARIE_NON_CADRE_MEDICAL_PARAMEDICAL = 'SALARIE_NON_CADRE_MEDICAL_PARAMEDICAL',
  SALARIE_NON_CADRE_MEDICAL_AUTRES = 'SALARIE_NON_CADRE_MEDICAL_AUTRES',
  SALARIE_NON_CADRE_NON_MEDICAL = 'SALARIE_NON_CADRE_NON_MEDICAL',
  FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_CHIRURGIEN = 'FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_CHIRURGIEN',
  FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_MEDECIN_PHARMACIEN = 'FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_MEDECIN_PHARMACIEN',
  FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_OSTEOPATHE = 'FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_OSTEOPATHE',
  FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_PARAMEDICAL = 'FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_PARAMEDICAL',
  FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_AUTRES = 'FONCTIONNAIRE_DE_CATEGORIE_A_MEDICAL_AUTRES',
  FONCTIONNAIRE_DE_CATEGORIE_A_NON_MEDICAL = 'FONCTIONNAIRE_DE_CATEGORIE_A_NON_MEDICAL',
  FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_CHIRURGIEN = 'FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_CHIRURGIEN',
  FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_MEDECIN_PHARMACIEN = 'FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_MEDECIN_PHARMACIEN',
  FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_OSTEOPATHE = 'FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_OSTEOPATHE',
  FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_PARAMEDICAL = 'FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_PARAMEDICAL',
  FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_AUTRES = 'FONCTIONNAIRE_DE_CATEGORIE_B_MEDICAL_AUTRES',
  FONCTIONNAIRE_DE_CATEGORIE_B_NON_MEDICAL = 'FONCTIONNAIRE_DE_CATEGORIE_B_NON_MEDICAL',
  FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_CHIRURGIEN = 'FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_CHIRURGIEN',
  FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_MEDECIN_PHARMACIEN = 'FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_MEDECIN_PHARMACIEN',
  FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_OSTEOPATHE = 'FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_OSTEOPATHE',
  FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_PARAMEDICAL = 'FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_PARAMEDICAL',
  FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_AUTRES = 'FONCTIONNAIRE_DE_CATEGORIE_C_MEDICAL_AUTRES',
  FONCTIONNAIRE_DE_CATEGORIE_C_NON_MEDICAL = 'FONCTIONNAIRE_DE_CATEGORIE_C_NON_MEDICAL',
  PROFESSEUR_AGREGE = 'PROFESSEUR_AGREGE',
  INSTITUTEUR_PROFESSEUR_DES_ECOLES_OU_PROFESSION_ASSIMILEE = 'INSTITUTEUR_PROFESSEUR_DES_ECOLES_OU_PROFESSION_ASSIMILEE',
  PROFESSEUR_CERTIFIE_OU_PROFESSION_ASSIMILEE = 'PROFESSEUR_CERTIFIE_OU_PROFESSION_ASSIMILEE',
  PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_CHIRURGIEN = 'PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_CHIRURGIEN',
  PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_MEDECIN_PHARMACIEN = 'PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_MEDECIN_PHARMACIEN',
  PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_OSTEOPATHE = 'PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_OSTEOPATHE',
  PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_PARAMEDICAL = 'PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_PARAMEDICAL',
  PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_AUTRES = 'PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_AUTRES',
  PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_NON = 'PROFESSION_INTERMEDIAIRE_DE_LA_SANTE_ET_DU_TRAVAIL_SOCIAL_NON',
  PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_CHIRURGIEN = 'PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_CHIRURGIEN',
  PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_MEDECIN_PHARMACIEN = 'PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_MEDECIN_PHARMACIEN',
  PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_OSTEOPATHE = 'PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_OSTEOPATHE',
  PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_PARAMEDICAL = 'PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_PARAMEDICAL',
  PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_AUTRES = 'PROFESSION_LIBERALE_MEDICALE_OU_PARAMEDICALE_AUTRES',
  PROFESSION_LIBERALE_HORS_MEDICAL_PARAMEDICAL = 'PROFESSION_LIBERALE_HORS_MEDICAL_PARAMEDICAL',
  OUVRIERS_PROFESSIONS_DU_TRANSPORT = 'OUVRIERS_PROFESSIONS_DU_TRANSPORT',
  HOTESSE_STEWARD_AUTRE_PERSONNEL_NAVIGANT = 'HOTESSE_STEWARD_AUTRE_PERSONNEL_NAVIGANT',
  CADRE_NAVIGANT_TECHNIQUE_COMMERCIAL = 'CADRE_NAVIGANT_TECHNIQUE_COMMERCIAL',
  RETRAITE_PRE_RETRAITE_CADRE_FONCT_CLASSE_A_CHEF_ENTREPRISE_PROF_LIB = 'RETRAITE_PRE_RETRAITE_CADRE_FONCT_CLASSE_A_CHEF_ENTREPRISE_PROF_LIB',
  RETRAITE_PRE_RETRAITE_NON_CADRE = 'RETRAITE_PRE_RETRAITE_NON_CADRE',
  TECHNICIEN = 'TECHNICIEN',
}

export type MALJHousingOffer = {
  [key in MALJ_HOUSING_OFFERS]: {
    Franchise: string;
    Nb_pieces: { [key: string]: string };
  }[];
};

export type ProcedureDataKeys = 'userId' | 'ibanPayment' | 'cardPayment';

export type ProcedureData = Omit<ProcedureDetails, ProcedureDataKeys> & {
  procedureId: string;
};

export interface MALJEstimationInput {
  ownership: string;
  postalCode: string;
  housingRooms: number;
}

export interface MALJEstimationOutput {
  estimationStatus: EstimationStatus;
  potentialOffers: {
    [key: string]: { price: number; options?: ContractOptionsData };
  };
}

export interface OptimizationRequestData {
  userData: User;
  procedureData: ProcedureData;
}

export type ParsedRequestData = {
  userId: string;
  procedureId: string;
  recurrentSubscriptionId: string;
} & Record<string, unknown>;

export type CompleteRequestData = ParsedRequestData & {
  offerRunId: OfferRun['id'];
};

export interface EstimationGeneratorLauncherInput {
  targetPartnerLabels?: string[];
  partnerLabel: string;
  subcategoryLabel: OptimizableCategory;
  requestData: ParsedRequestData;
}

export interface EstimationGeneratorInput {
  partnerLabel: EstimationPartner;
  subcategoryLabel: OptimizableCategory;
  requestData: CompleteRequestData;
}

export type EstimationDataBaseObject = {
  [key: string]: string | number | boolean;
};

export type EstimationOfferDetails = {
  price: number;
  options?: ContractOptionsData;
};

export type PotentialOffersMap = {
  [key: string]: EstimationOfferDetails;
};

export type EstimationDataItem = {
  estmation_link: string; // TODO: Correct typo in scraper and lambda before here
  abortion_reason?: string;
  partner: EstimationPartner;
  options?: ContractOptionsData;
  estimation_status: EstimationStatus;
  potential_offers: PotentialOffersMap;
  default_values: EstimationDataBaseObject;
  subscription_data?: EstimationDataBaseObject;
};

export type EstimationData = EstimationDataItem[];

export type EstimationRequestIds = Pick<
  CompleteRequestData,
  'userId' | 'offerRunId' | 'procedureId' | 'recurrentSubscriptionId'
>;

export type EstimationMessageBody = Pick<
  EstimationRequestIds,
  'userId' | 'procedureId' | 'recurrentSubscriptionId'
> & {
  request_id: EstimationRequestIds['offerRunId'];
  request_status: keyof typeof OfferRunStatus;
  estimation_data?: EstimationData;
};

export type LoanCivilType = 'M' | 'Mme';
export type LoanResumptionType = 'NEW_LOAN' | 'RESUMPTION';

export type BorrowerAddress = {
  city: string;
  country: string;
  streetName: string;
  streetNumber: string;
};

export type BorrowerData = {
  job: SpecificOccupation;
  email: string;
  lastname: string;
  firstname: string;
  birthDate: string;
  phoneNumber: string;
  postalCode: string;
  address: BorrowerAddress;
  civilType: LoanCivilType;
  isExpatriate: boolean;
  isCoBorrower: boolean;
  isSmokerMoreThan2years: boolean;
  workPlaceHigherThan3m: boolean;
  workRequiresFineTools: false;
  workPhysicallyDemanding: false;
  workTravelsMoreThan20: false;
  travelsToForeignCountry: false;
  travelsToRiskyCountry: false;
  taxResidenceCountry: string;
  ugipCommission?: string;
};

export type LoanData = {
  loanNumber: 1 | 2 | 3 | 4 | 5;
  loanRatio: number;
  loanRatioType: LoanRatioType;
  firstDueDate: string;
  effectiveDate: string;
  signatureDate: string;
  durationInMonths: number;
  remainingDurationInMonths: number;
  deferralInMonths: number;
  deferralType: LoanDeferralType;
  loanTotalAmount: number;
  loanRemainingAmount: number;
  loanType: LoanType;
  isProfessionalLoan: boolean;
};

export type LoanOption = {
  loanNumber: 1 | 2 | 3 | 4 | 5;
  forCoBorrower: boolean;
  // coverageIttIpt: string;  // Set by Default
  // coverageTypeIpt: string; // Set by Default
  // inabilityRefund: string; // Set by Default
  quotaDcPtia: number;
  quotaIpp: number;
  quotaIppPro: number;
  quotaIttIpt: number;
  franchiseItt: number;
  backPain: HospitalizationOption;
  psychoTherapy: HospitalizationOption;
  partTimeTherapeutic: boolean;
};

export type LoanRequestData = {
  bank?: string;
  productRef?: string;
  loanProjectType: string;
  loanPeriodicity: LoanPeriodicity;
  loanResumptionType: LoanResumptionType;
  firstBorrower: BorrowerData;
  secondBorrower?: BorrowerData;
  loans: LoanData[];
  loanOptions: LoanOption[];
};

export type AutoRequestData = {
  familyMembers: string[];
  dateBirth: string;
  lastName: string;
  email: string;
  firstName: string;
  phoneNumber: string;
  occupation: string;
  maritalStatus: string;
  country: string;
  route: string;
  streetNumber: string;
  postalCode: string;
  locality: string;
  housingType: string;
  furnished: string;
  date_first_release_car: string;
  improvement_needs_car_motorbike?: string;
  funding_method_car_insurance: string;
  license_plate_car_insurance: string;
  driving_license_date_auto_insurance: string;
  bonus_malus_auto_insurance: string | number;
  number_claims: string;
  type_first_claim?: string;
  responsibility_level_first_claim?: string;
  type_second_claim?: string;
  responsibility_level_second_claim?: string;
  type_third_claim?: string;
  responsibility_level_third_claim?: string;
  incidents_car_insurance: string;
  previous_cancelation_vehicle_insurance: string;
  previous_cancelation_reasons_vehicle_insurance?: string;
  usage_car_insurance: string;
  yearly_kilometers_car_insurance: string;
  parking_type_car_insurance: string;
  date_purchase_car_insurance: string;
  isnt_new_car: string;
  profile_selection_auto?: string;
  housing_selection_auto?: string;
  residenceType?: string;
  coverage_level_car_insurance?: string;
  price?: number;
  periodicity?: string;
  housing_selection_vehicle?: string;
  profile_selection_vehcile?: string;
};

export const UserDataKeys = [
  'id',
  'email',
  'firstName',
  'lastName',
  'phoneNumber',
  'dateBirth',
  'occupation',
  'maritalStatus',
];
export const AddressDataKeys = [
  'route',
  'country',
  'locality',
  'postalCode',
  'streetNumber',
];
export const HousingDataKeys = [
  'address',
  'furnished',
  'housingType',
  'residenceType',
];
export const FamilyMemberDataKeys = [
  'lastname',
  'firstname',
  'birthdate',
  'occupation',
  'familyTiesWithUser',
];

/* eslint-disable camelcase */
export const numericLabels = {
  zero: 0,
  un: 1,
  deux: 2,
  trois: 3,
  quatre: 4,
  quatre_ou_plus: 4,
  cinq: 5,
  cinq_ou_plus: 5,
  six_et_plus: 6,
};

export const EstimationGenerators = {
  [OptimizableCategory.AUTO_INSURANCE]: {
    [EstimationPartner.AMI3F]: EstimationGeneratorType.SCRAPER,
    // [EstimationPartner.APIVIA]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.AXA]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.FLITTER]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.NOVELIA]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.APRIL]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.ASSUREA]: EstimationGeneratorType.API,
    [EstimationPartner.DIRECTASSURANCE]: EstimationGeneratorType.SCRAPER,
  },
  [OptimizableCategory.HEALTH_INSURANCE]: {
    // [EstimationPartner.AMI3F]: EstimationGeneratorType.SIMULATOR,
    // [EstimationPartner.APRIL]: EstimationGeneratorType.API,
    // [EstimationPartner.NEOLIANNE]: EstimationGeneratorType.API,
    // [EstimationPartner.UGIP]: EstimationGeneratorType.API,
    [EstimationPartner.SWISSLIFE]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.REPAM]: EstimationGeneratorType.SCRAPER,
  },
  [OptimizableCategory.HOUSING_INSURANCE]: {
    [EstimationPartner.ACHEEL]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.AXA]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.AMI3F]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.APRIL]: EstimationGeneratorType.SCRAPER,
    // [EstimationPartner.INSURED]: EstimationGeneratorType.SIMULATOR,
    // [EstimationPartner.LUKO]: EstimationGeneratorType.API,
    [EstimationPartner.MALJ]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.NOVELIA]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.GENERALI]: EstimationGeneratorType.SCRAPER,
    [EstimationPartner.DIRECTASSURANCE]: EstimationGeneratorType.SCRAPER,
  },
  [OptimizableCategory.LOAN_INSURANCE]: {
    // [EstimationPartner.APRIL]: EstimationGeneratorType.API,
    // [EstimationPartner.LUKO]: EstimationGeneratorType.API,
    [EstimationPartner.UGIP]: EstimationGeneratorType.API,
    [EstimationPartner.UTWIN]: EstimationGeneratorType.API,
  },
  [OptimizableCategory.BICYCLE_INSURANCE]: {},
  [OptimizableCategory.DEVICES_AND_GOODS_INSURANCE]: {},
  [OptimizableCategory.ENTERTAINMENT_INSURANCE]: {},
  [OptimizableCategory.PET_INSURANCE]: {},
  [OptimizableCategory.ELECTRICITY]: {},
  [OptimizableCategory.ELECTRICITY_AND_GAS]: {},
  [OptimizableCategory.GAS]: {},
  [OptimizableCategory.INTERNET_BOX_PLAN]: {},
  [OptimizableCategory.MOBILE_AND_BOX_PACKAGE]: {},
  [OptimizableCategory.MOBILE_PHONE_PLAN]: {},
};

export type PartnerCredentials = {
  username: string;
  password: string;
};

export const EstimationPartnerCredentials: Partial<
  Record<EstimationPartner, PartnerCredentials>
> = {
  [EstimationPartner.ACHEEL]: {
    username: 'quentin@ideel.io',
    password: 'Ideel0909@@',
  },
  [EstimationPartner.AXA]: {
    username: 'G124293',
    password: '30303',
  },
  [EstimationPartner.DIRECTASSURANCE]: {
    username: 'fakeUsername',
    password: 'fakeMDP',
  },
  [EstimationPartner.ASAF]: {
    username: 'Edouard ALEXANDRE',
    password: 'q-5j8vtTG',
  },
  [EstimationPartner.APRIL]: {
    username: 'TechAdmin',
    password: 'Id@@l2026!!!',
  },
  [EstimationPartner.AMI3F]: {
    username: '6728',
    password: '70c36f',
  },
  [EstimationPartner.FLITTER]: {
    username: 'fakeUsername',
    password: 'fakeMDP',
  },
  [EstimationPartner.GENERALI]: {
    username: 'b302xmm',
    password: 'Id@@l2026!!!',
  },
  [EstimationPartner.MALJ]: {
    username: 'quentin@ideel.io',
    password: 'Id@@@l2024!!',
  },
  [EstimationPartner.NEOLIANNE]: {
    username: 'NR4953',
    password: 'Id@@@l2026!!!',
  },
  [EstimationPartner.NETVOX]: {
    username: 'NETX20956',
    password: '257182RQ',
  },
  [EstimationPartner.NOVELIA]: {
    username: 'IDEEENGH',
    password: 'Kereis2026',
  },
  [EstimationPartner.SOLLYAZAR]: {
    username: 'hello@ideel.io',
    password: 'Id@@@l2025!!',
  },
  [EstimationPartner.SWISSLIFE]: {
    username: 'DMQ978R',
    password: 'Id@@l2026!!!',
  },
  [EstimationPartner.REPAM]: {
    username: 'quentin@ideel.io',
    password: 'Id@@@l2025!!',
  },
  [EstimationPartner.ZEPHIR]: {
    username: 'I15845',
    password: 'IdZEPHIR32@',
  },
};