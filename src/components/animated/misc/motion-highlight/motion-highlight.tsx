"use client";

import { AnimatePresence, type Transition, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Children, cloneElement, createContext, isValidElement, useCallback, useContext, useEffect, useId, useImperativeHandle, useRef, useState } from "react";
import type { ComponentProps, ElementType, MouseEvent, ReactElement, ReactNode, Ref } from "react";

type MotionHighlightMode = "children" | "parent";

type Bounds = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type MotionHighlightContextType<T extends string> = {
  mode: MotionHighlightMode;
  activeValue: T | null;
  setActiveValue: (value: T | null) => void;
  setBounds: (bounds: DOMRect) => void;
  clearBounds: () => void;
  id: string;
  hover: boolean;
  className?: string;
  activeClassName?: string;
  setActiveClassName: (className: string) => void;
  transition?: Transition;
  disabled?: boolean;
  enabled?: boolean;
  exitDelay?: number;
  forceUpdateBounds?: boolean;
};

const MotionHighlightContext = createContext<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  MotionHighlightContextType<any> | undefined
>(undefined);

function useMotionHighlight<T extends string>(): MotionHighlightContextType<T> {
  const context = useContext(MotionHighlightContext);
  if (!context) {
    throw new Error("useMotionHighlight must be used within a MotionHighlightProvider");
  }
  return context as unknown as MotionHighlightContextType<T>;
}

type BaseMotionHighlightProps<T extends string> = {
  mode?: MotionHighlightMode;
  value?: T | null;
  defaultValue?: T | null;
  onValueChange?: (value: T | null) => void;
  className?: string;
  transition?: Transition;
  hover?: boolean;
  disabled?: boolean;
  enabled?: boolean;
  exitDelay?: number;
};

type ParentModeMotionHighlightProps = {
  boundsOffset?: Partial<Bounds>;
  containerClassName?: string;
  forceUpdateBounds?: boolean;
};

type ControlledParentModeMotionHighlightProps<T extends string> = BaseMotionHighlightProps<T> &
  ParentModeMotionHighlightProps & {
    mode: "parent";
    controlledItems: true;
    children: ReactNode;
  };

type ControlledChildrenModeMotionHighlightProps<T extends string> = BaseMotionHighlightProps<T> & {
  mode?: "children" | undefined;
  controlledItems: true;
  children: ReactNode;
};

type UncontrolledParentModeMotionHighlightProps<T extends string> = BaseMotionHighlightProps<T> &
  ParentModeMotionHighlightProps & {
    mode: "parent";
    controlledItems?: false;
    itemsClassName?: string;
    children: ReactElement | ReactElement[];
  };

type UncontrolledChildrenModeMotionHighlightProps<T extends string> = BaseMotionHighlightProps<T> & {
  mode?: "children";
  controlledItems?: false;
  itemsClassName?: string;
  children: ReactElement | ReactElement[];
};

type MotionHighlightProps<T extends string> = ComponentProps<"div"> &
  (
    | ControlledParentModeMotionHighlightProps<T>
    | ControlledChildrenModeMotionHighlightProps<T>
    | UncontrolledParentModeMotionHighlightProps<T>
    | UncontrolledChildrenModeMotionHighlightProps<T>
  ) & { as?: ElementType };

