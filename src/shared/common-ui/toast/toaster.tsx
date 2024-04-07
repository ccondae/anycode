import { Toast, ToastProvider, ToastViewport } from "./toast";
import { useToast } from "./use-toast";

export const Toaster = () => {
  const { toasts } = useToast();
  return (
    <ToastProvider duration={5000}>
      {toasts.map(({ id, title, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className=" grid ">{title}</div>
          {action}
        </Toast>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
};
