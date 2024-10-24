import { axiosInstance } from "@/configs";
import {
  FeedbacksBodyRequest,
  FeedbacksParamsRequest,
} from "@/domains/models/feedbacks";
import { Data, RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

export const apiFeedbacks = {
  createFeedback: async (
    data: FeedbacksBodyRequest
  ): Promise<RootResponse<boolean> | undefined> => {
    try {
      await axiosInstance.post("/api/feedbacks", data);
      true;
    } catch (error) {
      return undefined;
    }
  },

  getFeedBacks: async (
    options?: FeedbacksParamsRequest
  ): Promise<RootResponse<Data<FeedbacksBodyRequest[]>> | undefined> => {
    try {
      const { data } = await axiosInstance.get("/api/feedbacks", {
        params: options,
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
