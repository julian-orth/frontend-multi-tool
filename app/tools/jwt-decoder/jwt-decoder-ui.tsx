"use client";
import React, { useState, useCallback } from "react";
import {
  Copy,
  Check,
  Download,
  AlertCircle,
  CheckCircle,
  Trash2,
  FileText,
  Shield,
  Clock,
  AlertTriangle,
  Info,
} from "lucide-react";
import PrimaryButton from "@/components/primary-button";
import {
  decodeJWT,
  analyzeJWTClaims,
  getAlgorithmInfo,
  generateSampleJWT,
  type JWTResult,
} from "./utils";

export function JWTDecoderUI() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<JWTResult | null>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleDecode = useCallback(() => {
    const decodeResult = decodeJWT(input);
    setResult(decodeResult);
  }, [input]);

  const handleClear = useCallback(() => {
    setInput("");
    setResult(null);
  }, []);

  const handleCopy = useCallback((text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 1500);
  }, []);

  const handleDownload = useCallback((content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `jwt-${filename}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }, []);

  const handleLoadSample = useCallback(() => {
    setInput(generateSampleJWT());
    setResult(null);
  }, []);

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setInput(content);
        setResult(null);
      };
      reader.onerror = () => {
        setResult({
          isValid: false,
          header: "",
          payload: "",
          signature: "",
          headerObj: null,
          payloadObj: null,
          error: "Failed to read file",
        });
      };
      reader.readAsText(file);

      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    []
  );

  // Analyze claims if payload is valid
  const claimsAnalysis = result?.payloadObj
    ? analyzeJWTClaims(result.payloadObj)
    : null;

  const algorithmInfo = result?.headerObj
    ? getAlgorithmInfo(result.headerObj)
    : null;

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-1 gap-2">
          <PrimaryButton onClick={handleDecode} className="px-6">
            Decode JWT
          </PrimaryButton>
          <PrimaryButton
            onClick={handleClear}
            variant="outline"
            className="px-4"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>

      {/* Load from File/Sample */}
      <div className="flex flex-wrap items-center gap-3 rounded-xl border border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-950/20">
        <input
          ref={fileInputRef}
          type="file"
          accept=".txt,.jwt,text/plain"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-gray-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Load from file
        </label>
        <button
          type="button"
          onClick={handleLoadSample}
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-100 dark:bg-gray-900 dark:text-red-400 dark:hover:bg-gray-800"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Load sample JWT
        </button>
      </div>

      {/* Input Section */}
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-between">
          <label
            className="text-sm font-semibold text-gray-700 dark:text-gray-300"
            htmlFor="jwt-input"
          >
            JWT Token Input
          </label>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {input.length.toLocaleString()} chars
          </div>
        </div>
        <textarea
          id="jwt-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JWT token here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c)"
          className="min-h-[150px] w-full rounded-xl border border-red-200 bg-white/80 p-4 font-mono text-sm text-gray-900 focus:border-red-500 focus:ring-2 focus:ring-red-500 dark:border-red-800 dark:bg-gray-900/60 dark:text-gray-100"
          spellCheck={false}
        />
      </div>

      {/* Validation status */}
      {result && !result.isValid && result.error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800/50 dark:bg-red-950/30">
          <AlertCircle
            className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="font-medium text-red-800 dark:text-red-200">Error</p>
            <p className="mt-1 text-sm text-red-700 dark:text-red-300">
              {result.error}
            </p>
          </div>
        </div>
      )}

      {result && result.isValid && (
        <>
          {/* Success message */}
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-800/50 dark:bg-red-950/30">
            <CheckCircle
              className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400"
              aria-hidden="true"
            />
            <div className="flex-1">
              <p className="font-medium text-red-800 dark:text-red-200">
                JWT Decoded Successfully
              </p>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                The token has been decoded. Review the header, payload, and
                signature below.
              </p>
            </div>
          </div>

          {/* Algorithm Warning */}
          {algorithmInfo?.isNone && (
            <div className="flex items-start gap-3 rounded-xl border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800/50 dark:bg-yellow-950/30">
              <AlertTriangle
                className="h-5 w-5 flex-shrink-0 text-yellow-600 dark:text-yellow-400"
                aria-hidden="true"
              />
              <div className="flex-1">
                <p className="font-medium text-yellow-800 dark:text-yellow-200">
                  Security Warning
                </p>
                <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-300">
                  This JWT uses the &quot;none&quot; algorithm, which provides no
                  cryptographic protection. This is highly insecure and should
                  never be used in production.
                </p>
              </div>
            </div>
          )}

          {/* Expiration Warning */}
          {claimsAnalysis?.isExpired && (
            <div className="flex items-start gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 dark:border-orange-800/50 dark:bg-orange-950/30">
              <Clock
                className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400"
                aria-hidden="true"
              />
              <div className="flex-1">
                <p className="font-medium text-orange-800 dark:text-orange-200">
                  Token Expired
                </p>
                <p className="mt-1 text-sm text-orange-700 dark:text-orange-300">
                  This JWT has expired {claimsAnalysis.expirationInfo}
                </p>
              </div>
            </div>
          )}

          {/* Algorithm Info */}
          {algorithmInfo && (
            <div className="rounded-xl border border-red-200 bg-red-50/30 p-6 dark:border-red-800 dark:bg-red-950/10">
              <div className="mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Signing Algorithm
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-xl font-bold text-red-700 dark:text-red-300">
                    {algorithmInfo.algorithm}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {algorithmInfo.description}
                </p>
              </div>
            </div>
          )}

          {/* Decoded Sections */}
          <div className="space-y-6">
            {/* Header */}
            <div className="rounded-xl border border-red-200 bg-white p-6 dark:border-red-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Header
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(result.header, "header")}
                    className="flex cursor-pointer items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    {copiedSection === "header" ? (
                      <>
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        Copy
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownload(result.header, "header")}
                    className="flex cursor-pointer items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Download className="h-3 w-3" aria-hidden="true" />
                    Download
                  </button>
                </div>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-red-50/50 p-4 dark:bg-red-950/20">
                <code className="text-sm text-gray-900 dark:text-gray-100">
                  {result.header}
                </code>
              </pre>
            </div>

            {/* Payload */}
            <div className="rounded-xl border border-red-200 bg-white p-6 dark:border-red-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Payload
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(result.payload, "payload")}
                    className="flex cursor-pointer items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    {copiedSection === "payload" ? (
                      <>
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        Copy
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownload(result.payload, "payload")}
                    className="flex cursor-pointer items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    <Download className="h-3 w-3" aria-hidden="true" />
                    Download
                  </button>
                </div>
              </div>
              <pre className="overflow-x-auto rounded-lg bg-red-50/50 p-4 dark:bg-red-950/20">
                <code className="text-sm text-gray-900 dark:text-gray-100">
                  {result.payload}
                </code>
              </pre>
            </div>

            {/* Claims Analysis */}
            {claimsAnalysis && claimsAnalysis.claims.length > 0 && (
              <div className="rounded-xl border border-red-200 bg-white p-6 dark:border-red-800 dark:bg-gray-900">
                <div className="mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Claims Analysis
                  </h3>
                </div>
                <div className="space-y-4">
                  {claimsAnalysis.claims.map((claim) => (
                    <div
                      key={claim.key}
                      className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10"
                    >
                      <div className="mb-1 flex items-baseline gap-2">
                        <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                          {claim.key}
                        </span>
                      </div>
                      <div className="mb-2 text-xs text-gray-600 dark:text-gray-400">
                        {claim.description}
                      </div>
                      <div className="font-mono text-sm break-words text-gray-900 dark:text-gray-100">
                        {claim.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Signature */}
            <div className="rounded-xl border border-red-200 bg-white p-6 dark:border-red-800 dark:bg-gray-900">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  Signature
                </h3>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(result.signature, "signature")}
                    className="flex cursor-pointer items-center gap-1 text-xs text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  >
                    {copiedSection === "signature" ? (
                      <>
                        <Check className="h-3 w-3" aria-hidden="true" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto rounded-lg bg-red-50/50 p-4 dark:bg-red-950/20">
                <code className="font-mono text-sm break-all text-gray-900 dark:text-gray-100">
                  {result.signature || "(No signature)"}
                </code>
              </div>
              <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                The signature is used to verify that the sender of the JWT is
                who it claims to be and that the message wasn&apos;t changed along
                the way. To verify the signature, you need the secret key or
                public key (depending on the algorithm used).
              </p>
            </div>
          </div>
        </>
      )}

      {/* Info Section */}
      <div className="rounded-xl border border-red-200 bg-red-50/30 p-6 dark:border-red-800 dark:bg-red-950/10">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          About JWT Tokens
        </h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            JSON Web Tokens (JWT) are a compact, URL-safe means of representing
            claims between two parties. A JWT consists of three parts separated
            by dots: Header.Payload.Signature
          </p>
          <ul className="mt-2 ml-5 list-disc space-y-1">
            <li>
              <strong>Header:</strong> Contains the token type (JWT) and signing
              algorithm (e.g., HS256, RS256)
            </li>
            <li>
              <strong>Payload:</strong> Contains the claims (statements about
              the user and additional metadata)
            </li>
            <li>
              <strong>Signature:</strong> Used to verify the token&apos;s integrity
              and authenticity
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
            ⚠️ Note: This tool only decodes and displays JWT contents. It does
            not verify signatures or validate tokens. All processing happens in
            your browser for privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
