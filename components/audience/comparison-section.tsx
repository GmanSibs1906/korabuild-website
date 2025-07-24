export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#f08121] to-[#e07420] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            One&nbsp;Platform. Two&nbsp;Audiences. Zero&nbsp;Stress.
          </h2>
          <p className="text-base sm:text-lg opacity-90 mt-3 sm:mt-4">
            KoraBuild adapts to your needs—whether you're on-site or thousands of miles away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              title: "Local Homeowners",
              points: ["Hands-on decision making", "Daily site visibility", "On-demand financial tracking"],
            },
            {
              title: "Diaspora Clients",
              points: ["Remote oversight & approvals", "Time-zone friendly updates", "Full transparency from abroad"],
            },
          ].map((card) => (
            <div key={card.title} className="bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">{card.title}</h3>
              <ul className="space-y-3">
                {card.points.map((p) => (
                  <li key={p} className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
