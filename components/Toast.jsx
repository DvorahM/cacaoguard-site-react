import { createContext, useCallback, useContext, useRef, useState } from 'react';

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const timer = useRef(null);

  const toast = useCallback((text) => {
    setMessage(text);
    setVisible(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 2200);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="appx">
        <div className={`toast${visible ? ' show' : ''}`} role="status">
          {message}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

// const toast = useToast();  toast('Settings saved');
export const useToast = () => useContext(ToastContext);
