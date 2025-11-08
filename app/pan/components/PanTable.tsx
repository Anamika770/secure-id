import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PanTable = () => {
  return (
    <Table>
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="text-gray-600 font-medium border border-gray-300">
                  Batch ID
                </TableHead>
                <TableHead className="text-gray-600 font-medium border border-gray-300">
                  Uploaded On
                </TableHead>
                <TableHead className="text-gray-600 font-medium border border-gray-300">
                  File Name
                </TableHead>
                <TableHead className="text-gray-600 font-medium border border-gray-300">
                  Records
                </TableHead>
                <TableHead className="text-gray-600 font-medium border border-gray-300">
                  Status
                </TableHead>
                <TableHead className="text-gray-600 font-medium border border-white">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>{/* Empty State */}</TableBody>
          </Table>
  )
}

export default PanTable