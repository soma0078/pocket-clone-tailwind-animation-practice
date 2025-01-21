export const HeroSection = () => {
  return (
    <section className="mx-auto container max-w-7xl">
      <div className="flex gap-2 px-4 sm:px-6 lg:px-8 items-center">
        <div className="w-1/2">
          <h1 className="text-4xl">Invest at the perfect time.</h1>
          <p className="text-xl mt-6 text-[#525252]">
            By leveraging insights from our network of industry insiders, you’ll
            know exactly when to buy to maximize profit, and exactly when to
            sell to avoid painful losses.
          </p>
        </div>

        <div className="w-1/2 h-96">
          <div className="w-full h-full relative">
            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full animate-spin-slow"
            >
              <path
                d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                stroke="#D4D4D4"
                stroke-opacity="0.7"
              ></path>
              <path
                d="M513 1025C230.23 1025 1 795.77 1 513"
                stroke="url(#:S1:-gradient-1)"
                stroke-linecap="round"
              ></path>
              <defs>
                <linearGradient
                  id=":S1:-gradient-1"
                  x1="1"
                  y1="513"
                  x2="1"
                  y2="1025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              viewBox="0 0 1026 1026"
              fill="none"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full animate-spin-reverse"
            >
              <path
                d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                stroke="#D4D4D4"
                stroke-opacity="0.7"
              ></path>
              <path
                d="M913 513c0 220.914-179.086 400-400 400"
                stroke="url(#:S1:-gradient-2)"
                stroke-linecap="round"
              ></path>
              <defs>
                <linearGradient
                  id=":S1:-gradient-2"
                  x1="913"
                  y1="513"
                  x2="913"
                  y2="913"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#06b6d4"></stop>
                  <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
