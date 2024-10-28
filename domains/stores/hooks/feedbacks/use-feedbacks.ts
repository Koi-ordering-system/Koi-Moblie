import { FeedbacksParamsRequest } from "@/domains/models/feedbacks";
import { QueryKey } from "@/domains/query-key";
import { apiFeedbacks } from "@/domains/services/feedbacks/feedbacks.service";
import { useQuery } from "@tanstack/react-query";

interface FeedbackHook {
  options?: FeedbacksParamsRequest;
}

export const useFeedbacks = ({ options }: FeedbackHook) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKey.LIST_FEEDBACKS, ...(options ? [options] : [])],
    queryFn: () => apiFeedbacks.getFeedBacks(options),
  });

  return {
    data,
    isLoading,
    error,
  };
};
