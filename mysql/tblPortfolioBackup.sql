-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 15, 2019 at 10:49 AM
-- Server version: 5.6.45
-- PHP Version: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sean_clientSideSamples`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblPortfolio`
--

CREATE TABLE `tblPortfolio` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `description` text,
  `URL` varchar(50) DEFAULT NULL,
  `image1` varchar(50) DEFAULT NULL,
  `image2` varchar(50) NOT NULL,
  `image3` varchar(50) NOT NULL,
  `image4` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tblPortfolio`
--

INSERT INTO `tblPortfolio` (`id`, `name`, `description`, `URL`, `image1`, `image2`, `image3`, `image4`) VALUES
(2, 'ASP.NET Core Web App', 'An example of my first web app developed using ASP.NET Core. ASP.NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.', 'https://docs.microsoft.com/en-us/aspnet/core/', 'image1.png', 'image2.png', 'image3.png', 'image4.png'),
(4, 'Flexbox Page Layout Examples', 'The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word \"flex\").', 'https://css-tricks.com/snippets/css/a-guide-to-fle', 'image5.png', 'image6.png', 'image7.png', 'image8.png'),
(5, 'CSS Styling with Sass Examples', 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.', 'http://sass-lang.com/', 'image9.png', 'image10.png', 'image11.png', 'image12.png'),
(7, 'HTML5 Games with CreateJS', 'A suite of modular libraries and tools which work together or independently to enable rich interactive content on open web technologies via HTML5.', 'https://createjs.com/', 'image13.png', 'image14.png', 'image15.png', 'image16.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblPortfolio`
--
ALTER TABLE `tblPortfolio`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblPortfolio`
--
ALTER TABLE `tblPortfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
