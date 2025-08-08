import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, Clock, Target, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AiTransformation = () => {
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
              Is Your Business <span className="text-primary">Drowning in Manual Processes</span> While Competitors Pull Ahead?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Every day you delay AI transformation, you're losing hours to inefficiency, missing opportunities, and watching competitors gain unstoppable advantages. Manual operations don't just slow you down - they're actively holding your business hostage.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>90-Day Transformation</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span>ROI-Focused Results</span>
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
                <Calendar size={32} />
              </div>
              <h2 className="text-3xl font-semibold mb-6">The 90-Day AI Transformation Programme</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our flagship programme systematically embeds AI into your core operations in just one quarter. We don't just implement technology - we revolutionise how your business operates, delivering measurable ROI and competitive advantages that compound over time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Strategic Discovery & Blueprint</h4>
                    <p className="text-muted-foreground">Comprehensive audit and AI strategy tailored to your business goals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Phased Implementation</h4>
                    <p className="text-muted-foreground">Risk-free deployment with immediate wins and long-term transformation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Team Empowerment</h4>
                    <p className="text-muted-foreground">Training and support to ensure lasting adoption and success</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video relative group">
                <img 
                  src="/lovable-uploads/e083e7a8-7c27-49c1-a761-62e1e039256b.png"
                  alt="AI Transformation Process"
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
                  <span>Growing businesses (10-200 employees) struggling with manual processes</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Companies losing productivity to repetitive admin tasks</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Businesses ready to invest in sustainable competitive advantages</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Leadership teams committed to operational excellence</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Organisations wanting measurable ROI from technology investments</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Companies looking to scale without proportional staff increases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Transform Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">What We Can Transform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Customer service and support workflows</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Sales processes and lead qualification</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Financial reporting and analysis</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Inventory and supply chain management</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>HR processes and employee onboarding</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Marketing automation and campaign management</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Data collection and business intelligence</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Project management and resource allocation</span>
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
                <h3 className="font-medium mb-2">Will this disrupt our current operations?</h3>
                <p className="text-muted-foreground">Our phased approach ensures minimal disruption. We implement changes incrementally, allowing your team to adapt while maintaining business continuity.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">What if our team isn't tech-savvy?</h3>
                <p className="text-muted-foreground">We provide comprehensive training and ongoing support. Our solutions are designed to be intuitive, and we ensure every team member is confident using the new systems.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">How do you guarantee ROI within 90 days?</h3>
                <p className="text-muted-foreground">We focus on quick wins first - automating high-impact, low-risk processes that deliver immediate time savings and efficiency gains while building toward long-term transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Transform Your Business Operations?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free AI transformation audit and discover exactly how we can revolutionise your business in 90 days.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Audit My Business Operations
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiTransformation;