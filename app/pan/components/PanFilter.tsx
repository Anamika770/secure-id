import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";
import React from "react";

const PanFilter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4 mb-6">
      {/* Left side - Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 w-full md:w-2/3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
          <Input
            placeholder="Search by Batch ID or File Name"
            className="pl-9 border border-gray-300 focus-visible:ring-0 focus-visible:border-gray-400 text-sm"
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Right side - result count */}
      <div className="text-sm text-gray-500 whitespace-nowrap">
        Showing 0 results
      </div>
    </div>
  );
};

export default PanFilter;
