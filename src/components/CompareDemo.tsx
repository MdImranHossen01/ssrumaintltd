import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareDemo() {
  return (
    <div className="p-4 md:p-8 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 w-full shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side Text Content */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Witness the <span className="text-primary">Transformation</span>
          </h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            From raw construction sites to modern architectural masterpieces, our process is built on precision, quality, and commitment. Drag the slider to see how we turn blueprints into reality.
          </p>
          
          <div className="space-y-3">
            {[
              "Foundation & Structural Integrity",
              "Modern Aesthetic Finishing",
              "End-to-End Project Management"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  ✓
                </div>
                <span className="text-sm font-semibold text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Compare Component */}
        <div className="flex justify-center items-center w-full">
          <Compare
            firstImage="/assets/images/Banner/project-before.webp"
            secondImage="/assets/images/Banner/project-after.webp"
            firstImageClassName="object-cover object-center"
            secondImageClassname="object-cover object-center"
            className="h-[300px] w-full md:h-[450px] rounded-2xl"
            slideMode="hover"
            autoplay={true}
          />
        </div>
        
      </div>
    </div>
  );
}
