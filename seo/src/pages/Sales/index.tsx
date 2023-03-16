import { getSales, insertSale, updateSale } from "../../data";

export default function Sales() {

    const sales = getSales();

    return (
        <main className="main-body container">
            <h2>Página de vendas</h2>
            <br />
            <table>
                <thead>
                    <th>ID</th>
                    <th>Quantia</th>
                    <th>Data</th>
                </thead>
                <tbody>
                {sales.map(sale => (
                    <tr>
                        <td>{sale.id}</td>
                        <td>{sale.amount.toFixed(2)}</td>
                        <td>{sale.due}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </main>
    );
}
