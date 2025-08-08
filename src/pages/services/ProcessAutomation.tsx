import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Cog, RefreshCw, TrendingUp, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessAutomation = () => {
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
              Are Your Team <span className="text-primary">Trapped in a Cycle</span> of Repetitive, Soul-Crushing Tasks?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Every minute your talented employees spend on manual data entry, repetitive admin work, and mindless copy-paste tasks is money down the drain. While they're stuck in operational quicksand, your competitors are scaling efficiently with intelligent automation.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>90% Time Reduction</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Zero-Error Execution</span>
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
                <Cog size={32} />
              </div>
              <h2 className="text-3xl font-semibold mb-6">Intelligent Process Automation</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just automate tasks - we redesign your entire operational workflow for maximum efficiency. Transform complex, multi-step processes into seamless, self-running systems that operate with precision while your team focuses on high-value work.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">End-to-End Process Redesign</h4>
                    <p className="text-muted-foreground">Complete workflow analysis and intelligent automation mapping</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Real-Time Monitoring & Reporting</h4>
                    <p className="text-muted-foreground">Complete visibility into automated process performance and outcomes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Intelligent Error Handling</h4>
                    <p className="text-muted-foreground">Self-correcting systems that adapt and learn from exceptions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video relative group">
                <img 
                  src="/lovable-uploads/6c047291-bf0b-49d5-b746-ec514a685855.png"
                  alt="Process Automation Dashboard"
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
                  <span>Teams drowning in manual, repetitive administrative tasks</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Businesses losing money to human error and delays</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Operations dependent on multiple disconnected systems</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Companies struggling to scale without hiring more staff</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Leadership wanting to redeploy talent to strategic work</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Businesses ready to eliminate operational bottlenecks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Automate Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">What We Can Automate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Invoice processing and financial reconciliation</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Data migration between systems and databases</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Report generation and distribution</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Inventory management and reorder processes</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Employee onboarding and compliance tracking</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Customer data synchronisation across platforms</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Quality assurance and compliance monitoring</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Project workflow and approval processes</span>
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
                <h3 className="font-medium mb-2">What if our processes are too complex to automate?</h3>
                <p className="text-muted-foreground">Complex processes are often the best candidates for automation. We break them down into logical components and create intelligent workflows that handle complexity better than manual processes.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">Will automation replace our employees?</h3>
                <p className="text-muted-foreground">Automation replaces tasks, not people. Your team is freed from repetitive work to focus on strategic, creative, and customer-facing activities that drive real business value.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">How do you ensure zero-error performance?</h3>
                <p className="text-muted-foreground">Through extensive testing, intelligent validation checks, exception handling protocols, and real-time monitoring that catches and corrects issues before they impact your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Eliminate Manual Work Forever?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free process automation audit and discover how many hours we can reclaim for your business.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Audit My Business Processes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProcessAutomation;