import { toast } from 'react-toastify';
import { toastError } from './toast';

const errorMessageHandler = (errObj: any) => {
  if (!errObj?.isSuccess && errObj?.error && errObj?.error?.errorMessage) {
    return toastError(errObj?.error.errorMessage);
  }
  return toast('Something went wrong.');
};
export default errorMessageHandler;
