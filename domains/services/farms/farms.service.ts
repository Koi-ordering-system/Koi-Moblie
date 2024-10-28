import { axiosInstance } from "@/configs";
import {
  FarmAddKoiBody,
  FarmEditResponse,
  FarmsBody,
  FarmsFeedbackParams,
  FarmsParams,
  FarmsResponse,
} from "@/domains/models/farms";
import { FarmDetailResponse } from "@/domains/models/farms/farm-detail.response";
import { Data, RootResponse } from "@/domains/models/root/root.response";

import axios from "axios";

export const farmApi = {
  getFarmList: async (
    options?: FarmsParams
  ): Promise<RootResponse<Data<FarmsResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/farms", {
        params: options,
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
    return undefined;
  },

  getFaramsFeedback: async (
    options: FarmsFeedbackParams
  ): Promise<RootResponse<Data<FarmsResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get(
        `/api/farms/${options.orderId}/feedbacks`,
        {
          params: options,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getFarmDetail: async (
    id: string
  ): Promise<RootResponse<FarmDetailResponse> | undefined> => {
    try {
      const response = await axiosInstance.get(`/api/farms/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }

    return undefined;
  },

  createFarm: async (
    data: FarmsBody
  ): Promise<RootResponse<FarmEditResponse> | undefined> => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("owner", data.owner);
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("farmImages", JSON.stringify(data.farmImages));

      const response = await axiosInstance.post("/api/farms", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  updateFarm: async (
    id: string,
    data: FarmsBody
  ): Promise<RootResponse<FarmEditResponse> | undefined> => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("owner", data.owner);
      formData.append("address", data.address);
      formData.append("description", data.description);
      formData.append("farmImages", JSON.stringify(data.farmImages));

      const response = await axiosInstance.put(`/api/farms/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteFarm: async (id: string): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.delete(`/api/farms/${id}`);
      if (response.status === 204 || response.status === 200) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  pacthAddKoiFarm: async (
    data: FarmAddKoiBody[],
    id: string
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.patch(`/api/farms/${id}/kois`, data);

      if (response.status === 204 || response.status === 200) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
    return undefined;
  },
};
