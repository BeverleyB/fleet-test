USE ecommerce;

/* E-mail addresses of users who have bought PRODUCT_1 in the past 7 days */
SELECT DISTINCT u.email
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN products p ON o.product_id = p.id
WHERE p.name = 'PRODUCT_1'
AND o.order_date >= CURDATE() - INTERVAL 7 DAY;

/* Total sales amount, per day */
SELECT DATE(o.order_date) AS order_day, SUM(p.price) AS total_sales_amount
FROM orders o
INNER JOIN products p ON o.product_id = p.id
GROUP BY order_day;