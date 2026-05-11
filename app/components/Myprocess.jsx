import React from 'react';
import { 
  FadeUp, 
  FadeDown, 
} from '../components/Reveal';

const Myprocess = () => {
  const process = [
    {
      id: 1,
      title: "Discovery & Strategy",
      description: "We analyze your business operations, identify automation opportunities, and create a tailored software roadmap that solves real problems and maximizes ROI.",
      icon: "🔍",
      color: "violet",
      detail: "2-5 Days"
    },
    {
      id: 2,
      title: "Design & Architecture",
      description: "Our team designs intuitive user experiences and scalable system architecture. You get complete transparency with wireframes, workflows, and technical specifications.",
      icon: "🏗️",
      color: "pink",
      detail: "5-10 Days"
    },
    {
      id: 3,
      title: "Build & Integrate",
      description: "We develop your custom software with clean, maintainable code. Seamless integration with your existing tools (accounting, CRM, payment systems) is our priority.",
      icon: "⚙️",
      color: "cyan",
      detail: "2-6 Weeks"
    },
    {
      id: 4,
      title: "Deploy & Scale",
      description: "Smooth launch, staff training, and ongoing optimization. We ensure your software grows with your business — adding features, users, and capabilities on demand.",
      icon: "📈",
      color: "amber",
      detail: "Continuous Support"
    }
  ];

  // Color mapping for step numbers
  const getStepColor = (color) => {
    switch(color) {
      case 'violet':
        return '#5B3AEE';
      case 'pink':
        return '#F39F5F';
      case 'cyan':
        return '#219BE4';
      case 'amber':
        return '#F39F5F';
      default:
        return '#5B3AEE';
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-16 md:py-20 ">
      <div className="max-w-7xl mx-auto">
     
           {/* Section Header */}
                <FadeUp>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#17012C] mb-3">
                                 How We Help Your 
<span className="text-[#F39F5F]">   Businesses Succeed</span>
                    </h2>
                    <p className="text-[#666666] max-w-2xl mx-auto">
              A proven process that delivers business solutions 
                    </p>
                  </div>
                </FadeUp>
        <FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <div 
                key={step.id} 
                className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 hover:border-[#F39F5F]/30"
              >
                {/* Timeline connector line (except last item) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-4 w-8 h-0.5 bg-linear-to-r from-[#5B3AEE]/30 to-[#F39F5F]/30">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-[#F39F5F]"></div>
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center">
             

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#17012C] mb-2">
                    {step.title}
                  </h3>


                  {/* Description */}
                  <p className="text-[#666666] text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Trust Badges - General Software Metrics */}
        <FadeUp>
          <div className="text-center mt-20 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-[#666666]">Custom Business Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-[#666666]">End-to-End Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-[#666666]">Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-[#666666]">Ongoing Maintenance</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};

export default Myprocess;