
import { Zap, Shield, BarChart3, Users, Clock, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience blazing-fast performance with our optimized infrastructure built for scale."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance certifications."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get deep insights with our powerful analytics dashboard and reporting tools."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamlessly collaborate with your team using our intuitive workspace tools."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock expert support to help you succeed every step of the way."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Access your workspace anywhere with our fully responsive mobile experience."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features your business needs to thrive in today's competitive landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
