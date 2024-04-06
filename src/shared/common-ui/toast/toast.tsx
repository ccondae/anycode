import * as React from "react";
import { styled } from "styled-components";

import * as ToastPrimitives from "@radix-ui/react-toast";

const ToastProvider = ToastPrimitives.Provider;

const StyledViewport = styled(ToastPrimitives.Viewport)`
  position: fixed;
  z-index: 100;
  max-width: 420px;
  width: 100%;
  max-height: 100vh;
  gap: 4px;
  flex-direction: column-reverse;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    flex: none;
  }
`;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ ...props }, ref) => <StyledViewport ref={ref} {...props} />);

ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const StyledToast = styled(ToastPrimitives.Root)`
  padding: 4px;
  background-color: aqua;
`;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => <StyledToast className={className} ref={ref} {...props} />);

Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => <ToastPrimitives.Action ref={ref} className={className} {...props} />);

ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ ...props }, ref) => (
  <ToastPrimitives.Close toast-close="" ref={ref} {...props}>
    X
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;
type ToastActionElement = React.ReactElement<typeof ToastAction>;

export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, ToastAction, Toast };
