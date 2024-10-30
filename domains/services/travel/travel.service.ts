import { axiosInstance } from "@/configs/axios-instance";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import { TravelsBodyRequest } from "@/domains/models/travels";
import { TravelDetailResponse } from "@/domains/models/travels/travel-detail.response";
import { TravelsParamsRequest } from "@/domains/models/travels/travels-params.resquest";
import { TravelsResponse } from "@/domains/models/travels/travels.response";
import axios from "axios";

export const travelApi = {
  getListTravels: async (
    options?: TravelsParamsRequest,
  ): Promise<RootResponse<Data<TravelsResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/trips", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  getTravel: async (
    id: string,
  ): Promise<RootResponse<TravelDetailResponse> | undefined> => {
    try {
      const response = await axiosInstance.get(`/api/trips/${id}`);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  createTravel: async (
    data: TravelsBodyRequest,
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.post("/api/trips", data);

      if (response.status === 201) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  updateTravel: async (
    id: string,
    data: TravelsBodyRequest,
  ): Promise<RootResponse<null> | undefined> => {
    try {
      const response = await axiosInstance.put(`/api/trips/${id}`, data);

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteTravel: async (id: string): Promise<boolean | undefined> => {
    try {
      await axiosInstance.delete(`/api/trips/${id}`);

      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  patchTravelApprove: async (id: string): Promise<boolean | undefined> => {
    try {
      await axiosInstance.patch(`/api/trips/${id}/approve`);

      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  patchTravelDeny: async (id: string): Promise<boolean | undefined> => {
    try {
      await axiosInstance.patch(`/api/trips/${id}/deny`);

      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
