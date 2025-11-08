import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import { PlusCircle, RefreshCcw } from "lucide-react";

const WalletCard = () => {
  const merchant = {
    name: "Papertrail Services Private Limited",
    phone: "9205041396",
    merchantId: "874107",
    accountId: "75567",
    balance: 4662.42,
    lastUpdated: "Today, 08:06 PM",
  };
  return (
    <Card className="shadow-md pt-0 overflow-hidden bg-gray-50">
      <CardHeader className="flex flex-row items-center justify-between pb-2 bg-gray-300 h-14 py-1 ">
        <CardTitle className="text-sm font-medium text-gray-600">
          Secure ID Wallet
        </CardTitle>
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center space-x-1"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Refresh</span>
          </Button>
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white flex items-center space-x-1"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Recharge</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">
          ₹{merchant.balance.toLocaleString()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Last updated {merchant.lastUpdated}
        </p>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
