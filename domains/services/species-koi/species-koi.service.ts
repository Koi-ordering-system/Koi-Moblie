import { axiosInstance } from "@/configs";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import {
  SpeciesKoiDetailResponse,
  SpeciesKoisBody,
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
  ): Promise<boolean | undefined> => {
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("minSize", data.minSize.toString());
      formData.append("maxSize", data.maxSize.toString());
      formData.append("price", data.price.toString());
      formData.append("colors", data.colors);
      formData.append("koiImages", JSON.stringify(data.koiImages));

      const response = await axiosInstance.post("/api/kois", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  updateSpeciesKoi: async (
    koiId: string,
    data: SpeciesKoisBody
  ): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.put(`/api/kois/${koiId}`, data);
      if (response.status === 204) {
        return true;
      }
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
