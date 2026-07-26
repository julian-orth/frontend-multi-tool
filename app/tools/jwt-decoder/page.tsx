import Breadcrumb from "@/components/breadcrumb";
import { JWTDecoderUI } from "./jwt-decoder-ui";
import type { Metadata } from "next";
import { ToolSchema } from "@/components/tool-schema";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "JWT Decoder - Decode & Analyze JSON Web Tokens Online",
  description:
    "Decode and analyze JSON Web Tokens (JWT) instantly. View header, payload, signature, and claims analysis. Free online JWT decoder tool with algorithm detection and expiration checking.",
  keywords: [
    "jwt",
    "decoder",
    "json web token",
    "jwt decode",
    "jwt parser",
    "jwt analyzer",
    "token decoder",
    "base64url",
    "jwt.io",
    "jwt debugger",
  ],
  openGraph: {
    title: "JWT Decoder — Decode & Analyze JSON Web Tokens",
    description:
      "Free online JWT decoder to inspect headers, payloads, signatures, and claims. Check token expiration and algorithm detection instantly.",
    url: `${SITE_CONFIG.domain}/tools/jwt-decoder`,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary",
    title: `JWT Decoder — ${SITE_CONFIG.name}`,
    description:
      "Decode and analyze JSON Web Tokens with header, payload, and signature inspection. Free online tool.",
  },
  alternates: {
    canonical: `${SITE_CONFIG.domain}/tools/jwt-decoder`,
  },
};

