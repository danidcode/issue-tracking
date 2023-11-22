import {useAuth0} from "@auth0/auth0-react";
import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../queries";

export const useAccessToken = () => {
  const {getAccessTokenSilently} = useAuth0();

  const getAccessToken = async (): Promise<string> => {
    const token = await getAccessTokenSilently();
    return token;
  };

  const {data: accessToken} = useQuery({
    queryKey: [queryKeys.accessToken],
    queryFn: getAccessToken,
  });

  return {accessToken};
};
