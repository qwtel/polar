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
  CheckoutIDFilter,
  CustomerIDFilter,
  DiscountIDFilter1,
  HTTPValidationError,
  ListResourceOrder,
  Order,
  OrderInvoice,
  OrderSortProperty,
  OrganizationIDFilter1,
  ProductIDFilter,
  ProductPriceTypeFilter,
  ResourceNotFound,
} from '../models/index';

export interface OrdersApiGetRequest {
    id: string;
}

export interface OrdersApiInvoiceRequest {
    id: string;
}

export interface OrdersApiListRequest {
    organizationId?: OrganizationIDFilter1 | null;
    productId?: ProductIDFilter | null;
    productPriceType?: ProductPriceTypeFilter | null;
    discountId?: DiscountIDFilter1 | null;
    customerId?: CustomerIDFilter | null;
    checkoutId?: CheckoutIDFilter | null;
    page?: number;
    limit?: number;
    sorting?: Array<OrderSortProperty> | null;
}

/**
 * 
 */
export class OrdersApi extends runtime.BaseAPI {

    /**
     * Get an order by ID.
     * Get Order
     */
    async getRaw(requestParameters: OrdersApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling get().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/orders/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get an order by ID.
     * Get Order
     */
    async get(requestParameters: OrdersApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Order> {
        const response = await this.getRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an order\'s invoice data.
     * Get Order Invoice
     */
    async invoiceRaw(requestParameters: OrdersApiInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OrderInvoice>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling invoice().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/orders/{id}/invoice`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Get an order\'s invoice data.
     * Get Order Invoice
     */
    async invoice(requestParameters: OrdersApiInvoiceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OrderInvoice> {
        const response = await this.invoiceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List orders.
     * List Orders
     */
    async listRaw(requestParameters: OrdersApiListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResourceOrder>> {
        const queryParameters: any = {};

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['productId'] != null) {
            queryParameters['product_id'] = requestParameters['productId'];
        }

        if (requestParameters['productPriceType'] != null) {
            queryParameters['product_price_type'] = requestParameters['productPriceType'];
        }

        if (requestParameters['discountId'] != null) {
            queryParameters['discount_id'] = requestParameters['discountId'];
        }

        if (requestParameters['customerId'] != null) {
            queryParameters['customer_id'] = requestParameters['customerId'];
        }

        if (requestParameters['checkoutId'] != null) {
            queryParameters['checkout_id'] = requestParameters['checkoutId'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sorting'] != null) {
            queryParameters['sorting'] = requestParameters['sorting'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v1/orders/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * List orders.
     * List Orders
     */
    async list(requestParameters: OrdersApiListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResourceOrder> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
