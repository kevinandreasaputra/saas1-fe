    import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center w-full font-display text-[#111717] dark:text-white">
      <section className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            alt="ServiceMarket Team in Action"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlPHcZQqcImtUjWgrRH8dv7VIl_nRY07VHTN68W4Ts6BC4-6O_Uot8v8mwrX0MI9qpkfC6bseFMs_NiZy7a9aNjraBLeeg3xPcsbD0kQARGNoNmCwJw0JpQQ5m7xVTmuMnY7oDqjCREcCXCOeYWQJVJgzrdGrL_JRD0iq8Ag3F7_eu2MWTd3kSfLfRl3B5Hpx8vKDJJoc6x9Rrsvf8X_XnVojuhyAYA3xW7tXmjQIyTdb4gj52zYYmrySne8D9ga4OEBBQpPa-WKs"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-primary/90 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 text-center flex flex-col items-center">
          <span className="inline-block mb-6 px-5 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white text-sm font-bold tracking-wider uppercase">
            Our Story & Mission
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Revolutionizing Household Services{" "}
            <br className="hidden lg:block" /> Through Trust & Excellence
          </h1>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-100 font-medium leading-relaxed mb-10 drop-shadow-md">
            We connect you with trusted professionals instantly. Our mission is
            to simplify your home maintenance needs with unmatched quality,
            speed, and transparency.
          </p>
        </div>
      </section>
      <section className="w-full bg-primary py-12 text-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
              50k+
            </span>
            <span className="text-teal-100 text-sm md:text-base font-medium">
              Jobs Completed
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
              12k+
            </span>
            <span className="text-teal-100 text-sm md:text-base font-medium">
              Verified Pros
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
              4.9
            </span>
            <span className="text-teal-100 text-sm md:text-base font-medium">
              Average Rating
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
              24/7
            </span>
            <span className="text-teal-100 text-sm md:text-base font-medium">
              Customer Support
            </span>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 md:px-10 lg:px-20 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-100 rounded-full -z-10"></div>
            <img
              alt="Founder brainstorming session"
              className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp2N0HzUHkIkIHVVAadTkrBBbBn0HWxTnsw12nbS4PkqTPZGsFswgz0B9sTZppLwQI59cL8nbGg-Expgmhf2op1sLhN3OiE56QfCPJpADs6QFFfbK3DplMd9C1IztZOZwcoaiJ0qZV2CNqSQPQs8SQMDcEdAuEdPbz2xu1Jo-KwcPLIly3PC2zSEqg0Nbxj-W3OMh82MOjamq2hMXcuDO-7ImfKMmoQeTshc7D7AAzLvccKh_Vd6eHyR0_oYHqn6Pz1fNeCmicvhQ"
            />
          </div>
          <div className="flex flex-col gap-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Born from a simple frustration.
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
              <p>
                ServiceMarket started in 2020 when our founders struggled to
                find reliable help for a move. Phone tag, vague quotes, and
                no-shows were the norm. We knew there had to be a better way.
              </p>
              <p>
                We built a platform that bridges the gap between homeowners and
                trusted professionals. What began as a simple booking tool has
                grown into a comprehensive ecosystem that empowers service
                providers and gives homeowners peace of mind.
              </p>
            </div>
            <div className="pt-2">
              <a
                className="inline-flex items-center text-primary font-bold hover:text-teal-800 transition-colors group"
                href="#"
              >
                Read full origin story
                <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We believe in transparency, reliability, and quality in every
              interaction. These pillars guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-black/30 transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Trust First
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Every professional on our platform undergoes a rigorous 7-point
                background check. We only work with the top 5% of applicants.
              </p>
            </div>
            <div className="flex flex-col p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-black/30 transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-accent mb-6">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Lightning Speed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Life happens fast. Our algorithm matches you with available pros
                in minutes, not days. Book today, get help today.
              </p>
            </div>
            <div className="flex flex-col p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-black/30 transition-shadow duration-300">
              <div className="w-14 h-14 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined text-3xl">
                  stars
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Not happy? Neither are we. We offer a 100% satisfaction
                guarantee. If the job isn't done right, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Meet the Leadership
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-accent transition-all shadow-md">
              <img
                alt="Sarah Jenkins"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6vC1qfPDiBzr08UVQYkGqXpcxFU3IO4baL5SxqRHr6xAaxt-WxBvBFvJJmgQV92Tb2oVQTEx0MyMInIs8OoyuMLYMeCIA_VKdAdSXlnoCJBPCks7icLXoNrDmjp8ouB54lgVjyESKMTwSj_wUI4CFlffz29VcvPGwLorewObLuz1uOfuX3Kc9QQX3nU-Gk6q0SYK-6TfnumcOVeQE4TCET3funFYpkVqI9wBhjqJZXUMuSpdsdL1mwD-nszCe6s3Wgn64cqKX2j8"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Sarah Jenkins
            </h3>
            <p className="text-primary text-sm font-medium">Co-Founder & CEO</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-accent transition-all shadow-md">
              <img
                alt="David Chen"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDuoZ6k2KXroMs-dwNguTjvm-LkjWvu7YTv3Xgjd0C2MGyqZfgPLcFPCLEnOBUPd3kXlrgHLwLJb1kkxOrrUWv9Re3nd_J8If0Xs14FauGJB6cO9eRv2hNUGVod3aM0-BH54BXyKt9dr3OKdzbZNGfIlf473pPH27U42SI8DJAsDxRkYorEx37ADVPuMy5bmRg05ox1T7JIIs25Diin_KQ2XJP12NZC076RyE7WY1pSz-e4yt3fzQ8A-7Sg8w2zYP-6u4ZC8Iqlj8"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              David Chen
            </h3>
            <p className="text-primary text-sm font-medium">Co-Founder & CTO</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-accent transition-all shadow-md">
              <img
                alt="Elena Rodriguez"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd9dFkReMCxlWwrgiuySALn9RilscOYr7LDBm68u0WHgJLnEtI2C12vaWxPq1wrVgGN0h-OirbsoARBQK9gD7QUbw_kajVvyb1V6V9E-6QZ-kFz5Hv4xRW-XbUZDDNnTbwYlrwl4RGb0I418GOOBXYena_VnB7C-haqTwfbVhgzbgFUC8KBRRsR8kXvPaVqKFAJDEzzPRj3zhQ3hQtoGHc2vVO5QUw8PJVA3EDZkpMmR-6yC9TfgU_-lvoidtgZQIpci8lXS4tCAw"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Elena Rodriguez
            </h3>
            <p className="text-primary text-sm font-medium">
              Head of Operations
            </p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-transparent group-hover:border-accent transition-all shadow-md">
              <img
                alt="Marcus Johnson"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwjKJGu9qcjkqzBnDfoP_JSUX3PN6Azsj7pF2xCNxQd_Z9Wzt3zwQZZjr6d5whsLEhwq_7QYL3uaEsQ9MMviF-cajZmUvduDyesEXrdcV5wQeMh3w2g0Gv-xnfow4_Me0rkcmjatJmYSSmJtcVEA-yNT2_6CW0O6Olp9o3SDQ8DpE3Too3O0zweWh4p0hHyxgd3GWdc6HzOtPT_jzSvJduqMd88F0txbe6FLavGeY_HJoYvSsClKGkISrNw3_6UAsiVwExyB5fDNg"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Marcus Johnson
            </h3>
            <p className="text-primary text-sm font-medium">
              VP Customer Success
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 mb-20">
        <div className="max-w-[1200px] mx-auto bg-primary/10 dark:bg-primary/5 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              Ready to reclaim your time?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Join thousands of happy homeowners and get your to-do list done
              today.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="flex items-center justify-center rounded-full h-14 px-10 bg-accent hover:bg-orange-600 text-white text-lg font-bold shadow-xl shadow-orange-200 dark:shadow-none transition-all hover:scale-105">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
