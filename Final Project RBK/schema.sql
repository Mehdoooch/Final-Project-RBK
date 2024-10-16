INSERT INTO Houses (title, description, price, region, localisation, surface, room) VALUES
('Luxury Villa', 'A stunning luxury villa with modern amenities and beautiful views.', '500000', 'California', 'Los Angeles', '3500', '5'),
('Modern Apartment', 'A spacious apartment in the heart of the city with great facilities.', '300000', 'New York', 'Manhattan', '1200', '3'),
('Country Cottage', 'A cozy cottage located in the countryside with a beautiful garden.', '150000', 'Texas', 'Dallas', '2000', '4'),
('Beach House', 'A beachfront property with breathtaking ocean views.', '450000', 'Florida', 'Miami', '2800', '4'),
('Suburban House', 'A family-friendly house located in a peaceful suburban neighborhood.', '250000', 'Illinois', 'Chicago', '2300', '3'),
('Mountain Cabin', 'A secluded cabin with gorgeous mountain views and hiking trails.', '350000', 'Colorado', 'Aspen', '3200', '4'),
('Penthouse Suite', 'A luxurious penthouse located in the heart of the city.', '900000', 'Nevada', 'Las Vegas', '1800', '3'),
('Lake House', 'A beautiful house situated near the lake, perfect for relaxation.', '400000', 'Minnesota', 'Minneapolis', '2700', '4'),
('Urban Loft', 'A modern loft in a trendy urban area.', '320000', 'Washington', 'Seattle', '1600', '2'),
('Historic Mansion', 'A grand mansion with a rich history and luxurious furnishings.', '1200000', 'Georgia', 'Atlanta', '5200', '6');

INSERT INTO Users (username, email, password, image) VALUES
('john_doe', 'john@example.com', 'password123', 'https://i.pinimg.com/enabled_hi/236x/7a/a5/3f/7aa53fbd8ab8d9971d37ea21c266733f.jpg'),
('jane_doe', 'jane@example.com', 'password456', 'https://i.pinimg.com/236x/47/39/1b/47391b9bc2c772dbd9d0a2907ba81236.jpg'),
('mark_smith', 'mark@example.com', 'password789', 'https://i.pinimg.com/236x/58/31/5a/58315ad5b5d212c83bb4d59624f8784d.jpg'),
('linda_jones', 'linda@example.com', 'password101', 'https://i.pinimg.com/236x/5c/ac/e3/5cace31ea6f5d0b3848acf3a0808f098.jpg'),
('paul_green', 'paul@example.com', 'password202', 'https://i.pinimg.com/236x/b3/59/46/b3594633f155ae3ec87f56b6208a790f.jpg'),
('kate_white', 'kate@example.com', 'password303', 'https://i.pinimg.com/236x/a9/c4/38/a9c4380e55ebb1c9f2f2c4b179545689.jpg'),
('robert_brown', 'robert@example.com', 'password404', 'https://i.pinimg.com/236x/76/50/5d/76505d6e9436244eebbda7ee82ac9162.jpg'),
('nancy_blue', 'nancy@example.com', 'password505', 'https://i.pinimg.com/236x/33/13/8a/33138ae8dd1673758f1e03ed812ca08e.jpg'),
('peter_black', 'peter@example.com', 'password606', 'https://i.pinimg.com/236x/b0/4c/16/b04c1643d6fb3fa6903866fe5664dda8.jpg'),
('susan_red', 'susan@example.com', 'password707', 'https://i.pinimg.com/236x/b8/d0/6b/b8d06b1c26aa7e70c0a6358ec606fc41.jpg');



INSERT INTO Reservations (startDate, endDate, user_id, houseId) VALUES
('2024-01-01', '2024-01-10', 1, 1),
('2024-02-15', '2024-02-20', 2, 2),
('2024-03-05', '2024-03-12', 3, 3),
('2024-04-22', '2024-04-28', 4, 4),
('2024-05-01', '2024-05-07', 5, 5),
('2024-06-10', '2024-06-17', 6, 6),
('2024-07-12', '2024-07-18', 7, 7),
('2024-08-20', '2024-08-27', 8, 8),
('2024-09-01', '2024-09-05', 9, 9),
('2024-10-14', '2024-10-20', 10, 10);



