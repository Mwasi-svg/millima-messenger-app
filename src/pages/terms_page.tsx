export const TermsPage = () => {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 mt-12">
      <div className="max-w-4xl mx-auto rounded-2xl border border-millimaborder bg-millimapanel/60 backdrop-blur-sm p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Milima Messenger — Terms of Use
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          Effective date: November 6, 2026
        </p>

        <div className="mt-10 space-y-8 text-slate-200 leading-7">
          <p>
            Milima is a private messaging application designed for secure
            communication. By using Milima, you agree to the following terms.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Acceptable Use
            </h2>
            <p className="mt-3">You agree not to use Milima for:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2">
              <li>
                Illegal activities, fraud, threats, harassment, or bullying.
              </li>
              <li>Sending spam, malicious software, or harmful content.</li>
              <li>
                Sharing content that violates the rights or privacy of others.
              </li>
              <li>
                Distributing illegal, abusive, or sexually exploitative
                material.
              </li>
            </ul>
            <p className="mt-3">
              You are responsible for the content you send and your interactions
              with other users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Privacy and Security
            </h2>
            <p className="mt-3">
              Milima uses end-to-end encryption to protect private
              conversations. We do not monitor or read the contents of your
              messages.
            </p>
            <p className="mt-3">
              Information about how we process data is described in our{" "}
              <a
                className="text-sky-400 hover:text-sky-300 underline"
                href="https://milima-chat.com/privacy-policy"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. Blocking</h2>
            <p className="mt-3">
              You can block inappropriate content or abusive users through the
              application and block contacts you no longer wish to communicate
              with.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Service Availability and Liability
            </h2>
            <p className="mt-3">
              Milima is provided on an "as is" and "as available" basis. We do
              not guarantee uninterrupted or error-free operation.
            </p>
            <p className="mt-3">
              To the extent permitted by applicable law, we are not responsible
              for content shared by users or damages arising from misuse of the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Changes and Contact
            </h2>
            <p className="mt-3">
              We may update these terms from time to time. Material changes will
              be communicated to users.
            </p>
            <p className="mt-3">
              For questions, concerns, or reports of abuse, please contact us
              using the support contact information provided in the
              application.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};
