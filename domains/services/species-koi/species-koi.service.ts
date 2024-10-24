import { axiosInstance } from "@/configs";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import {
  SpeciesKoiDetailResponse,
  SpeciesKoisBody,
  SpeciesKoisEditResponse,
  SpeciesKoisParams,
  SpeciesKoisResponse,
} from "@/domains/models/species-kois";
import axios from "axios";

export const speciesKoiApi = {
  getSpeciesKoiList: async (
    options?: SpeciesKoisParams
  ): Promise<RootResponse<Data<SpeciesKoisResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/kois", {
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

  getSpeciesKoiDetail: async (
    id: string
  ): Promise<RootResponse<SpeciesKoiDetailResponse> | undefined> => {
    try {
      const response = await axiosInstance.get(`/api/kois/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  createSpeciesKoi: async (
    data: SpeciesKoisBody
  ): Promise<RootResponse<SpeciesKoisEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.post("/api/kois", data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  updateSpeciesKoi: async (
    id: string,
    data: SpeciesKoisBody
  ): Promise<RootResponse<SpeciesKoisEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.put(`/api/kois/${id}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteSpeciesKoi: async (
    id: string
  ): Promise<RootResponse<null> | undefined> => {
    try {
      const response = await axiosInstance.delete(`/api/kois/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
