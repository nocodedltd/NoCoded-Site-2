import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Zap, Brain, Wrench, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aiTransformationImg from "@/assets/ai-transformation.jpg";

const BespokeAI = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main>
      {/* Hero Section - Problem & Agitate */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-balance font-bold mb-6">
              Do You Have a <span className="text-primary">Unique Business Challenge</span> That Off-the-Shelf Solutions Can't Solve?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your competitive edge lies in solving problems others can't. Generic AI tools leave you competing on the same playing field as everyone else. When your challenge demands innovation, you need AI solutions built exclusively for your specific requirements.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                <span>Custom Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-4 w-4 text-primary" />
                <span>Proprietary Advantage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <Zap size={32} />
              </div>
              <h2 className="text-3xl font-semibold mb-6">Bespoke AI Solutions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                When your business challenges require unprecedented solutions, we build custom AI engines that become your secret competitive weapon. These aren't adapted tools - they're purpose-built innovations designed specifically for your unique requirements and strategic goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">100% Custom-Built for You</h4>
                    <p className="text-muted-foreground">Every algorithm, interface, and feature designed around your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Intellectual Property Ownership</h4>
                    <p className="text-muted-foreground">You own 100% of the solution we build for your business</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Cutting-Edge AI Implementation</h4>
                    <p className="text-muted-foreground">Latest technologies applied to solve your most complex challenges</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video relative group">
                <img 
                  src={aiTransformationImg}
                  alt="Bespoke AI Solutions"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Who Is This For?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Innovative companies with unique market challenges</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Businesses needing competitive differentiation through technology</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Industries where standard solutions don't fit requirements</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Companies with complex data analysis requirements</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Organisations requiring proprietary algorithms and models</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Leadership teams committed to breakthrough innovation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Build Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">What We Can Build</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Predictive analytics and forecasting engines</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Custom machine learning models for decision-making</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Intelligent recommendation and matching systems</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Advanced data processing and insight generation</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Computer vision and image recognition solutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Natural language processing for complex documents</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Risk assessment and compliance monitoring tools</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Industry-specific AI applications and algorithms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-FAQ Section */}
      <section className="bg-muted/50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">How long does a bespoke AI project typically take?</h3>
                <p className="text-muted-foreground">Project timelines vary based on complexity, typically ranging from 3-12 months. We provide detailed project plans with milestones to ensure transparency and progress tracking.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">Do we really own the intellectual property?</h3>
                <p className="text-muted-foreground">Absolutely. You retain 100% ownership of all custom code, algorithms, and innovations we develop specifically for your business. This becomes your proprietary competitive advantage.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">What ongoing support do you provide?</h3>
                <p className="text-muted-foreground">We offer flexible maintenance and support packages, from basic monitoring to continuous improvement and feature enhancement, ensuring your AI solution evolves with your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Build Your Competitive AI Advantage?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free innovation consultation and discover how we can build bespoke AI solutions for your unique challenges.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Audit My Innovation Opportunity
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BespokeAI;