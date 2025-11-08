import WalletCard from "@/components/home/WalletCard";
import MerchantDetails from "@/components/home/MerchantDetails";
import ProductsSection from "@/components/home/ProductsSection";


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
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Home</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WalletCard />
        <MerchantDetails />
      </div>
      <ProductsSection />
    </div>
  );
}
