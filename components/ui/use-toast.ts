import { toast } from 'react-toastify';

export function useToast() {
  const showToast = (message: string, type: "success" | "error" = "success") => {
    if (type === "success") {
      toast.success(message); 
    } else if (type === "error") {
      toast.error(message);
    }
  };

  return { showToast };
}
