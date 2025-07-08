// components/ui/use-toast.ts
import { useCallback } from 'react'

export const useToast = () => {
  const show = useCallback((message: string) => {
    alert(message) // remplace par une lib comme sonner ou react-toastify si besoin
  }, [])

  return { toast: { show } }
}
