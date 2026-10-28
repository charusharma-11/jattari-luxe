"use client";

import type { ReactNode } from "react";
import { requestContactModal } from "@/src/lib/contact-modal";

type ContactButtonProps = {
  children: ReactNode;
  className: string;
};

export default function ContactButton({
  children,
  className,
}: ContactButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={(event) => requestContactModal(event.currentTarget)}
    >
      {children}
    </button>
  );
}
