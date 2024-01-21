import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-3xl font-extrabold">
            GhoPay
          </h1>
          <span className="sr-only">GhoPay</span>
        </Link>
        <nav className="ml-auto flex gap-4 font-semibold items-center sm:gap-6">
          <Link
            className="text-sm text-black font-medium hover:underline underline-offset-4 "
            href="#"
          >
            Benefits
          </Link>
          <Link
            className="text-sm text-black font-medium hover:underline underline-offset-4 "
            href="#"
          >
            Integration
          </Link>
          <Link
             className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 text-md font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
            href="/app"
          >
            Launch Dapp
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Accept GHO Tokens with our SDK
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-900 md:text-xl">
                  Seamlessly integrate GHO token payments into your
                  decentralized application.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium mt-10 text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="/app"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-200"
          id="benefits"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <LockIcon className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Secure
                </h3>
                <p className="text-gray-500">
                  Our SDK is built with top-notch security features to protect
                  your transactions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FastForwardIcon className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Fast
                </h3>
                <p className="text-gray-500">
                  Experience lightning-fast transactions with our efficient
                  processing system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MergeIcon className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Easy Integration
                </h3>
                <p className="text-gray-500">
                  Easily integrate our SDK into your DApp with our comprehensive
                  documentation.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          id="integration"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Integration
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Our SDK is designed to be easily integrated into any DApp. With
              our comprehensive documentation and support, you&apos;ll be able
              to accept GHO tokens in no time.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Step 1: Install the SDK
                </h3>
                <p className="text-gray-500">
                  Use npm or yarn to install our SDK into your project.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Step 2: Configure the SDK
                </h3>
                <p className="text-gray-500">
                  Follow our documentation to configure the SDK for your
                  specific needs.
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  Step 3: Start Accepting GHO Tokens
                </h3>
                <p className="text-gray-500">
                  Once the SDK is configured, you can start accepting GHO tokens
                  in your DApp.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200">
        <p className="text-xs text-gray-900">
          © 2024 GHO DApp. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-900"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-900"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function AppWindowIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M10 4v4" />
      <path d="M2 8h20" />
      <path d="M6 4v4" />
    </svg>
  );
}

function FastForwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MergeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}
