import { useEffect } from "react";

export interface KeyboardNavProps {
  onNext?: () => void;
  onPrev?: () => void;
  onArrowRight?: () => void;
  onArrowLeft?: () => void;
  onArrowUp?: () => void;
  onArrowDown?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
  onNumber?: (number: number) => void;
  onNumberKey?: (index: number) => void;
}

export const useKeyboardNav = ({
  onNext,
  onPrev,
  onArrowRight,
  onArrowLeft,
  onArrowUp,
  onArrowDown,
  onEnter,
  onEscape,
  onNumber,
  onNumberKey,
}: KeyboardNavProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when the user is typing in form controls
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        if (e.key === 'Escape') {
          onEscape?.();
        }
        return;
      }

      if (e.key === "ArrowRight") {
        onArrowRight?.();
        onNext?.();
      } else if (e.key === "ArrowLeft") {
        onArrowLeft?.();
        onPrev?.();
      } else if (e.key === "ArrowUp") {
        onArrowUp?.();
        onPrev?.();
      } else if (e.key === "ArrowDown") {
        onArrowDown?.();
        onNext?.();
      } else if (e.key === "Enter") {
        onEnter?.();
      } else if (e.key === "Escape") {
        onEscape?.();
      } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
        const num = parseInt(e.key, 10);
        onNumber?.(num);
        onNumberKey?.(num - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    onNext,
    onPrev,
    onArrowRight,
    onArrowLeft,
    onArrowUp,
    onArrowDown,
    onEnter,
    onEscape,
    onNumber,
    onNumberKey,
  ]);
};
