import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PanTabs = ({ activeTab, setActiveTab }) => {
  return (
    <Tabs defaultValue="all" onValueChange={(val) => setActiveTab(val)}>
            <TabsList className="flex bg-transparent rounded-none">
              <TabsTrigger
                value="all"
                className={`px-4 py-2 rounded-none border-b-2 ${
                  activeTab === "all"
                    ? "border-3 border-b-indigo-600 text-indigo-600 font-medium"
                    : "border-b-gray-500 "
                }`}
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="batch"
                className={`px-4 py-2 rounded-none border-b-2 ${
                  activeTab === "batch"
                    ? "border-3 border-b-indigo-600 text-indigo-600 font-medium"
                    : "border-b-gray-500 "
                }`}
              >
                Batch
              </TabsTrigger>
            </TabsList>
          </Tabs>
    
  )
}

export default PanTabs