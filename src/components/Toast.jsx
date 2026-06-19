import { useApp } from '../context/AppContext';
import './Toast.css';

export default function Toast() {
  const { toast } = useApp();

  return (
    <div
      className={`toast ${toast.show ? 'show' : ''}`}
      style={{ background: toast.color }}
    >
      {toast.msg}
    </div>
  );
}
