import { useEffect, useState } from "react";

export function useBackendModal() {
  const [showBackendModal, setShowBackendModal] = useState(false);

  const openBackendModal = () => setShowBackendModal(true);
  const closeBackendModal = () => setShowBackendModal(false);

  useEffect(() => {
    function onOpenFromAuth() {
      openBackendModal();
    }

    window.addEventListener("backend:open-config", onOpenFromAuth);
    return () => window.removeEventListener("backend:open-config", onOpenFromAuth);
  }, []);

  return {
    showBackendModal,
    openBackendModal,
    closeBackendModal,
  };
}
