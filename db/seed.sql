-- Seed data for `category` table
INSERT INTO category (category_name) VALUES 
('accessories'),
('electronics'),
('home goods'),
('furniture'),
('clothing');

-- Seed data for `product` table
INSERT INTO product (product_name, price, stock, category_id) VALUES 
('watch', 100.00, 20, 1),
('headphones', 50.00, 15, 2),
('lamp', 25.00, 30, 3),
('couch', 500.00, 5, 4),
('t-shirt', 20.00, 25, 5);

-- Seed data for `tag` table
INSERT INTO tag (tag_name) VALUES 
('accessory'),
('electronic'),
('home good'),
('furniture'),
('clothing');


-- Seed data for `product_tag` table
INSERT INTO product_tag (product_id, tag_id) VALUES 
(1, 1),
(1, 2),
(2, 2),
(2, 4),
(3, 4),
(4, 1),
(4, 4),
(5, 5);


