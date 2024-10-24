import { axiosInstance } from "@/configs";
import { OrderParams } from "@/domains/models/orders/orders-params.request";

export const orderApi = {
  getOrderPersonalList: async (options?: OrderParams) => {
    const response = await axiosInstance.get("/api/orders/personal", {
      params: options,
    });
    return response.data;
  },

  getOrderSerivcesList: async (options?: OrderParams) => {
    const response = await axiosInstance.get("/api/orders/services", {
      params: options,
    });
    return response.data;
  },

  patchOrderApprove: async (id: string) => {
    const response = await axiosInstance.patch(`/api/orders/approve/${id}`);
    return response.data;
  },
  patchOrderDeny: async (id: string) => {
    const response = await axiosInstance.patch(`/api/orders/deny/${id}`);
    return response.data;
  },

  patchOrderStatus: async (id: string) => {
    const response = await axiosInstance.patch(`/api/orders/${id}/status`);
    return response.data;
  },
};
