import React from "react";
import { StyledSelect } from "@/components/styled-select";
import { useLocale } from "@/lib/contexts/locale-context";
import type { QRContentType } from "./utils";

interface ContentFormsProps {
  contentType: QRContentType;
  content: string;
  onContentChange: (value: string) => void;
  // WiFi fields
  wifiSsid: string;
  wifiPassword: string;
  wifiEncryption: "WPA" | "WEP" | "nopass";
  onWifiSsidChange: (value: string) => void;
  onWifiPasswordChange: (value: string) => void;
  onWifiEncryptionChange: (value: "WPA" | "WEP" | "nopass") => void;
  // vCard fields
  vcardName: string;
  vcardPhone: string;
  vcardEmail: string;
  vcardOrg: string;
  vcardUrl: string;
  onVcardNameChange: (value: string) => void;
  onVcardPhoneChange: (value: string) => void;
  onVcardEmailChange: (value: string) => void;
  onVcardOrgChange: (value: string) => void;
  onVcardUrlChange: (value: string) => void;
  // Email fields
  emailTo: string;
  emailSubject: string;
  emailBody: string;
  onEmailToChange: (value: string) => void;
  onEmailSubjectChange: (value: string) => void;
  onEmailBodyChange: (value: string) => void;
  // SMS fields
  smsPhone: string;
  smsMessage: string;
  onSmsPhoneChange: (value: string) => void;
  onSmsMessageChange: (value: string) => void;
}

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100";

const labelClass =
  "mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300";

export function ContentForms(props: ContentFormsProps) {
  const { contentType } = props;
  const { locale } = useLocale();

  if (contentType === "url" || contentType === "text") {
    return (
      <div>
        <label htmlFor="content-input" className={labelClass}>
          {contentType === "url" ? "Website URL" : "Text Content"}
        </label>
        <textarea
          id="content-input"
          value={props.content}
          onChange={(e) => props.onContentChange(e.target.value)}
          placeholder={
            contentType === "url"
              ? "https://example.com"
              : "Enter your text here..."
          }
          rows={4}
          className={inputClass}
        />
      </div>
    );
  }

  if (contentType === "wifi") {
    return (
      <div className="space-y-4">
        <div>
          <label htmlFor="wifi-ssid" className={labelClass}>
            Network Name (SSID)
          </label>
          <input
            id="wifi-ssid"
            type="text"
            value={props.wifiSsid}
            onChange={(e) => props.onWifiSsidChange(e.target.value)}
            placeholder="MyWiFiNetwork"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="wifi-password" className={labelClass}>
            Password
          </label>
          <input
            id="wifi-password"
            type="text"
            value={props.wifiPassword}
            onChange={(e) => props.onWifiPasswordChange(e.target.value)}
            placeholder="password123"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="wifi-encryption" className={labelClass}>
            Security Type
          </label>
          <StyledSelect
            id="wifi-encryption"
            value={props.wifiEncryption}
            onChange={(v) =>
              props.onWifiEncryptionChange(v as "WPA" | "WEP" | "nopass")
            }
            options={[
              { value: "WPA", label: "WPA/WPA2" },
              { value: "WEP", label: "WEP" },
              {
                value: "nopass",
                label:
                  locale === "de"
                    ? "Keine (Offenes Netzwerk)"
                    : "None (Open Network)",
              },
            ]}
            className={inputClass}
            listClassName="border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
            optionActiveClassName="bg-purple-600 font-medium text-white dark:bg-purple-500"
            optionClassName="text-gray-700 hover:bg-purple-50 dark:text-gray-300 dark:hover:bg-gray-800"
          />
        </div>
      </div>
    );
  }

  if (contentType === "vcard") {
    return (
      <div className="space-y-4">
        <div>
          <label htmlFor="vcard-name" className={labelClass}>
            Full Name
          </label>
          <input
            id="vcard-name"
            type="text"
            value={props.vcardName}
            onChange={(e) => props.onVcardNameChange(e.target.value)}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vcard-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="vcard-phone"
            type="tel"
            value={props.vcardPhone}
            onChange={(e) => props.onVcardPhoneChange(e.target.value)}
            placeholder="+1 234 567 8900"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vcard-email" className={labelClass}>
            Email Address
          </label>
          <input
            id="vcard-email"
            type="email"
            value={props.vcardEmail}
            onChange={(e) => props.onVcardEmailChange(e.target.value)}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vcard-org" className={labelClass}>
            Organization
          </label>
          <input
            id="vcard-org"
            type="text"
            value={props.vcardOrg}
            onChange={(e) => props.onVcardOrgChange(e.target.value)}
            placeholder="Acme Inc."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="vcard-url" className={labelClass}>
            Website
          </label>
          <input
            id="vcard-url"
            type="url"
            value={props.vcardUrl}
            onChange={(e) => props.onVcardUrlChange(e.target.value)}
            placeholder="https://example.com"
            className={inputClass}
          />
        </div>
      </div>
    );
  }

  if (contentType === "email") {
    return (
      <div className="space-y-4">
        <div>
          <label htmlFor="email-to" className={labelClass}>
            Recipient Email
          </label>
          <input
            id="email-to"
            type="email"
            value={props.emailTo}
            onChange={(e) => props.onEmailToChange(e.target.value)}
            placeholder="contact@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email-subject" className={labelClass}>
            Subject
          </label>
          <input
            id="email-subject"
            type="text"
            value={props.emailSubject}
            onChange={(e) => props.onEmailSubjectChange(e.target.value)}
            placeholder="Hello"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email-body" className={labelClass}>
            Message
          </label>
          <textarea
            id="email-body"
            value={props.emailBody}
            onChange={(e) => props.onEmailBodyChange(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            className={inputClass}
          />
        </div>
      </div>
    );
  }

  if (contentType === "sms") {
    return (
      <div className="space-y-4">
        <div>
          <label htmlFor="sms-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="sms-phone"
            type="tel"
            value={props.smsPhone}
            onChange={(e) => props.onSmsPhoneChange(e.target.value)}
            placeholder="+1 234 567 8900"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="sms-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="sms-message"
            value={props.smsMessage}
            onChange={(e) => props.onSmsMessageChange(e.target.value)}
            placeholder="Type your message here..."
            rows={4}
            className={inputClass}
          />
        </div>
      </div>
    );
  }

  return null;
}
