import { useLocalStorage } from "./useLocalStorage";

export function useBackendUrl() {
  const [backendUrl, setBackendUrl] = useLocalStorage("backend_url", null);
  return {
    backendUrl,
    saveBackendUrl: setBackendUrl,
  };
}
