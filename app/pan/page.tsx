"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Upload, Search, Filter } from "lucide-react";

export default function PanPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">PAN</h1>
          <p className="text-sm text-gray-500">Manage all your uploaded PAN verification batches</p>
        </div>

        <div className="flex flex-wrap gap-3 mt-3 md:mt-0">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center gap-2">
            <Upload className="w-4 h-4" />
            <span>Upload Batch</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span>Download Sample</span>
          </Button>
        </div>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="all" onValueChange={(val) => setActiveTab(val)}>
        <TabsList className="flex bg-transparent rounded-none">
          <TabsTrigger
            value="all"
            className={`px-4 py-2 rounded-none border-b-2 ${
              activeTab === "all" ? "border-3 border-b-indigo-600 text-indigo-600 font-medium" : "border-b-gray-500 border"
            }`}
          >
            All 
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className={`px-4 py-2 rounded-none border-b-2 ${
              activeTab === "completed" ? "border-3 border-b-indigo-600 text-indigo-600 font-medium" : "border-b-gray-500 border"
            }`}
          >
            Batch
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="flex gap-3 w-full md:w-2/3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-500" />
            <Input placeholder="Search by Batch ID or File Name" className="pl-9" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </Button>
        </div>
        <div className="text-sm text-gray-500">Showing 0 results</div>
      </div>

      {/* Table Section */}
      <Card className="shadow-sm">
        <CardHeader className="border-b border-gray-200 py-3">
          <div className="text-sm font-medium text-gray-600">PAN Verification Batches</div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-600 font-medium">Batch ID</TableHead>
                <TableHead className="text-gray-600 font-medium">Uploaded On</TableHead>
                <TableHead className="text-gray-600 font-medium">File Name</TableHead>
                <TableHead className="text-gray-600 font-medium">Records</TableHead>
                <TableHead className="text-gray-600 font-medium">Status</TableHead>
                <TableHead className="text-gray-600 font-medium text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Empty State */}
              <TableRow>
                <TableCell colSpan={6} className="text-center text-gray-500 italic py-8">
                  No PAN verification batches found. Upload your first batch to get started.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
