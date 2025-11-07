import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RefreshCcw, PlusCircle } from "lucide-react";

export default function HomePage() {
  const merchant = {
    name: "Papertrail Services Private Limited",
    phone: "9205041396",
    merchantId: "874107",
    accountId: "75567",
    balance: 4662.42,
    lastUpdated: "Today, 08:06 PM",
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Home</h1>
      </div>

      {/* Wallet Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wallet Card */}
        <Card className="shadow-sm bg-white pt-0 overflow-hidden ">
          <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gray-300 h-14 py-1 ">
            <CardTitle className="text-sm font-medium text-gray-600">Secure ID Wallet</CardTitle>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="flex items-center space-x-1">
                <RefreshCcw className="w-4 h-4" />
                <span>Refresh</span>
              </Button>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center space-x-1">
                <PlusCircle className="w-4 h-4" />
                <span>Recharge</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">₹{merchant.balance.toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">Last updated {merchant.lastUpdated}</p>
          </CardContent>
        </Card>

        {/* Merchant Details Card */}
        <Card className="shadow-sm bg-white pt-0 overflow-hidden ">
          <CardHeader className=" bg-gray-300 h-14 py-1 flex items-center">
            <CardTitle className="text-sm font-medium text-gray-600">Merchant Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Merchant Name</span>
              <span className="font-medium">{merchant.name}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Phone Number</span>
              <span className="font-medium">{merchant.phone}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Merchant ID</span>
              <span className="font-medium">{merchant.merchantId}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span>Account ID</span>
              <span className="font-medium">{merchant.accountId}</span>
            </div>
          </CardContent>
        </Card>

        
      </div>

      {/* Optional: Table Placeholder */}
      <Card className="shadow-sm bg-white">
        <CardHeader>
          <CardTitle className="text-sm font-medium text-gray-500">Recent Verifications</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 italic">No recent verification records found.</p>
        </CardContent>
      </Card>
    </div>
  );
}
