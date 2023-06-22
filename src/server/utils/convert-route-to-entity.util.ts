const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  'menu-items': 'menu_item',
  orders: 'order',
  'order-items': 'order_item',
  reservations: 'reservation',
  restaurants: 'restaurant',
  'restaurant-tables': 'restaurant_table',
  'table-statuses': 'table_status',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
