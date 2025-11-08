import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export function ProductsSection() {
  return (
    <section className="space-y-10">
      {/* My Products */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-800">My Products</h2>
        <p className="text-sm text-gray-500">
          Add and edit products here for quick access to the ones you use frequently.
        </p>

        <div className="mt-4">
          <Card className="w-64 h-32 flex items-center justify-center border border-dashed border-gray-300 hover:border-indigo-500 transition-all cursor-pointer hover:shadow-md bg-white">
            <CardContent className="flex flex-col items-center justify-center text-center">
              <Plus className="w-6 h-6 text-indigo-600 mb-1" />
              <span className="text-sm font-medium text-indigo-600">
                Manage Your Products
              </span>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* All Products */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">All Products</h2>
        <p className="text-sm text-gray-500">
          Explore other products that might suit your business needs.
        </p>
      </div>
    </section>
  );
}

export default ProductsSection