export default function JwtDecoderPage() {
  return (
    <>
      <ToolSchema
        name="JWT Decoder"
        description="Decode and analyze JSON Web Tokens to view header, payload, signature, and claims for authentication debugging"
        url="/tools/jwt-decoder"
        keywords={[
          "jwt decoder",
          "json web token",
          "jwt parser",
          "token decoder",
          "jwt analyzer",
        ]}
      />
      <div className="px-6 py-8">
        <div className="mx-0 max-w-7xl">
          <div className="mb-8">
            <Breadcrumb />
            <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
              JWT Decoder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Decode and analyze JSON Web Tokens (JWT) to view header, payload,
              signature, and claims. Inspect token expiration, algorithm, and
              standard claims. All processing happens in your browser for
              complete privacy.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <JWTDecoderUI />
          </div>

          {/* SEO Content Sections */}
          <div className="mt-16 space-y-12">
            {/* What is JWT */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                What is a JSON Web Token (JWT)?
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  JSON Web Token (JWT) is an open standard (RFC 7519) that
                  defines a compact and self-contained way for securely
                  transmitting information between parties as a JSON object.
                  This information can be verified and trusted because it is
                  digitally signed using a secret (with HMAC algorithm) or a
                  public/private key pair (using RSA or ECDSA).
                </p>
                <p>
                  JWTs are commonly used for authentication and information
                  exchange in modern web applications. When you log into a
                  website, the server creates a JWT with your user information
                  and sends it back to your browser. Your browser then includes
                  this token in subsequent requests to prove your identity
                  without requiring the server to store session data.
                </p>
                <p>
                  A JWT consists of three parts separated by dots (.), which
                  are: Header.Payload.Signature. Each part is Base64URL encoded,
                  making the entire token URL-safe and easy to transmit in HTTP
                  headers, URLs, or POST parameters.
                </p>
              </div>
            </section>

            {/* JWT Structure */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Understanding JWT Structure
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Header
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The header typically consists of two parts: the type of
                    token (JWT) and the signing algorithm being used (e.g., HMAC
                    SHA256 or RSA).
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-white p-3 text-xs dark:bg-gray-900">
                    <code className="text-gray-900 dark:text-gray-100">
                      {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                    </code>
                  </pre>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Payload
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    The payload contains the claims. Claims are statements about
                    an entity (typically, the user) and additional data. There
                    are three types: registered, public, and private claims.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-white p-3 text-xs dark:bg-gray-900">
                    <code className="text-gray-900 dark:text-gray-100">
                      {`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`}
                    </code>
                  </pre>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Signature
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    To create the signature, you take the encoded header,
                    encoded payload, a secret, and the algorithm specified in
                    the header, and sign that.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-white p-3 text-xs dark:bg-gray-900">
                    <code className="text-gray-900 dark:text-gray-100">
                      {`HMACSHA256(
  base64UrlEncode(header)
  + "."
  + base64UrlEncode(payload),
  secret
)`}
                    </code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Common Use Cases for JWT
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Authentication
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    The most common scenario for using JWT is authentication.
                    Once a user successfully logs in, the server generates a JWT
                    containing the user&apos;s identity and permissions. Each
                    subsequent request includes the JWT, allowing the user to
                    access routes, services, and resources that are permitted
                    with that token. This eliminates the need for server-side
                    session storage.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Information Exchange
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    JWTs are a secure way to transmit information between
                    parties. Because they can be signed using public/private key
                    pairs, you can be sure the senders are who they claim to be.
                    Additionally, since the signature is calculated using the
                    header and payload, you can verify that the content hasn&apos;t
                    been tampered with during transmission.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    Single Sign-On (SSO)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    JWT is widely used in SSO implementations because of its
                    small overhead and ease of use across different domains.
                    Once authenticated with one service, the JWT can be used to
                    access multiple related services without requiring separate
                    authentication for each. This is particularly useful in
                    microservices architectures.
                  </p>
                </div>
                <div className="rounded-xl border border-red-200 bg-red-50/50 p-6 dark:border-red-800 dark:bg-red-950/20">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    API Authorization
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    APIs use JWTs to control access to protected resources. The
                    token can include claims specifying user roles, permissions,
                    and scopes, allowing fine-grained access control. Mobile
                    apps and single-page applications (SPAs) commonly use JWTs
                    to securely communicate with backend APIs without
                    maintaining server-side sessions.
                  </p>
                </div>
              </div>
            </section>

            {/* Standard Claims */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Standard JWT Claims (Registered Claims)
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    The JWT specification defines several standard claims that
                    provide commonly used information. While these claims are
                    optional, they are widely recognized and recommended for
                    interoperability:
                  </p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        iss
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (Issuer)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Identifies who issued the JWT. Typically a URL or
                        identifier of the authentication server.
                      </p>
                    </div>
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        sub
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (Subject)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Identifies the subject of the JWT (usually the user ID).
                        Must be unique within the issuer&apos;s context.
                      </p>
                    </div>
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        aud
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (Audience)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Identifies the recipients that the JWT is intended for.
                        Can be a string or array of strings.
                      </p>
                    </div>
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        exp
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (Expiration Time)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Unix timestamp after which the JWT must not be accepted.
                        Critical for security to limit token lifespan.
                      </p>
                    </div>
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        nbf
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (Not Before)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Unix timestamp before which the JWT must not be
                        accepted. Useful for scheduling future access.
                      </p>
                    </div>
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        iat
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (Issued At)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Unix timestamp when the JWT was issued. Used to
                        determine the age of a token.
                      </p>
                    </div>
                    <div className="rounded-lg border border-red-100 bg-red-50/30 p-4 dark:border-red-900 dark:bg-red-950/10">
                      <span className="font-mono font-semibold text-red-700 dark:text-red-300">
                        jti
                      </span>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        (JWT ID)
                      </span>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Unique identifier for the JWT. Used to prevent token
                        replay attacks in single-use scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Signing Algorithms */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                JWT Signing Algorithms
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    HMAC Algorithms (HS256, HS384, HS512)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    HMAC (Hash-based Message Authentication Code) algorithms use
                    a symmetric key, meaning the same secret key is used for
                    both signing and verification. These algorithms are:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>HS256:</strong> HMAC with SHA-256 hash function
                      (most common)
                    </li>
                    <li>
                      <strong>HS384:</strong> HMAC with SHA-384 hash function
                    </li>
                    <li>
                      <strong>HS512:</strong> HMAC with SHA-512 hash function
                      (strongest)
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Best for: Applications where the same service creates and
                    verifies tokens. Fast and efficient, but both parties must
                    securely share the secret key.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    RSA Algorithms (RS256, RS384, RS512)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    RSA algorithms use asymmetric cryptography with a
                    private/public key pair. The private key signs the token,
                    and anyone with the public key can verify it. These
                    algorithms include:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>RS256:</strong> RSA Signature with SHA-256 (most
                      common)
                    </li>
                    <li>
                      <strong>RS384:</strong> RSA Signature with SHA-384
                    </li>
                    <li>
                      <strong>RS512:</strong> RSA Signature with SHA-512
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Best for: Distributed systems, microservices, or third-party
                    verification where the signing service can keep the private
                    key secure while distributing the public key.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
                    ECDSA Algorithms (ES256, ES384, ES512)
                  </h3>
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    ECDSA (Elliptic Curve Digital Signature Algorithm) also uses
                    asymmetric cryptography but with elliptic curve keys,
                    providing equivalent security to RSA with smaller key sizes:
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>ES256:</strong> ECDSA with P-256 curve and SHA-256
                    </li>
                    <li>
                      <strong>ES384:</strong> ECDSA with P-384 curve and SHA-384
                    </li>
                    <li>
                      <strong>ES512:</strong> ECDSA with P-521 curve and SHA-512
                    </li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Best for: Mobile and IoT applications where smaller key
                    sizes reduce bandwidth and processing requirements while
                    maintaining high security.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Is JWT the same as OAuth or authentication?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, JWT is not an authentication protocol—it&apos;s a token
                    format. OAuth 2.0 and OpenID Connect are authentication and
                    authorization protocols that often use JWTs as the token
                    format. JWT simply provides a standardized way to represent
                    claims in a compact, URL-safe format. You can use JWTs with
                    various authentication mechanisms including session-based
                    auth, bearer tokens, or OAuth flows.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Does decoding a JWT verify its signature?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    No, decoding and verifying are two different operations.
                    Decoding simply reads the Base64URL-encoded header and
                    payload to view their contents—anyone can decode a JWT
                    without any secret or key. Verification, on the other hand,
                    checks the signature using the appropriate key to ensure the
                    token hasn&apos;t been tampered with and was issued by a trusted
                    party. Our tool only decodes JWTs; it does not verify
                    signatures.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I safely decode sensitive JWTs using this tool?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Yes. All JWT decoding happens entirely in your browser using
                    JavaScript. No data is ever transmitted to our servers or
                    any third party. You can verify this by checking your
                    browser&apos;s network activity or by disconnecting from the
                    internet after loading the page—the tool will continue to
                    work. However, remember that JWTs are not encrypted by
                    default, only signed. Anyone with access to a JWT can decode
                    and read its contents.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What does &quot;algorithm: none&quot; mean and why is it dangerous?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    The &quot;none&quot; algorithm means the JWT has no signature and
                    provides no cryptographic protection. While technically
                    valid per the JWT spec, it&apos;s extremely dangerous in
                    production because anyone can create or modify these tokens.
                    Attackers can change user IDs, permissions, or expiration
                    dates without detection. Some libraries have been vulnerable
                    to accepting &quot;none&quot; algorithm tokens even when expecting
                    signed tokens. Always use proper signing algorithms in
                    production.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    How long should a JWT token be valid?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    JWT lifetime depends on your security requirements and use
                    case. Access tokens should be short-lived (5-15 minutes) to
                    limit the window of opportunity if compromised. Refresh
                    tokens can last longer (days to weeks) but should be
                    securely stored and rotated. For highly sensitive
                    operations, use even shorter expiration times. Always
                    implement the &quot;exp&quot; (expiration) claim and validate it on
                    the server side. Consider implementing token refresh
                    mechanisms to maintain user sessions without requiring
                    frequent re-authentication.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Should I store sensitive information in a JWT?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Generally, no. JWTs are Base64URL-encoded, not
                    encrypted—anyone who obtains the token can decode and read
                    its contents. Only include information necessary for
                    authorization decisions (user ID, roles, permissions) and
                    avoid sensitive data like passwords, social security
                    numbers, or credit card details. If you must include
                    sensitive data, use JWE (JSON Web Encryption) to encrypt the
                    entire token, or encrypt specific claims before including
                    them in the JWT.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between JWT and JWE?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    JWT (JSON Web Token) is signed but not encrypted—the header
                    and payload are readable by anyone. JWE (JSON Web
                    Encryption) encrypts the entire content, making it
                    unreadable without the decryption key. JWTs are sufficient
                    when you only need to verify authenticity and integrity. Use
                    JWE when the claims themselves are sensitive and must be
                    kept confidential. JWE tokens are typically longer and
                    require more computational resources to process than JWTs.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Can I revoke or invalidate a JWT before it expires?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    JWTs are stateless and self-contained, so they cannot be
                    inherently revoked. Once issued, a JWT remains valid until
                    it expires. However, you can implement revocation through
                    several strategies: maintain a blacklist of revoked tokens,
                    use short expiration times with refresh tokens, include a
                    unique token ID (jti) and check it against a database on
                    each request, or implement token versioning where changing a
                    user&apos;s token version invalidates all previous tokens. Each
                    approach has trade-offs between security and performance.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    What&apos;s the difference between symmetric and asymmetric JWT
                    algorithms?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Symmetric algorithms (HS256, HS384, HS512) use the same
                    secret key for both signing and verification. This is faster
                    but requires both the issuer and verifier to securely share
                    the secret. Asymmetric algorithms (RS256, ES256, etc.) use a
                    private key for signing and a public key for verification.
                    The private key remains secret with the token issuer, while
                    the public key can be freely distributed to anyone who needs
                    to verify tokens. Use symmetric for single-application
                    scenarios and asymmetric for distributed systems or
                    third-party verification.
                  </p>
                </details>

                <details className="group rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-50">
                    Where should I store JWTs in a web application?
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    This is a debated topic in web security. Options include:
                    (1) HttpOnly cookies—protected from XSS but vulnerable to
                    CSRF (mitigate with SameSite attribute), (2)
                    localStorage/sessionStorage —vulnerable to XSS but not CSRF,
                    or (3) memory (JavaScript variables)—most secure but lost on
                    page refresh. For SPAs, many developers use HttpOnly cookies
                    with SameSite=Strict or Lax and CSRF tokens. For mobile
                    apps, use secure platform-specific storage. Never store
                    tokens in regular cookies accessible to JavaScript, and
                    always use HTTPS to prevent token interception.
                  </p>
                </details>
              </div>
            </section>

            {/* Security Best Practices */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                JWT Security Best Practices
              </h2>
              <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    While JWTs provide a convenient way to handle authentication
                    and authorization, following security best practices is
                    crucial to prevent vulnerabilities:
                  </p>
                  <ul className="ml-6 list-disc space-y-3">
                    <li>
                      <strong>Always validate signatures:</strong> Never accept
                      JWTs without verifying their signature. Implement proper
                      signature verification on the server side using trusted
                      libraries.
                    </li>
                    <li>
                      <strong>Set short expiration times:</strong> Use the &quot;exp&quot;
                      claim and set reasonable expiration times. Access tokens
                      should expire quickly (minutes to hours), while refresh
                      tokens can last longer.
                    </li>
                    <li>
                      <strong>Validate all claims:</strong> Check not just the
                      signature, but also iss (issuer), aud (audience), exp
                      (expiration), and nbf (not before) claims to ensure the
                      token is intended for your application.
                    </li>
                    <li>
                      <strong>Use HTTPS only:</strong> Always transmit JWTs over
                      HTTPS to prevent token interception. Never send tokens in
                      URL parameters where they might be logged.
                    </li>
                    <li>
                      <strong>Keep secrets secure:</strong> Store signing keys
                      securely using environment variables, key management
                      services, or hardware security modules. Never commit keys
                      to version control.
                    </li>
                    <li>
                      <strong>Implement proper key rotation:</strong> Regularly
                      rotate signing keys and support multiple keys
                      simultaneously to allow for smooth transitions without
                      service disruption.
                    </li>
                    <li>
                      <strong>Don&apos;t store sensitive data:</strong> Remember that
                      JWTs are encoded, not encrypted. Anyone with access to the
                      token can read its contents.
                    </li>
                    <li>
                      <strong>Use strong algorithms:</strong> Prefer RS256 or
                      ES256 over HS256 for better security in distributed
                      systems. Never use the &quot;none&quot; algorithm in production.
                    </li>
                    <li>
                      <strong>Implement token refresh:</strong> Use short-lived
                      access tokens with separate refresh tokens to balance
                      security and user experience.
                    </li>
                    <li>
                      <strong>Consider token size:</strong> JWTs can grow large
                      with many claims. Monitor token size as it affects
                      bandwidth and can hit header size limits in some servers.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Tools */}
            <section>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-50">
                Related Tools
              </h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Explore other developer tools to streamline your workflow:
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <a
                  href="/tools/base64"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-green-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-green-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-green-600 dark:text-gray-50 dark:group-hover:text-green-400">
                    Base64 Encoder/Decoder
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Encode and decode Base64 strings (JWT uses Base64URL
                    encoding)
                  </p>
                </a>
                <a
                  href="/tools/json-formatter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-blue-600 dark:text-gray-50 dark:group-hover:text-blue-400">
                    JSON Formatter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Format and validate JSON data from JWT payloads
                  </p>
                </a>
                <a
                  href="/tools/timestamp-converter"
                  className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-cyan-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-cyan-700"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-cyan-600 dark:text-gray-50 dark:group-hover:text-cyan-400">
                    Timestamp Converter
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Convert Unix timestamps from JWT claims (iat, exp, nbf)
                  </p>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
