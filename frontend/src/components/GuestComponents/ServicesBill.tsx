function ServicesBill() {
  return (
    <div className="p-4">
      <div className="overflow-x-auto w-[55vw] h-[35vh] overflow-scroll border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 ">
            <tr>
              <th className="px-6 py-3 text-left text-xs  text-gray-500 uppercase font-semibold tracking-wider">
                Stay Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="border border-b-2">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Regular Guest
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                2
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                23/04/24
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Completed
              </td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ServicesBill;
