
const OrdersPage = () => {
    const orders = [
        { order: '#6792', date: 'November 3, 2024', status: 'Processing', total: '$27.97 for 2 items' },
        { order: '#6789', date: 'November 2, 2024', status: 'Completed', total: '$15.99 for 1 item' },
        { order: '#6785', date: 'November 1, 2024', status: 'Shipped', total: '$49.50 for 3 items' },
        { order: '#6782', date: 'October 31, 2024', status: 'Cancelled', total: '$30.00 for 2 items' },
        { order: '#6781', date: 'October 30, 2024', status: 'Processing', total: '$20.47 for 1 item' },
        { order: '#6778', date: 'October 29, 2024', status: 'Completed', total: '$89.99 for 5 items' },
        { order: '#6776', date: 'October 28, 2024', status: 'Shipped', total: '$60.99 for 3 items' },
        { order: '#6774', date: 'October 27, 2024', status: 'Processing', total: '$12.50 for 1 item' },
        { order: '#6773', date: 'October 26, 2024', status: 'Completed', total: '$45.00 for 2 items' },
        { order: '#6770', date: 'October 25, 2024', status: 'Cancelled', total: '$10.00 for 1 item' },
    ];

    return (
        <section className="p-4">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="text-left border-b border-gray-200 hidden sm:table-row">
                            <th className="px-4 py-2">Order</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Total</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 text-left sm:table-row flex flex-col sm:flex-row"
                            >
                                <td className="px-4 py-2 sm:hidden">
                                    <span className="font-semibold">Order: </span>
                                    {order.order}
                                </td>
                                <td className="px-4 py-2 hidden sm:table-cell">{order.order}</td>

                                <td className="px-4 py-2 sm:hidden">
                                    <span className="font-semibold">Date: </span>
                                    {order.date}
                                </td>
                                <td className="px-4 py-2 hidden sm:table-cell">{order.date}</td>

                                <td className="px-4 py-2 sm:hidden">
                                    <span className="font-semibold">Status: </span>
                                    {order.status}
                                </td>
                                <td className="px-4 py-2 hidden sm:table-cell">{order.status}</td>

                                <td className="px-4 py-2 sm:hidden">
                                    <span className="font-semibold">Total: </span>
                                    {order.total}
                                </td>
                                <td className="px-4 py-2 hidden sm:table-cell">{order.total}</td>

                                <td className="px-4 py-2 sm:hidden">
                                    <span className="font-semibold">Actions: </span>
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                                <td className="px-4 py-2 hidden sm:table-cell">
                                    <button className="text-blue-500 hover:underline">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default OrdersPage;