function MotionHighlight<T extends string>({ ref, ...props }: MotionHighlightProps<T>) {
  const {
    children,
    value,
    defaultValue,
    onValueChange,
    className,
    transition = { type: "spring", stiffness: 350, damping: 35 },
    hover = false,
    enabled = true,
    controlledItems,
    disabled = false,
    exitDelay = 0.2,
    mode = "children",
    as: Component = "div",
  } = props;

  const localRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const [activeValue, setActiveValue] = useState<T | null>(value ?? defaultValue ?? null);
  const [boundsState, setBoundsState] = useState<Bounds | null>(null);
  const [activeClassNameState, setActiveClassNameState] = useState<string>("");

  const safeSetActiveValue = useCallback(
    (id: T | null) => {
      setActiveValue((prev) => (prev === id ? prev : id));
      if (id !== activeValue) onValueChange?.(id as T);
    },
    [activeValue, onValueChange]
  );

  const safeSetBounds = useCallback(
    (bounds: DOMRect) => {
      if (!localRef.current) return;

      const boundsOffset = (props as ParentModeMotionHighlightProps)?.boundsOffset ?? {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      };

      const containerRect = localRef.current.getBoundingClientRect();
      const newBounds: Bounds = {
        top: bounds.top - containerRect.top + (boundsOffset.top ?? 0),
        left: bounds.left - containerRect.left + (boundsOffset.left ?? 0),
        width: bounds.width + (boundsOffset.width ?? 0),
        height: bounds.height + (boundsOffset.height ?? 0),
      };

      setBoundsState((prev) => {
        if (prev && prev.top === newBounds.top && prev.left === newBounds.left && prev.width === newBounds.width && prev.height === newBounds.height) {
          return prev;
        }
        return newBounds;
      });
    },
    [props]
  );

  const clearBounds = useCallback(() => {
    setBoundsState((prev) => (prev === null ? prev : null));
  }, []);

  useEffect(() => {
    if (value !== undefined) setActiveValue(value);
    else if (defaultValue !== undefined) setActiveValue(defaultValue);
  }, [value, defaultValue]);

  const id = useId();

  useEffect(() => {
    if (mode !== "parent") return;
    const container = localRef.current;
    if (!container) return;

    const onScroll = () => {
      if (!activeValue) return;
      const activeEl = container.querySelector<HTMLElement>(`[data-value="${activeValue}"][data-highlight="true"]`);
      if (activeEl) safeSetBounds(activeEl.getBoundingClientRect());
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [mode, activeValue, safeSetBounds]);

  const render = useCallback(
    (children: ReactNode) => {
      if (mode === "parent") {
        return (
          <Component ref={localRef} data-slot="motion-highlight-container" className={cn("relative", (props as ParentModeMotionHighlightProps)?.containerClassName)}>
            <AnimatePresence initial={false}>
              {boundsState && (
                <motion.div
                  data-slot="motion-highlight"
                  animate={{
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 1,
                  }}
                  initial={{
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 0,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      ...transition,
                      delay: (transition?.delay ?? 0) + (exitDelay ?? 0),
                    },
                  }}
                  transition={transition}
                  className={cn("absolute bg-primary/25 z-0", className, activeClassNameState)}
                />
              )}
            </AnimatePresence>
            {children}
          </Component>
        );
      }

      return children;
    },
    [mode, props, boundsState, transition, exitDelay, className, activeClassNameState, Component]
  );

  return (
    <MotionHighlightContext.Provider
      value={{
        mode,
        activeValue,
        setActiveValue: safeSetActiveValue,
        id,
        hover,
        className,
        transition,
        disabled,
        enabled,
        exitDelay,
        setBounds: safeSetBounds,
        clearBounds,
        activeClassName: activeClassNameState,
        setActiveClassName: setActiveClassNameState,
        forceUpdateBounds: (props as ParentModeMotionHighlightProps)?.forceUpdateBounds,
      }}
    >
      {enabled
        ? controlledItems
          ? render(children)
          : render(
              Children.map(children, (child, index) => (
                <MotionHighlightItem key={index} className={props?.itemsClassName}>
                  {child}
                </MotionHighlightItem>
              ))
            )
        : children}
    </MotionHighlightContext.Provider>
  );
}

function getNonOverridingDataAttributes(element: ReactElement, dataAttributes: Record<string, unknown>): Record<string, unknown> {
  return Object.keys(dataAttributes).reduce<Record<string, unknown>>((acc, key) => {
    if ((element.props as Record<string, unknown>)[key] === undefined) {
      acc[key] = dataAttributes[key];
    }
    return acc;
  }, {});
}

type ExtendedChildProps = ComponentProps<"div"> & {
  id?: string;
  ref?: Ref<HTMLElement>;
  "data-active"?: string;
  "data-value"?: string;
  "data-disabled"?: boolean;
  "data-highlight"?: boolean;
  "data-slot"?: string;
};

type MotionHighlightItemProps = ComponentProps<"div"> & {
  children: ReactElement;
  id?: string;
  value?: string;
  defaultValue?: string;
  className?: string;
  transition?: Transition;
  activeClassName?: string;
  disabled?: boolean;
  exitDelay?: number;
  asChild?: boolean;
  forceUpdateBounds?: boolean;
};

function MotionHighlightItem({
  ref,
  children,
  id,
  value,
  defaultValue,
  className,
  transition,
  disabled = false,
  activeClassName,
  exitDelay,
  asChild = false,
  forceUpdateBounds,
  ...props
}: MotionHighlightItemProps) {
  const itemId = useId();
  const {
    activeValue,
    setActiveValue,
    mode,
    setBounds,
    clearBounds,
    hover,
    enabled,
    className: contextClassName,
    transition: contextTransition,
    id: contextId,
    disabled: contextDisabled,
    exitDelay: contextExitDelay,
    forceUpdateBounds: contextForceUpdateBounds,
    setActiveClassName,
  } = useMotionHighlight();

  const element = children as ReactElement<ExtendedChildProps>;
  const childValue = id ?? value ?? element.props?.["data-value"] ?? element.props?.id ?? itemId;
  const isActive = activeValue === childValue;
  const isDisabled = disabled === undefined ? contextDisabled : disabled;
  const itemTransition = transition ?? contextTransition;

  const localRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  useEffect(() => {
    if (mode !== "parent") return;
    let rafId: number;
    let previousBounds: Bounds | null = null;
    const shouldUpdateBounds = forceUpdateBounds === true || (contextForceUpdateBounds && forceUpdateBounds !== false);

    const updateBounds = () => {
      if (!localRef.current) return;

      const bounds = localRef.current.getBoundingClientRect();

      if (shouldUpdateBounds) {
        if (
          previousBounds &&
          previousBounds.top === bounds.top &&
          previousBounds.left === bounds.left &&
          previousBounds.width === bounds.width &&
          previousBounds.height === bounds.height
        ) {
          rafId = requestAnimationFrame(updateBounds);
          return;
        }
        previousBounds = bounds;
        rafId = requestAnimationFrame(updateBounds);
      }

      setBounds(bounds);
    };

    if (isActive) {
      updateBounds();
      setActiveClassName(activeClassName ?? "");
    } else if (!activeValue) clearBounds();

    if (shouldUpdateBounds) return () => cancelAnimationFrame(rafId);
  }, [mode, isActive, activeValue, setBounds, clearBounds, activeClassName, setActiveClassName, forceUpdateBounds, contextForceUpdateBounds]);

  if (!isValidElement(children)) return children;

  const dataAttributes = {
    "data-active": isActive ? "true" : "false",
    "aria-selected": isActive,
    "data-disabled": isDisabled,
    "data-value": childValue,
    "data-highlight": true,
  };

  const commonHandlers = hover
    ? {
        onMouseEnter: (e: MouseEvent<HTMLDivElement>) => {
          setActiveValue(childValue);
          element.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: MouseEvent<HTMLDivElement>) => {
          setActiveValue(defaultValue ?? null);
          element.props.onMouseLeave?.(e);
        },
      }
    : {
        onClick: (e: MouseEvent<HTMLDivElement>) => {
          setActiveValue(childValue);
          element.props.onClick?.(e);
        },
      };

  if (asChild) {
    if (mode === "children") {
      return cloneElement(
        element,
        {
          key: childValue,
          ref: localRef,
          className: cn("relative", element.props.className),
          ...getNonOverridingDataAttributes(element, {
            ...dataAttributes,
            "data-slot": "motion-highlight-item-container",
          }),
          ...commonHandlers,
          ...props,
        },
        <>
          <AnimatePresence initial={false}>
            {isActive && !isDisabled && (
              <motion.div
                layoutId={`transition-background-${contextId}`}
                data-slot="motion-highlight"
                className={cn("absolute inset-0 bg-primary/25 z-0", contextClassName, activeClassName)}
                transition={itemTransition}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: {
                    ...itemTransition,
                    delay: (itemTransition?.delay ?? 0) + (exitDelay ?? contextExitDelay ?? 0),
                  },
                }}
                {...dataAttributes}
              />
            )}
          </AnimatePresence>

          <div data-slot="motion-highlight-item" className={cn("relative z-[1]", className)} {...dataAttributes}>
            {children}
          </div>
        </>
      );
    }

    return cloneElement(element, {
      ref: localRef,
      ...getNonOverridingDataAttributes(element, {
        ...dataAttributes,
        "data-slot": "motion-highlight-item",
      }),
      ...commonHandlers,
    });
  }

  return enabled ? (
    <div
      key={childValue}
      ref={localRef}
      data-slot="motion-highlight-item-container"
      className={cn(mode === "children" && "relative", className)}
      {...dataAttributes}
      {...props}
      {...commonHandlers}
    >
      {mode === "children" && (
        <AnimatePresence initial={false}>
          {isActive && !isDisabled && (
            <motion.div
              layoutId={`transition-background-${contextId}`}
              data-slot="motion-highlight"
              className={cn("absolute inset-0 bg-primary/25 z-0", contextClassName, activeClassName)}
              transition={itemTransition}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  ...itemTransition,
                  delay: (itemTransition?.delay ?? 0) + (exitDelay ?? contextExitDelay ?? 0),
                },
              }}
              {...dataAttributes}
            />
          )}
        </AnimatePresence>
      )}

      {cloneElement(element, {
        className: cn("relative z-[1]", element.props.className),
        ...getNonOverridingDataAttributes(element, {
          ...dataAttributes,
          "data-slot": "motion-highlight-item",
        }),
      })}
    </div>
  ) : (
    children
  );
}

export { MotionHighlight, MotionHighlightItem, useMotionHighlight, type MotionHighlightProps, type MotionHighlightItemProps };
