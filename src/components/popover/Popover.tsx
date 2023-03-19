import { Placement } from "@popperjs/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { isEmpty } from "../../lib/validation";
import dlv from "dlv";

type PopoverProps = {
  visibility: boolean;
  children: React.ReactNode;
  content: () => React.ReactNode;
  placement?: Placement;
  contentWidth: boolean;
};

const Popover: React.FC<PopoverProps> = ({
  visibility,
  children,
  content,
  placement = "bottom-start",
  contentWidth,
}) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    useState<HTMLDivElement | null>(null);
  const [showPopover, setShowPopover] = useState(false);
  const popoverParentRef = useRef<HTMLDivElement>(null);

  const childRef = useMemo(() => {
    let child = dlv(referenceElement || {}, "children.0", referenceElement);
    return child;
  }, [referenceElement]);

  const { styles, attributes } = usePopper(childRef, popperElement, {
    placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 5],
        },
      },
    ],
  });

  useEffect(() => {
    setShowPopover(visibility);
  }, [visibility]);

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOutsideClick = (e: any) => {
    const parentRef = popoverParentRef.current;
    if (parentRef && !parentRef.contains(e.target)) {
      setShowPopover(false);
    }
  };

  const popoverStyle = useMemo(() => {
    let refWidth = (childRef || {}).clientWidth;
    let currStyle = styles.popper;
    if (!isEmpty(refWidth) && contentWidth) {
      currStyle = { ...currStyle, width: `${refWidth}px` };
    }
    return currStyle;
  }, [childRef, contentWidth, styles.popper]);

  return (
    <>
      <div
        ref={(ref) => setReferenceElement(ref)}
        onClick={() => setShowPopover(true)}
        className="flex"
      >
        {children}
      </div>

      {showPopover && (
        <div ref={popoverParentRef} className="animate-popover-bounce">
          <div
            ref={(ref) => setPopperElement(ref)}
            style={popoverStyle}
            {...attributes.popper}
            className="z-50 shadow-lg rounded-md bg-primary text-secondary border border-shadow"
          >
            {content()}
          </div>
        </div>
      )}
    </>
  );
};

export default Popover;
