-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 01, 2013 at 01:08 AM
-- Server version: 5.5.31
-- PHP Version: 5.3.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `charoen1_diamond`
--

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

DROP TABLE IF EXISTS `categorys`;
CREATE TABLE IF NOT EXISTS `categorys` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `name_en` varchar(50) NOT NULL,
  `name_th` varchar(50) NOT NULL,
  `content_en` text NOT NULL,
  `content_th` text NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `name_en` varchar(50) NOT NULL,
  `name_th` varchar(50) NOT NULL,
  `content_en` text NOT NULL,
  `content_th` text NOT NULL,
  `speci_en` text NOT NULL,
  `speci_th` text NOT NULL,
  `image` varchar(50) NOT NULL,
  `category_id` int(2) NOT NULL,
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name_en`, `name_th`, `content_en`, `content_th`, `speci_en`, `speci_th`, `image`, `category_id`, `create_at`, `update_at`) VALUES
(1, 'Diamond Concrete Nail', 'ตะปูคอนกรีตตราเพชร', 'Some detail about this topic. It should be around 3-4 lines. Some detail about this topic. It should be around 3-4 lines. Some detail about this topic.', 'สำ ดีเมล ดีส ท๊อปปิก. อิส ชูด บี อราว ๓-๔ ไลน์. สำ ดีเมล ดีส ท๊อปปิก. อิส ชูด บี อราว ๓-๔ ไลน์. สำ ดีเมล ดีส ท๊อปปิก.', 'This can be an important product specification. It cannot be one more 1 line.', 'ดิส แคน บี แอน อิมพอตทาน โพรดัก สะเปสิฟิกเคชั่น อิส แคนน๊อต บี วัน มอ 1 ไลน์', 'ph-products-dconcretenail.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
