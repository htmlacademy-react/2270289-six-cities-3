
import { useAppSelector } from '../../hooks';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);
  return (error.message)
    ? <div className='error-message'>{error.message}</div>
    : null;
}
