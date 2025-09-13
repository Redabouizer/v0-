import { TrendingUp, Award, MessageSquare, Target, Zap, BarChart3, Search, PieChart, Lightbulb } from "lucide-react"

const FloatingTeam = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/src/assets/team-member-1.jpg",
      name: "Sarah - SEO Expert",
      icon: TrendingUp,
      color: "from-primary to-primary-hover",
      size: "w-16 h-16 md:w-20 md:h-20",
    },
    {
      id: 2,
      image: "/src/assets/team-member-2.jpg",
      name: "Carlos - Analytics Pro",
      icon: BarChart3,
      color: "from-secondary to-secondary-hover",
      size: "w-12 h-12 md:w-16 md:h-16",
    },
    {
      id: 3,
      image: "/src/assets/team-member-3.jpg",
      name: "Michelle - UX Designer",
      icon: Award,
      color: "from-accent to-accent-hover",
      size: "w-20 h-20 md:w-24 md:h-24",
    },
    {
      id: 4,
      image: "/src/assets/team-member-4.jpg",
      name: "David - Content Lead",
      icon: MessageSquare,
      color: "from-success to-primary",
      size: "w-14 h-14 md:w-20 md:h-20",
    },
    {
      id: 5,
      image: "/src/assets/team-member-5.jpg",
      name: "Emily - Marketing Dir",
      icon: Target,
      color: "from-primary to-secondary",
      size: "w-20 h-20 md:w-24 md:h-24",
    },
    {
      id: 6,
      image: "/src/assets/team-member-6.jpg",
      name: "Robert - Tech Lead",
      icon: Zap,
      color: "from-secondary to-accent",
      size: "w-16 h-16 md:w-20 md:h-20",
    },
  ]

  // Enhanced Noiise-style positioning with better distribution
  const positions = [
    { top: "10%", left: "5%" },
    { top: "15%", right: "8%" },
    { top: "40%", left: "3%" },
    { bottom: "20%", right: "6%" },
    { bottom: "15%", left: "8%" },
    { top: "60%", right: "4%" },
    { top: "75%", left: "6%" },
    { bottom: "45%", left: "2%" },
    { top: "25%", right: "15%" },
    { bottom: "65%", right: "10%" },
  ]

  const floatingElements = [
    { icon: Search, color: "from-primary/30 to-primary/60", position: { top: "30%", right: "25%" } },
    { icon: PieChart, color: "from-accent/30 to-accent/60", position: { bottom: "35%", left: "25%" } },
    { icon: Lightbulb, color: "from-secondary/30 to-secondary/60", position: { top: "50%", right: "30%" } },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Main Team Members */}
      {teamMembers.map((member, index) => {
        const position = positions[index] || positions[index % positions.length]
        return (
          <div
            key={member.id}
            className="absolute team-float hidden lg:block animate-fade-in-up"
            style={{ ...position, animationDelay: `${index * 300}ms` }}
          >
            <div className="relative group">
              {/* Enhanced gradient background circle */}
              <div
                className={`absolute inset-0 ${member.size} bg-gradient-to-br ${member.color} rounded-full opacity-20 animate-pulse-glow`}
              ></div>

              {/* Professional icon badge */}
              <div
                className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-white shadow-floating z-20 border-2 border-white/50 backdrop-blur-sm`}
              >
                <member.icon className="h-4 w-4" />
              </div>

              {/* Enhanced profile image */}
              <div
                className={`${member.size} rounded-full overflow-hidden border-[3px] border-white/30 shadow-team transition-all duration-500 hover:scale-110 hover:shadow-premium bg-white backdrop-blur-sm`}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Professional tooltip with enhanced styling */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/95 backdrop-blur-md text-foreground text-xs px-4 py-3 rounded-xl shadow-premium border border-border/50 whitespace-nowrap z-30">
                <div className="font-semibold text-primary">{member.name}</div>
                <div className="text-muted-foreground">Expert Digital</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Floating Background Icons */}
      {floatingElements.map((element, index) => (
        <div
          key={`floating-${index}`}
          className="absolute hidden xl:block float-animation opacity-40"
          style={{ ...element.position, animationDelay: `${index * 800 + 2000}ms` }}
        >
          <div
            className={`w-12 h-12 bg-gradient-to-br ${element.color} rounded-full flex items-center justify-center shadow-soft backdrop-blur-sm`}
          >
            <element.icon className="w-6 h-6 text-white" />
          </div>
        </div>
      ))}

      {/* Enhanced gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
    </div>
  )
}

export default FloatingTeam
