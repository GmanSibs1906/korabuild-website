export default function AppScreenshots() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#f08121] to-[#e07420] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              See&nbsp;KoraBuild&nbsp;in&nbsp;Action
            </h2>
            <p className="text-base sm:text-lg opacity-90">
              Swipe through dashboards, approvals, budgets, and more—everything you need to manage your build from
              anywhere.
            </p>
          </div>

          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src="/images/app-welcome.jpeg"
                alt="KoraBuild App Welcome"
                className="w-48 sm:w-56 md:w-64 rounded-3xl shadow-2xl transform rotate-3 mx-auto"
              />
              <img
                src="/images/app-dashboard.jpeg"
                alt="KoraBuild App Dashboard"
                className="w-48 sm:w-56 md:w-64 rounded-3xl shadow-2xl absolute top-8 left-1/2 transform -translate-x-1/2 translate-x-12 sm:translate-x-16 -rotate-6"
              />
              <div className="absolute -top-10 -left-10 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
