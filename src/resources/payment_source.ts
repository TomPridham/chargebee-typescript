import * as resources from ".";
import {RequestWrapper} from "../request_wrapper";
import {Model} from "./model";
import {ChargeBee} from "../chargebee";
import {filter} from "../filter";

export class PaymentSource extends Model {
  public id: string;
  public resource_version?: number;
  public updated_at?: number;
  public created_at: number;
  public customer_id: string;
  public type: string;
  public reference_id: string;
  public status: string;
  public gateway: string;
  public gateway_account_id?: string;
  public ip_address?: string;
  public issuing_country?: string;
  public card?: resources.PaymentSourceCard;
  public bank_account?: resources.PaymentSourceBankAccount;
  public amazon_payment?: resources.PaymentSourceAmazonPayment;
  public paypal?: resources.PaymentSourcePaypal;
  public deleted: boolean;

  

  // OPERATIONS
  //-----------

  public static create_using_temp_token(params?: _payment_source.create_using_temp_token_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_using_temp_token',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/create_using_temp_token',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_using_permanent_token(params?: _payment_source.create_using_permanent_token_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_using_permanent_token',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/create_using_permanent_token',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_using_token(params?: _payment_source.create_using_token_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_using_token',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/create_using_token',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_using_payment_intent(params?: _payment_source.create_using_payment_intent_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_using_payment_intent',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/create_using_payment_intent',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_card(params?: _payment_source.create_card_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_card',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/create_card',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static create_bank_account(params?: _payment_source.create_bank_account_params) {
    return new RequestWrapper([params], {
      'methodName': 'create_bank_account',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/create_bank_account',
      'hasIdInUrl': false,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static update_card(payment_source_id: string, params?: _payment_source.update_card_params) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'update_card',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/update_card',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static verify_bank_account(payment_source_id: string, params?: _payment_source.verify_bank_account_params) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'verify_bank_account',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/verify_bank_account',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static retrieve(payment_source_id: string, params?: any) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'retrieve',
      'httpMethod': 'GET',
      'urlPrefix': '/payment_sources',
      'urlSuffix': null,
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static list(params?: _payment_source.payment_source_list_params) {
    return new RequestWrapper([params], {
      'methodName': 'list',
      'httpMethod': 'GET',
      'urlPrefix': '/payment_sources',
      'urlSuffix': null,
      'hasIdInUrl': false,
      'isListReq': true,
    }, ChargeBee._env)
  }

  public static switch_gateway_account(payment_source_id: string, params?: _payment_source.switch_gateway_account_params) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'switch_gateway_account',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/switch_gateway_account',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static export_payment_source(payment_source_id: string, params?: _payment_source.export_payment_source_params) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'export_payment_source',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/export_payment_source',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete(payment_source_id: string, params?: any) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'delete',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/delete',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

  public static delete_local(payment_source_id: string, params?: any) {
    return new RequestWrapper([payment_source_id, params], {
      'methodName': 'delete_local',
      'httpMethod': 'POST',
      'urlPrefix': '/payment_sources',
      'urlSuffix': '/delete_local',
      'hasIdInUrl': true,
      'isListReq': false,
    }, ChargeBee._env)
  }

} // ~PaymentSource



  // REQUEST PARAMS
  //---------------

export namespace _payment_source {
  export interface create_using_temp_token_params {
    customer_id: string;
    gateway_account_id?: string;
    type: string;
    tmp_token: string;
    issuing_country?: string;
    replace_primary_payment_source?: boolean;
  }
  export interface create_using_permanent_token_params {
    customer_id: string;
    type: string;
    gateway_account_id?: string;
    reference_id: string;
    issuing_country?: string;
    replace_primary_payment_source?: boolean;
  }
  export interface create_using_token_params {
    customer_id: string;
    replace_primary_payment_source?: boolean;
    token_id: string;
  }
  export interface create_using_payment_intent_params {
    customer_id: string;
    replace_primary_payment_source?: boolean;
    payment_intent?: payment_intent_create_using_payment_intent_params;
  }
  export interface create_card_params {
    customer_id: string;
    replace_primary_payment_source?: boolean;
    card?: card_create_card_params;
  }
  export interface create_bank_account_params {
    customer_id: string;
    issuing_country?: string;
    replace_primary_payment_source?: boolean;
    bank_account?: bank_account_create_bank_account_params;
  }
  export interface update_card_params {
    gateway_meta_data?: any;
    reference_transaction?: string;
    card?: card_update_card_params;
  }
  export interface verify_bank_account_params {
    amount1: number;
    amount2: number;
  }
  export interface payment_source_list_params {
    limit?: number;
    offset?: string;
    customer_id?: filter._string;
    type?: filter._enum;
    status?: filter._enum;
    updated_at?: filter._timestamp;
    created_at?: filter._timestamp;
  }
  export interface switch_gateway_account_params {
    gateway_account_id: string;
  }
  export interface export_payment_source_params {
    gateway_account_id: string;
  }
  export interface payment_intent_create_using_payment_intent_params {
    id?: string;
  }
  export interface payment_intent_create_using_payment_intent_params {
  }
  export interface payment_intent_create_using_payment_intent_params {
    gateway_account_id?: string;
  }
  export interface payment_intent_create_using_payment_intent_params {
    gw_token?: string;
  }
  export interface payment_intent_create_using_payment_intent_params {
    reference_id?: string;
  }
  export interface payment_intent_create_using_payment_intent_params {
    /**
     * @deprecated Please refer API docs to use other attributes
     */
    gw_payment_method_id?: string;
  }
  export interface card_create_card_params {
    gateway_account_id?: string;
  }
  export interface card_create_card_params {
    first_name?: string;
  }
  export interface card_create_card_params {
    last_name?: string;
  }
  export interface card_create_card_params {
    number: string;
  }
  export interface card_create_card_params {
    expiry_month: number;
  }
  export interface card_create_card_params {
    expiry_year: number;
  }
  export interface card_create_card_params {
    cvv?: string;
  }
  export interface card_create_card_params {
    billing_addr1?: string;
  }
  export interface card_create_card_params {
    billing_addr2?: string;
  }
  export interface card_create_card_params {
    billing_city?: string;
  }
  export interface card_create_card_params {
    billing_state_code?: string;
  }
  export interface card_create_card_params {
    billing_state?: string;
  }
  export interface card_create_card_params {
    billing_zip?: string;
  }
  export interface card_create_card_params {
    billing_country?: string;
  }
  export interface bank_account_create_bank_account_params {
    gateway_account_id?: string;
  }
  export interface bank_account_create_bank_account_params {
    iban?: string;
  }
  export interface bank_account_create_bank_account_params {
    first_name?: string;
  }
  export interface bank_account_create_bank_account_params {
    last_name?: string;
  }
  export interface bank_account_create_bank_account_params {
    company?: string;
  }
  export interface bank_account_create_bank_account_params {
    email?: string;
  }
  export interface bank_account_create_bank_account_params {
    bank_name?: string;
  }
  export interface bank_account_create_bank_account_params {
    account_number?: string;
  }
  export interface bank_account_create_bank_account_params {
    routing_number?: string;
  }
  export interface bank_account_create_bank_account_params {
    bank_code?: string;
  }
  export interface bank_account_create_bank_account_params {
    account_type?: string;
  }
  export interface bank_account_create_bank_account_params {
    account_holder_type?: string;
  }
  export interface bank_account_create_bank_account_params {
    echeck_type?: string;
  }
  export interface bank_account_create_bank_account_params {
    swedish_identity_number?: string;
  }
  export interface card_update_card_params {
    first_name?: string;
  }
  export interface card_update_card_params {
    last_name?: string;
  }
  export interface card_update_card_params {
    expiry_month?: number;
  }
  export interface card_update_card_params {
    expiry_year?: number;
  }
  export interface card_update_card_params {
    billing_addr1?: string;
  }
  export interface card_update_card_params {
    billing_addr2?: string;
  }
  export interface card_update_card_params {
    billing_city?: string;
  }
  export interface card_update_card_params {
    billing_zip?: string;
  }
  export interface card_update_card_params {
    billing_state_code?: string;
  }
  export interface card_update_card_params {
    billing_state?: string;
  }
  export interface card_update_card_params {
    billing_country?: string;
  }
}