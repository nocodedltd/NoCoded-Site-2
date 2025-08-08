import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Bot, MessageSquare, Clock, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AiAgents = () => {
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
              Are You <span className="text-primary">Losing Customers</span> Because Your Team Can't Keep Up?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              While your competitors deploy AI agents working 24/7, your team is overwhelmed with repetitive queries, delayed responses, and missed opportunities. Every unanswered call or delayed email is revenue walking out the door.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Response</span>
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
                <Bot size={32} />
              </div>
              <h2 className="text-3xl font-semibold mb-6">Deploy Your Digital Workforce</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our AI agents don't just answer questions - they become expert representatives of your business, handling complex interactions, qualifying leads, and managing workflows with the knowledge and personality of your best team members.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Multi-Channel Deployment</h4>
                    <p className="text-muted-foreground">Web chat, voice calls, email, and social media integration</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Custom-Trained on Your Business</h4>
                    <p className="text-muted-foreground">Learns your products, processes, and brand voice perfectly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium">Intelligent Task Automation</h4>
                    <p className="text-muted-foreground">Handles complex workflows beyond simple Q&A</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <div className="aspect-video relative group">
                <img 
                  src="/lovable-uploads/02892ec7-277a-4ae0-8065-27d281de201b.png"
                  alt="AI Agents Dashboard"
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
                  <span>Customer service teams overwhelmed with enquiries</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Sales teams missing leads due to response delays</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Businesses losing customers to faster competitors</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Companies wanting 24/7 customer engagement</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Teams spending too much time on repetitive queries</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Businesses needing consistent service quality</span>
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
                  <span>Customer support and troubleshooting</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Lead qualification and initial sales conversations</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Appointment booking and scheduling</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Order processing and status updates</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>FAQ responses and product information</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Internal HR queries and onboarding</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Data collection and survey completion</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                  <span>Follow-up communications and reminders</span>
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
                <h3 className="font-medium mb-2">Will customers know they're talking to an AI?</h3>
                <p className="text-muted-foreground">Our agents are transparent about being AI while providing such helpful, human-like interactions that customers prefer them. We design for trust and effectiveness.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">What happens when the AI can't handle a query?</h3>
                <p className="text-muted-foreground">Smart escalation protocols seamlessly transfer complex issues to human team members with full context, ensuring no customer experience is compromised.</p>
              </div>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="font-medium mb-2">Can you integrate with our existing systems?</h3>
                <p className="text-muted-foreground">Yes. Our agents connect with your CRM, help desk, booking systems, and other tools to provide unified, contextual service across all touchpoints.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Ready to Deploy Your Digital Workforce?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book your free customer service audit and discover how AI agents can transform your customer experience.
            </p>
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-8 py-4 rounded-md font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Audit My Customer Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiAgents;