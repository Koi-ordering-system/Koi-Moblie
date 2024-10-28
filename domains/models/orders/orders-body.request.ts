export interface OrdersBodyRequest {
  userId: string;
  farmId: string;
  kois: Kois[];
  prePaidPrice: number;
}

interface Kois {
  farmKoiId: string;
  quantity: number;
  color: string;
  minSize: number;
  maxSize: number;
}

export enum OrderStatus {
  PENDING = 0,
  APPROVED = 1,
  REJECTED = 2,
  SHIPPED = 3,
  DELIVERED = 4,
}

export interface OrderTripBodyRequest {
  userId: string;
  tripId: string;
  quantity: number;
  startDate: Date;
  endDate: Date;
}

export interface OrdersWebhook {
  code: string;
  desc: string;
  success: boolean;
  data: Data;
  signature: string;
}

export interface Data {
  orderCode: number;
  amount: number;
  description: string;
  accountNumber: string;
  reference: string;
  transactionDateTime: string;
  currency: string;
  paymentLinkId: string;
  code: string;
  desc: string;
  counterAccountBankId: string;
  counterAccountBankName: string;
  counterAccountName: string;
  counterAccountNumber: string;
  virtualAccountName: string;
  virtualAccountNumber: string;
}
