"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import PrimaryButton from "@/components/primary-button";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <PrimaryButton
      type="button"
      aria-label="Copy UUID"
      variant={copied ? "solid" : "outline"}
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className={`w-12 flex-shrink-0 px-0 ${copied ? "ring-2 ring-teal-400" : ""}`}
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
    </PrimaryButton>
  );
}
