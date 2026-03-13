import { Link } from 'react-router';

export function TermsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-gray-600 mb-12">Effective Date: Sept 6, 2024</p>

          <p className="text-gray-700 mb-8">
            Welcome to the website of My Task Labs, LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website or services, you agree to comply with and be bound by the following terms and conditions (&quot;Terms&quot;). If you do not agree with these Terms, please do not use our website or services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing this website or using our services, you confirm that you are at least 18 years of age and legally capable of entering into a binding agreement.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">2. Services Provided</h2>
          <p className="text-gray-700 mb-6">
            My Task Labs, LLC provides marketing, consulting, and automation services, including communication workflow systems, as well as ancillary products to support small businesses. The specific details of services and products will be outlined in individual agreements or purchase terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">3. Use of Website</h2>
          <p className="text-gray-700 mb-4">You agree to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Use this website for lawful purposes only.</li>
            <li>Not engage in any activity that could disrupt or damage the website or its content.</li>
            <li>Refrain from uploading or transmitting harmful content, including viruses or malicious code.</li>
          </ul>
          <p className="text-gray-700 mb-6">We reserve the right to restrict access to the website or terminate accounts if these Terms are violated.</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">All content on this website, including text, graphics, logos, and designs, is the property of My Task Labs, LLC or its licensors and is protected by intellectual property laws.</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>You may not reproduce, distribute, or use our content without prior written consent.</li>
            <li>Any unauthorized use of our intellectual property may result in legal action.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">5. Payment Terms</h2>
          <p className="text-gray-700 mb-4">For services or products requiring payment:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Payments must be made in accordance with the terms specified at the time of purchase.</li>
            <li>We use trusted third-party payment processors and are not responsible for any issues arising from their services.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">6. Disclaimer of Warranties</h2>
          <p className="text-gray-700 mb-4">Our website and services are provided &quot;as is&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
          <p className="text-gray-700 mb-4">We do not guarantee that:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>The website will be available at all times or free from errors.</li>
            <li>The results obtained from our services will meet your specific expectations.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">To the fullest extent permitted by law, My Task Labs, LLC shall not be liable for:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>Any indirect, incidental, or consequential damages arising from your use of our website or services.</li>
            <li>Loss of profits, data, or business opportunities, even if advised of such possibilities.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">8. User-Provided Content</h2>
          <p className="text-gray-700 mb-4">If you submit content to our website (e.g., reviews, feedback, or suggestions):</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>You grant us a non-exclusive, royalty-free license to use, reproduce, and distribute your content.</li>
            <li>You confirm that your content does not violate the rights of any third party.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">9. Links to Third-Party Websites</h2>
          <p className="text-gray-700 mb-6">
            Our website may include links to third-party websites for your convenience. We do not control or endorse these sites and are not responsible for their content or practices.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">10. Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We may revise these Terms at any time without prior notice. Changes will be effective upon posting on this website. It is your responsibility to review these Terms periodically.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">11. Termination</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to terminate your access to the website or our services at our discretion, without notice, for any violation of these Terms or applicable laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">12. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms are governed by and construed in accordance with the laws of the state of Delaware, without regard to its conflict of law principles. Any disputes shall be resolved in the courts located in Dover, Delaware.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">13. Contact Information</h2>
          <p className="text-gray-700 mb-4">If you have any questions or concerns about these Terms, please contact us:</p>
          <p className="text-gray-700 mb-2"><strong>My Task Labs, LLC</strong></p>
          <p className="text-gray-700 mb-2">Email: contact@mytasklabs.us</p>
          <p className="text-gray-700 mb-6">Address: 8 The Green, Suite B, Dover DE 19901</p>

          <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-4">14. SMS Messaging Terms</h2>
          <p className="text-gray-700 mb-6">
            My Task Labs, LLC may use SMS (text messaging) as part of its services or communication workflows, either directly or on behalf of its business clients.
          </p>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Consent to Receive SMS Messages</h3>
          <p className="text-gray-700 mb-4">By providing your mobile phone number through our website, service forms, booking forms, or other communication channels, you expressly consent to receive SMS messages related to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Service inquiries</li>
            <li>Appointment scheduling and confirmations</li>
            <li>Estimates and service updates</li>
            <li>Customer support communications</li>
            <li>Account or service-related notifications</li>
          </ul>
          <p className="text-gray-700 mb-4">Message frequency varies depending on interaction and service usage.</p>
          <p className="text-gray-700 mb-6">Consent to receive SMS messages is not a condition of purchase.</p>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Opt-Out Instructions</h3>
          <p className="text-gray-700 mb-4">You may opt out of receiving SMS messages at any time by replying:</p>
          <p className="text-gray-700 mb-2 font-medium">STOP</p>
          <p className="text-gray-700 mb-4">After opting out, you may receive a final confirmation message. No further messages will be sent unless you reinitiate communication.</p>
          <p className="text-gray-700 mb-4">For assistance, reply:</p>
          <p className="text-gray-700 mb-6 font-medium">HELP</p>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Message and Data Rates</h3>
          <p className="text-gray-700 mb-6">
            Message and data rates may apply depending on your mobile carrier plan. Carriers are not liable for delayed or undelivered messages.
          </p>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">No Unsolicited Marketing</h3>
          <p className="text-gray-700 mb-4">We do not send unsolicited marketing messages. SMS communications are sent only:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>In response to a user-initiated inquiry</li>
            <li>After explicit opt-in consent</li>
            <li>As part of an active service relationship</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-900 mt-6 mb-2">Third-Party Messaging Providers</h3>
          <p className="text-gray-700 mb-12">
            We may use third-party communication providers to facilitate SMS delivery. These providers process message data solely for the purpose of transmitting communications.
          </p>

          <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
