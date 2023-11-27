import { useEffect, useState } from "react";

const useEndpointStatus = (endpointUrl) => {
  const [isEndpointActive, setIsEndpointActive] = useState(null);

  useEffect(() => {
    const checkEndpoint = async () => {
      try {
        const response = await fetch(endpointUrl, { mode: "no-cors" });
        if (response.ok) {
          setIsEndpointActive(true);
        } else {
          // set active even when when cross origin request is not allowed
          setIsEndpointActive(true);
        }
      } catch (error) {
        setIsEndpointActive(false);
      }
    };

    if (
      endpointUrl === null ||
      endpointUrl === undefined ||
      endpointUrl === ""
    ) {
      setIsEndpointActive(false);
    } else {
      checkEndpoint();
    }
  }, [endpointUrl]);
  return isEndpointActive;
};

export default useEndpointStatus;
