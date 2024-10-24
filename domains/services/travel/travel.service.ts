import { axiosInstance } from "@/configs";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import { TravelsParamsRequest } from "@/domains/models/travels/travels-params.resquest";
import { TravelsResponse } from "@/domains/models/travels/travels.response";
import axios from "axios";

export const travelApi = {
  getListTravels: async (
    options?: TravelsParamsRequest
  ): Promise<RootResponse<Data<TravelsResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/api/travels", {
        params: options,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
