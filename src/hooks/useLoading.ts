import { create } from "zustand"

interface LoadingState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isLoadingPage: boolean;
  setIsLoadingPage: (isLoadingPage: boolean) => void;
}

const useLoading = create<LoadingState>((set) => ({
  isLoading: false,
  isLoadingPage: true,

  setIsLoading: (isLoading) => set({ isLoading }),
  setIsLoadingPage: (isLoadingPage) => set({ isLoadingPage }),
}))

export default useLoading