import { axiosInstance } from "@/configs";
import { OrderParams, OrdersUnApprovedResponse } from "@/domains/models/orders";
import {
  OrdersBodyRequest,
  OrderStatus,
  OrdersWebhook,
  OrderTripBodyRequest,
} from "@/domains/models/orders/orders-body.request";
import { RootRequest } from "@/domains/models/root/root.request";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

export const orderApi = {
  getOrderDelivery: async (
    options: RootRequest
  ): Promise<RootResponse<Data<OrdersUnApprovedResponse>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/orders/delivered", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getOrderUnApproved: async (
    options: OrderParams
  ): Promise<RootResponse<Data<OrdersUnApprovedResponse>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/orders/unapproved", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getOrdersPersonal: async (
    options: RootRequest
  ): Promise<RootResponse<Data<OrdersUnApprovedResponse>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/orders/personal", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getOrdersService: async (
    options: RootRequest
  ): Promise<RootResponse<Data<OrdersUnApprovedResponse>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/orders/service", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  postOrdersKoi: async (
    data: OrdersBodyRequest
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.post("/api/orders/koi", data);

      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  postOrdersTripCreate: async (
    data: OrderTripBodyRequest
  ): Promise<RootResponse<{ payOSUrl: string }> | undefined> => {
    try {
      const response = await axiosInstance.post(
        "/api/orders/trip/create",
        data
      );

      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  postOrdersTrip: async (
    data: OrdersBodyRequest
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.post("/api/orders/trip", data);

      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteOrders: async (id: string): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.delete(`/api/orders/${id}`);

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  postWebhook: async (data: OrdersWebhook): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.post("/api/orders/webhook", data);

      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  patchOrdersState: async (
    id: string,
    status: OrderStatus
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.patch(`/api/orders/${id}/status`, {
        status,
      });

      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
