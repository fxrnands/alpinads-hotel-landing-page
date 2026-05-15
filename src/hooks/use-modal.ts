import { useCallback, useState } from 'react';

type ModalVisibilityState = Record<string, boolean>;

const createInitialModalState = (modals: string[]): ModalVisibilityState => {
  return modals.reduce((state, modal) => {
    state[modal] = false;
    return state;
  }, {} as ModalVisibilityState);
};

const useModal = (modalTypes: string[]) => {
  const [modalVisibility, setModalVisibility] = useState<ModalVisibilityState>(
    createInitialModalState(modalTypes)
  );

  const openModal = useCallback((modal: string) => {
    setModalVisibility((prev) =>
      Object.fromEntries(Object.keys(prev).map((key) => [key, key === modal]))
    );
  }, []);

  const closeModal = useCallback((modal: string) => {
    setModalVisibility((prev) => ({
      ...prev,
      [modal]: false,
    }));
  }, []);

  const closeAllModals = useCallback(() => {
    setModalVisibility(createInitialModalState(modalTypes));
  }, [modalTypes]);

  return {
    modalVisibility,
    openModal,
    closeModal,
    closeAllModals,
  };
};

export default useModal;
