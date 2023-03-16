let sales : Sale[] = [
  {
    id: 1995,
    amount: 10800.0,
    due: "12/05/1995",
  },
  {
    id: 2000,
    amount: 8000.0,
    due: "10/31/2000",
  },
  {
    id: 2003,
    amount: 9500.0,
    due: "07/22/2003",
  },
  {
    id: 1997,
    amount: 14000.0,
    due: "09/01/1997",
  },
  {
    id: 1998,
    amount: 4600.0,
    due: "01/27/1998",
  },
];

export type Sale = {
  id: number;
  amount: number;
  due: string;
}

export function getSales() : Sale[] {
  return sales;
}

export function getSale(id : number) {
  return sales.find(sale => sale.id === id);
}

export function deleteSale(id : number) {
  sales = sales.filter(sale => sale.id !== id);
}

export function insertSale(sale: Sale) {
  sales = [...sales, sale];
}

export function updateSale(id: number, sale: Sale) {
  sales = sales.map(x => (x.id === id) ? sale : x);
}
