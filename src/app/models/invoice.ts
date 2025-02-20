export interface Invoice {
  tid: string;
  reference: string;
  currency: string;
  invoiceType: string;
  amount: number;
  tax: number;
  totalAmount?: number;
}
