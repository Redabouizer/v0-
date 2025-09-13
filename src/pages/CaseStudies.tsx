import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { DollarSign, Users, Clock, CheckCircle, ArrowRight, Building, Car, Heart } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      category: "Corporate Legal",
      icon: Building,
      title: "Multi-Million Dollar Contract Dispute Resolution",
      client: "Fortune 500 Technology Company",
      challenge: "Complex breach of contract dispute involving intellectual property rights and damages exceeding $15M.",
      solution: "Developed comprehensive litigation strategy with expert testimony and detailed contract analysis.",
      outcome: "$12.5M settlement achieved within 8 months",
      results: [
        "Avoided lengthy court proceedings",
        "Preserved business relationships", 
        "Saved estimated $2M in legal costs"
      ],
      timeframe: "8 months",
      amount: "$12.5M"
    },
    {
      id: 2,
      category: "Insurance Claims",
      icon: Car,
      title: "Complex Auto Insurance Claim Recovery",
      client: "Fleet Management Company",
      challenge: "Insurance company denied $2.3M claim for commercial vehicle accidents, citing policy exclusions.",
      solution: "Thorough policy analysis and evidence gathering to challenge denial and prove coverage.",
      outcome: "Full claim amount recovered plus interest",
      results: [
        "100% claim recovery achieved",
        "Established precedent for similar cases",
        "Ongoing relationship with client"
      ],
      timeframe: "6 months",
      amount: "$2.3M"
    },
    {
      id: 3,
      category: "Personal Injury",
      icon: Heart,
      title: "Workplace Injury Settlement",
      client: "Construction Worker Family",
      challenge: "Severe workplace injury with disputed liability and insufficient initial settlement offer.",
      solution: "Comprehensive investigation and expert medical testimony to establish full damages.",
      outcome: "Settlement 5x larger than initial offer",
      results: [
        "Secured long-term medical care",
        "Provided financial security for family",
        "Set new standards for similar cases"
      ],
      timeframe: "14 months", 
      amount: "$1.8M"
    },
    {
      id: 4,
      category: "Employment Law",
      icon: Users,
      title: "Class Action Employment Settlement",
      client: "Group of 150+ Employees", 
      challenge: "Systematic wage and hour violations affecting over 150 employees across multiple locations.",
      solution: "Organized class action lawsuit with detailed documentation of violations and damages.",
      outcome: "Successful class action settlement",
      results: [
        "Justice for 150+ affected employees",
        "Policy changes implemented company-wide",
        "Ongoing monitoring agreement"
      ],
      timeframe: "18 months",
      amount: "$4.2M"
    },
    {
      id: 5,
      category: "Property Claims",
      icon: Building,
      title: "Commercial Property Damage Recovery",
      client: "Regional Retail Chain",
      challenge: "Insurance dispute over fire damage claims totaling $3.8M with coverage denials.",
      solution: "Forensic investigation and expert testimony to prove coverage and full damages.",
      outcome: "Complete recovery of all damages",
      results: [
        "Business operations fully restored",
        "All repair costs covered",
        "Lost revenue compensation secured"
      ],
      timeframe: "10 months",
      amount: "$3.8M"
    },
    {
      id: 6,
      category: "Medical Malpractice",
      icon: Heart,
      title: "Medical Negligence Case Resolution",
      client: "Patient and Family",
      challenge: "Complex medical malpractice case involving multiple healthcare providers and disputed causation.",
      solution: "Assembled team of medical experts and developed comprehensive case strategy.",
      outcome: "Substantial settlement for ongoing care",
      results: [
        "Lifetime medical care secured",
        "Financial stability for family",
        "Healthcare policy improvements"
      ],
      timeframe: "22 months",
      amount: "$2.9M"
    }
  ];

  const totalRecovered = caseStudies.reduce((sum, study) => {
    const amount = parseFloat(study.amount.replace(/[^0-9.]/g, ''));
    return sum + amount;
  }, 0);

  const stats = [
    { value: `$${totalRecovered.toFixed(1)}M+`, label: "Total Recovered", icon: DollarSign },
    { value: "6", label: "Featured Cases", icon: CheckCircle },
    { value: "13 mo", label: "Avg. Resolution", icon: Clock },
    { value: "100%", label: "Success Rate", icon: Users }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Case Studies</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results for Our Clients
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how our expert legal team has successfully resolved complex cases 
            and recovered millions for our clients across various practice areas.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="p-8 hover:shadow-large transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <study.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">{study.category}</Badge>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Client</h4>
                    <p className="text-sm">{study.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Challenge</h4>
                    <p className="text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">Solution</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                    Key Results
                  </h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex space-x-6 text-sm">
                    <div>
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-semibold text-secondary ml-1">{study.amount}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-semibold ml-1">{study.timeframe}</span>
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="bg-secondary/10 text-secondary">
                    {study.outcome}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-4">Track Record</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Consistent Excellence Across All Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            These case studies represent just a sample of our successful outcomes. 
            Every case is unique, but our commitment to excellence remains constant.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="p-6 text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">$50M+</h3>
              <p className="text-muted-foreground">Total Recovered</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">Cases Won</p>
            </Card>
            <Card className="p-6 text-center">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">98%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </Card>
          </div>

          <Button asChild size="lg" className="btn-hero">
            <Link to="/contact">
              Discuss Your Case
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every successful case starts with a conversation. Contact us today to discuss 
            your legal challenges and learn how we can help you achieve a positive outcome.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/contact">Free Case Evaluation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