INSERT INTO ImgHouses (url, houseId) VALUES
('https://i.pinimg.com/236x/92/57/8a/92578a6f88191e04990ba0fe9f308052.jpg', 1),
('https://i.pinimg.com/236x/26/b1/ec/26b1ec666b633fa6e54b2279b5c09e01.jpg', 2),
('https://i.pinimg.com/236x/93/f4/c1/93f4c19f3646d411c243418b0784d70e.jpg', 3),
('https://i.pinimg.com/236x/c3/5f/ef/c35fef44406c05ffd6cfdc936bbf2ddd.jpg', 4),
('https://i.pinimg.com/enabled_hi/236x/63/3b/b4/633bb4d8d340da000d525462e6297dea.jpg', 5),
('https://i.pinimg.com/236x/31/d3/5a/31d35aefe59cea190c11d88c18699fb2.jpg', 6),
('https://i.pinimg.com/236x/c2/c2/c0/c2c2c0607932922047f05084530ecc04.jpg', 7),
('https://i.pinimg.com/236x/9c/08/91/9c0891ec3c2c3868af77c9966f27d3c6.jpg', 8),
('https://i.pinimg.com/enabled_hi/236x/b8/eb/0a/b8eb0a2c60f0cb0faf693a975e1e5d12.jpg', 9),
('https://i.pinimg.com/enabled_hi/236x/2f/83/79/2f8379b9692fe397008966e1236bd2d7.jpg', 10),
('https://i.pinimg.com/236x/da/b6/5e/dab65e4080b3209725d35dc52a1d6b16.jpg', 1),
('https://i.pinimg.com/236x/04/b0/5c/04b05c1953400d8c9759bfa3f768204c.jpg', 2),
('https://i.pinimg.com/236x/16/59/b1/1659b1c5d55239e0eef6a576b45a32c7.jpg', 3),
('https://i.pinimg.com/236x/07/4f/72/074f729bd6f33ad88733b5de8353b9ed.jpg', 4),
('https://i.pinimg.com/236x/83/66/94/8366949f5c8df70675c574369c211a97.jpg', 5),
('https://i.pinimg.com/236x/bc/61/0f/bc610f14aa1273fdc309e463c56a81a4.jpg', 6),
('https://i.pinimg.com/236x/57/3e/b6/573eb677974787904ef0ac83c1af4511.jpg', 7),
('https://i.pinimg.com/236x/cd/52/84/cd52842bde72bffe7ffa1f4a0b2ce1cd.jpg', 8),
('https://i.pinimg.com/236x/bf/e8/cb/bfe8cbf910ae9a09c3925911a8f934d0.jpg', 9),
('https://i.pinimg.com/236x/3b/c7/3c/3bc73c15a4fa4cf12e88f7d612ca4c4a.jpg', 10),
('https://i.pinimg.com/enabled_hi/236x/a1/00/62/a10062ad5063d509930ab90e5348079b.jpg', 1),
('https://i.pinimg.com/enabled_hi/564x/21/0c/c7/210cc7d681a2e31a075685c6ca6bf220.jpg', 2),
('https://i.pinimg.com/236x/81/37/63/8137632f8054f74a6364339443081732.jpg', 3),
('https://i.pinimg.com/236x/2a/a1/80/2aa180baf6209625793b5a1e85877b47.jpg', 4),
('https://i.pinimg.com/enabled_hi/236x/8d/5b/e3/8d5be3c4325a99c396024447dd7fa273.jpg', 5),
('https://i.pinimg.com/474x/14/9e/61/149e61a18773ef86a04a9dba6117e015.jpg', 6),
('https://i.pinimg.com/474x/4f/04/d5/4f04d516b0f84c920c9fc6d9f11898fd.jpg', 7),
('https://i.pinimg.com/474x/8f/52/62/8f5262e95239b5a8554f3d543c25a89a.jpg', 8),
('https://i.pinimg.com/474x/29/b0/2a/29b02aead7c5c42a237d3d1d6a88bc45.jpg', 9),
('https://i.pinimg.com/474x/7b/d5/51/7bd551a02a0d2dad7c8332efa2114d1c.jpg', 10);

