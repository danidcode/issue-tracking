import axios from "axios";
import {Issue} from "../interfaces/Issue";
import {useAccessToken} from "./useToken";
import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../queries";

export const useIssues = () => {
  const {accessToken} = useAccessToken();

  const getIssues = async (): Promise<Issue[] | null> => {
    if (!accessToken) return null;
    const response = await axios.get(
      `${import.meta.env.VITE_API_DOMAIN}/get-issues`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const {data: issues} = response;

    return issues;
  };

  const {data: issues} = useQuery({
    queryKey: [queryKeys.issues],
    queryFn: getIssues,
  });

  return {issues};
};
