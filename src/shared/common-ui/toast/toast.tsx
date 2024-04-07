import * as React from "react";
import { keyframes, styled } from "styled-components";

import * as ToastPrimitives from "@radix-ui/react-toast";

const ToastProvider = ToastPrimitives.Provider;

const StyledViewport = styled(ToastPrimitives.Viewport)`
  position: fixed;
  z-index: 100;
  max-width: 420px;
  width: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
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

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const StyledToast = styled(ToastPrimitives.Root)`
  background-color: #26144e; // 프라이머리 컬러
  color: #89809b; // 세컨더리 컬러
  padding: 16px 20px;
  margin-top: 12px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation:
    ${fadeIn} 0.5s ease-out forwards,
    ${fadeOut} 0.5s 2.5s ease-in forwards;
  opacity: 0; // 애니메이션이 시작되기 전에 토스트를 숨깁니다.
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
