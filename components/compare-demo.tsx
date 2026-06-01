import React from "react";
import { Compare } from "@/components/ui/compare";

export default function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
      <Compare
        firstImage="/images/before_vk.png"
        secondImage="/images/after_vk.png"
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]"
        slideMode="drag"
        autoplay={false}
      />

    </div>
  );
}
