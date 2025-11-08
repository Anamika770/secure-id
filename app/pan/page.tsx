"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PanTable, PanFilter, PanTabs } from "./components";
import { EmptyState } from './../../components/shared/EmptyState';

export default function PanPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">PAN</h1>
        </div>
      </div>

      <PanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PanFilter />
      <Card className="shadow-md p-0 overflow-hidden bg-gray-50">
        <CardContent className="p-0">
          <PanTable />
          <EmptyState title="No Data Available" description="There is no data available for the selected filters." imageSrc="/empty-state.jpg" />
        </CardContent>
      </Card>
    </div>
  );
}
