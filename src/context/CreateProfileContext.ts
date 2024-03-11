import { createContext } from 'react';

interface CreateProfileContext {
  isCreateProfileModalOpen: boolean;
  toggleCreateProfileModal: () => void;
  closeCreateProfileModal: (value: false) => void;
}

const CreateProfileContext = createContext<CreateProfileContext>({
  isCreateProfileModalOpen: false,
  toggleCreateProfileModal: () => null,
  closeCreateProfileModal: () => null,
});

export default CreateProfileContext;
