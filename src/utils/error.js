import { toast } from 'react-toastify';

export function showError(error) {
  if (!error.response) {
    toast.error('Network error!');
  }
}
