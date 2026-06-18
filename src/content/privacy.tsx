const email = 'vibebooklooks@gmail.com'

const MailLink = () => <a href={`mailto:${email}`}>{email}</a>

export const privacyContent = {
  hero: {
    title: 'Privacy Policy',
    subtitle: 'Last updated: June 4, 2026',
  },
  sections: [
    {
      heading: 'What We Collect',
      body: (
        <>
          <p>
            When you create an account - whether via email/password or Google
            sign-in - we collect your email address for account identification
            and communication. If you sign in with Google, we also receive your
            name. We store credit balance and transaction history.
          </p>
          <p>
            Passwords are never stored in plain text. They are securely hashed
            by our authentication system before storage.
          </p>
        </>
      ),
    },
    {
      heading: 'How We Handle Your Photos',
      body: (
        <>
          <p>
            Uploaded photos are used solely for the purpose of generating your
            personalized lookbook or gallery. Photos are not stored permanently
            on our servers - they are processed during generation and not
            retained afterward.
          </p>
          <p>
            All uploaded images are automatically screened by our AI moderation
            system to ensure compliance with our content policies before
            processing.
          </p>
        </>
      ),
    },
    {
      heading: 'Generated Content',
      body: (
        <p>
          Lookbooks and gallery images generated for you are stored and
          accessible only to your account. No other user can view your generated
          content.
        </p>
      ),
    },
    {
      heading: 'Third-Party Processors',
      body: (
        <>
          <p>We use the following third-party services to operate Lookbook:</p>
          <ul>
            <li>
              <strong>Google Gemini &amp; OpenAI</strong> - AI models used for
              image analysis, text generation, and image generation
            </li>
            <li>
              <strong>Stripe</strong> - Payment processing for credit purchases
            </li>
            <li>
              <strong>Google Analytics</strong> - Anonymized usage analytics to
              improve the service
            </li>
          </ul>
          <p>
            Your uploaded photos are sent to AI model providers for processing.
            These providers process data according to their own privacy policies
            and data processing agreements.
          </p>
        </>
      ),
    },
    {
      heading: 'Automated Moderation',
      body: (
        <p>
          All uploaded images are screened by an AI-powered moderation system
          before processing. This system checks for content that violates our
          policies, including but not limited to: illegal content, explicit
          material, violence, and non-photographic uploads. Moderation results
          are logged for compliance and safety purposes.
        </p>
      ),
    },
    {
      heading: 'Cookies & Analytics',
      body: (
        <>
          <p>
            We use only essential session cookies required for authentication
            and core functionality. We do not use advertising cookies.
          </p>
          <p>
            We use Google Analytics to collect anonymized usage data such as
            page views, session duration, and general device/browser
            information. You can opt out by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </>
      ),
    },
    {
      heading: 'Your Rights (GDPR)',
      body: (
        <>
          <p>
            Under the General Data Protection Regulation (GDPR), you have the
            right to:
          </p>
          <ul>
            <li>
              <strong>Access</strong> - Request a copy of all personal data we
              hold about you
            </li>
            <li>
              <strong>Portability</strong> - Receive your data in a portable
              format (Article 20)
            </li>
            <li>
              <strong>Erasure</strong> - Request deletion of your account and
              all associated data (Article 17)
            </li>
            <li>
              <strong>Rectification</strong> - Request correction of inaccurate
              data
            </li>
            <li>
              <strong>Objection</strong> - Object to processing of your personal
              data
            </li>
          </ul>
          <p>
            To exercise any of these rights, email us at <MailLink />. We will
            respond within 30 days.
          </p>
        </>
      ),
    },
    {
      heading: 'Account Deletion',
      body: (
        <p>
          You can request complete deletion of your account and all associated
          data (including generated content, transaction history, and profile
          information) by emailing <MailLink />. Deletion will be completed
          within 30 days of your request.
        </p>
      ),
    },
    {
      heading: 'Data Security',
      body: (
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data, including encryption in transit, row-level
          security on database access, and server-side authentication checks on
          all API endpoints.
        </p>
      ),
    },
    {
      heading: 'Changes to This Policy',
      body: (
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will update the &quot;Last updated&quot; date at
          the top. Continued use of Lookbook after changes constitutes
          acceptance of the updated policy.
        </p>
      ),
    },
    {
      heading: 'Contact',
      body: (
        <p>
          For any privacy-related questions or requests, contact us at{' '}
          <MailLink />.
        </p>
      ),
    },
  ],
}
