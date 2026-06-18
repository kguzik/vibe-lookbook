const email = 'vibebooklooks@gmail.com'

const MailLink = () => <a href={`mailto:${email}`}>{email}</a>
const PrivacyLink = () => <a href="/privacy">Privacy Policy</a>

export const termsContent = {
  buttonLabel: 'Back to home',
  hero: {
    title: 'Terms of Service',
    subtitle: 'Last updated: January 17, 2026',
  },
  sections: [
    {
      heading: 'Acceptance',
      body: (
        <p>
          By using Lookbook, you agree to these Terms of Service and our{' '}
          <PrivacyLink />. If you do not agree, do not use the service.
        </p>
      ),
    },
    {
      heading: 'The Service',
      body: (
        <p>
          Lookbook is an AI-powered personal styling tool. You upload photos of
          yourself, and our AI generates personalized lookbooks and style
          recommendations. The service requires an account (via email/password
          or Google sign-in).
        </p>
      ),
    },
    {
      heading: 'Acceptable Use',
      body: (
        <>
          <p>
            You agree not to upload or use the service to generate content that:
          </p>
          <ul>
            <li>Contains or depicts child sexual abuse material (CSAM)</li>
            <li>Is sexually explicit, pornographic, or obscene</li>
            <li>Depicts graphic violence, gore, or self-harm</li>
            <li>Harasses, threatens, or defames any person</li>
            <li>Infringes on the intellectual property rights of others</li>
            <li>Violates any applicable law or regulation</li>
            <li>Contains images of people without their consent</li>
          </ul>
        </>
      ),
    },
    {
      heading: 'Content Moderation',
      body: (
        <>
          <p>
            All uploaded images are automatically screened by AI-powered
            moderation systems before processing. Images that violate our
            content policies will be rejected. We reserve the right to suspend
            or terminate accounts that repeatedly violate these policies or
            attempt to circumvent moderation.
          </p>
          <p>
            Moderation decisions are logged for compliance and safety purposes.
            We do not manually review passing images - only flagged content may
            be subject to additional review.
          </p>
        </>
      ),
    },
    {
      heading: 'Credits & Payments',
      body: (
        <>
          <p>
            Lookbook uses a credit system. Credits are required to generate
            lookbooks and gallery images. Credits can be purchased via Stripe or
            obtained through promotional codes.
          </p>
          <ul>
            <li>Credits are non-refundable once purchased</li>
            <li>Credits have no cash value and cannot be transferred</li>
            <li>We reserve the right to change credit pricing at any time</li>
            <li>Unused credits do not expire</li>
          </ul>
        </>
      ),
    },
    {
      heading: 'Generated Content',
      body: (
        <>
          <p>
            You retain ownership rights to the AI-generated lookbook content
            created from your photos and preferences. You are free to download,
            share, and use your generated content for personal purposes.
          </p>
          <p>
            By using the service, you grant us a limited, non-exclusive license
            to process your uploaded photos and generate content on your behalf.
            This license exists solely for the purpose of providing the service
            and does not extend to any other use.
          </p>
        </>
      ),
    },
    {
      heading: 'Photo Handling',
      body: (
        <p>
          Uploaded photos are used solely for generation purposes and are not
          stored permanently on our servers. Photos are transmitted to AI model
          providers for processing. For full details on how we handle your data,
          see our <PrivacyLink />.
        </p>
      ),
    },
    {
      heading: 'Account Termination',
      body: (
        <>
          <p>
            We reserve the right to suspend or terminate your account, without
            prior notice, if you violate these Terms - particularly content
            policy violations. Upon termination, your access to generated
            content and remaining credits may be forfeited.
          </p>
          <p>
            You may request voluntary account deletion at any time by emailing{' '}
            <MailLink />. See our <PrivacyLink /> for details on data deletion
            timelines.
          </p>
        </>
      ),
    },
    {
      heading: 'Your Data Rights',
      body: (
        <p>
          We respect your rights under applicable data protection laws,
          including the GDPR. You may request access to, correction of, or
          deletion of your personal data. For full details on your rights and
          how to exercise them, please refer to our <PrivacyLink />.
        </p>
      ),
    },
    {
      heading: 'Limitation of Liability',
      body: (
        <>
          <p>
            Lookbook is provided as &quot;as is&quot; without warranties of any
            kind, express or implied. We do not guarantee that generated content
            will be accurate, flattering, or suitable for any particular
            purpose.
          </p>
          <p>
            To the maximum extent permitted by law, we shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising from your use of the service, including but not
            limited to loss of data, loss of profits, or reputational harm.
          </p>
        </>
      ),
    },
    {
      heading: 'Changes to These Terms',
      body: (
        <p>
          We may update these Terms from time to time. If we make material
          changes, we will update the &quot;Last updated&quot; date at the top.
          Your continued use of Lookbook after changes are posted constitutes
          acceptance of the updated Terms.
        </p>
      ),
    },
    {
      heading: 'Contact',
      body: (
        <p>
          For questions about these Terms, contact us at <MailLink />.
        </p>
      ),
    },
  ],
}
