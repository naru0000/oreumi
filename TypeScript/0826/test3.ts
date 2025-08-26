enum OrderStatus {
  PENDING,
  CONFIRMED,
  SHIPPED,
  DELIVERED,
  CANCELLED,
}

interface Order {
  id: number;
  customerName: string;
  amount: number;
  status: OrderStatus;
  createdAt: Date;
}

function getStatusText(status: OrderStatus): string {
  switch (status) {
    case OrderStatus.PENDING:
      return "대기중입니다.";
    case OrderStatus.CONFIRMED:
      return "주문이 완료되었습니다.";
    case OrderStatus.SHIPPED:
      return "상품이 배송중입니다.";
    case OrderStatus.DELIVERED:
      return "상품이 도착하였습니다.";
    case OrderStatus.CANCELLED:
      return "주문이 취소되었습니다.";
    default:
      return "알 수 없는 상태입니다.";
  }
}

const order: Order = {
  id: 1,
  customerName: "고객님",
  amount: 50000,
  status: OrderStatus.PENDING,
  createdAt: new Date(),
};

console.log(getStatusText(order.status));
