import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const MerchantDetails = ({
  merchant,
}: {
  merchant: {
    name: string;
    phone: string;
    merchantId: string;
    accountId: string;
    balance: number;
    lastUpdated: string;
  };
}) => {
  return (
    <Card className="shadow-md pt-0 overflow-hidden bg-gray-50">
      <CardHeader className=" bg-gray-300 h-14 py-1 flex items-center">
        <CardTitle className="text-sm font-medium text-gray-600">
          Merchant Details
        </CardTitle>
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
  );
};

export default MerchantDetails;
