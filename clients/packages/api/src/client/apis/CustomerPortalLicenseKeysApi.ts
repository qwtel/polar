/* tslint:disable */
/* eslint-disable */
/**
 * Polar API
 * Read the docs at https://docs.polar.sh/api-reference
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  LicenseKeyActivate,
  LicenseKeyActivationRead,
  LicenseKeyDeactivate,
  LicenseKeyValidate,
  LicenseKeyWithActivations,
  ListResourceLicenseKeyRead,
  NotPermitted,
  OrganizationIDFilter1,
  ResourceNotFound,
  Unauthorized,
  ValidatedLicenseKey,
} from '../models/index';

export interface CustomerPortalLicenseKeysApiActivateRequest {
    body: LicenseKeyActivate;
}

export interface CustomerPortalLicenseKeysApiDeactivateRequest {
    body: LicenseKeyDeactivate;
}

export interface CustomerPortalLicenseKeysApiGetRequest {
    id: string;
}

export interface CustomerPortalLicenseKeysApiListRequest {
    organizationId?: OrganizationIDFilter1 | null;
    benefitId?: string | null;
    page?: number;
    limit?: number;
}

export interface CustomerPortalLicenseKeysApiValidateRequest {
    body: LicenseKeyValidate;
}

/**
 * 
 */
export class CustomerPortalLicenseKeysApi extends runtime.BaseAPI {

    /**
     * Activate a license key instance.
     * Activate License Key
     */
    async activateRaw(requestParameters: CustomerPortalLicenseKeysApiActivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LicenseKeyActivationRead>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling activate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/customer-portal/license-keys/activate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Activate a license key instance.
     * Activate License Key
     */
    async activate(requestParameters: CustomerPortalLicenseKeysApiActivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LicenseKeyActivationRead> {
        const response = await this.activateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deactivate a license key instance.
     * Deactivate License Key
     */
    async deactivateRaw(requestParameters: CustomerPortalLicenseKeysApiDeactivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling deactivate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/customer-portal/license-keys/deactivate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deactivate a license key instance.
     * Deactivate License Key
     */
    async deactivate(requestParameters: CustomerPortalLicenseKeysApiDeactivateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deactivateRaw(requestParameters, initOverrides);
    }

    /**
     * Get a license key.
     * Get License Key
     */
    async getRaw(requestParameters: CustomerPortalLicenseKeysApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LicenseKeyWithActivations>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("customer_session", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/customer-portal/license-keys/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get a license key.
     * Get License Key
     */
    async get(requestParameters: CustomerPortalLicenseKeysApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LicenseKeyWithActivations> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List License Keys
     */
    async listRaw(requestParameters: CustomerPortalLicenseKeysApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceLicenseKeyRead>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['benefitId'] != null) {
            queryParameters['benefit_id'] = requestParameters['benefitId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("customer_session", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/customer-portal/license-keys/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List License Keys
     */
    async list(requestParameters: CustomerPortalLicenseKeysApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceLicenseKeyRead> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Validate a license key.
     * Validate License Key
     */
    async validateRaw(requestParameters: CustomerPortalLicenseKeysApiValidateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ValidatedLicenseKey>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling validate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v1/customer-portal/license-keys/validate`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Validate a license key.
     * Validate License Key
     */
    async validate(requestParameters: CustomerPortalLicenseKeysApiValidateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ValidatedLicenseKey> {
        const response = await this.validateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
