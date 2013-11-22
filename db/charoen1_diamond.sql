-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 22, 2013 at 04:48 PM
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
  `image` varchar(50) NOT NULL DEFAULT '',
  `create_at` datetime NOT NULL,
  `update_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name_en`, `name_th`, `content_en`, `content_th`, `image`, `create_at`, `update_at`) VALUES
(1, 'Concrete Nails', 'ตะปูคอนกรีต', 'The most popular concrete nail in Thailand, our concrete nail is hard, the shank is short and thick commonly and it has excellent piecing and fixing strength.', 'ตะปูคอนกรีตที่ได้รับความนิยมสูงสุดในประเทศไทย ตอกง่าย แข็งแรง คงทน.', 'ph-home-product-left.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Wooden Nails', 'ตะปูไม้', 'Smooth shank common nails with high strength and sturdiness. Common nails are widely used nail used in general construction.', 'แข็งแรง ลำตัวไม่โค้งงอ หัวตรงได้ศูนย์กลาง ปลายแหลมไม่มีครีบ เหมาะสำหรับงานไม้และงานก่อสร้างทุกชนิด.', 'ph-home-product-mid.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Black Annealed Wire', 'ลวดผูกเหล็ก', 'With the best quality of materials, our black annealed wire has high strength, high elasticity.', 'ด้วยวัตถุดิบคุณภาพ ทำให้ลวดมีความยืดหยุ่นสูง ใช้งานง่าย ประหยัดเวลา.', 'ph-home-product-right.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name_en`, `name_th`, `content_en`, `content_th`, `speci_en`, `speci_th`, `image`, `category_id`, `create_at`, `update_at`) VALUES
(1, 'Diamond Concrete Nail', 'ตะปูคอนกรีตตราเพชร', 'There are 8 sizes of our premium concrete nail:\r\n<br>7x4"&nbsp;&nbsp;&nbsp;7x3"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8x2 ½"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9x2"  \r\n<br>9x1"&nbsp;&nbsp;&nbsp;9x1 ½"&nbsp;&nbsp;&nbsp;12x1 ½"&nbsp;&nbsp;&nbsp;12x1"\r\n<br>Packing: 20 cartons/box\r\n(1 kg/carton).', 'ตะปูคอนกรีตเกรดพรีเมียม มีทั้งหมด 8 ขนาด ได้แก่\r\n<div style="font-family:Roboto Light;font-size:20px;">7x4"&nbsp;&nbsp;&nbsp;7x3"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8x2 ½"&nbsp;&nbsp;&nbsp;&nbsp;9x2"  \r\n<br>9x1"&nbsp;&nbsp;&nbsp;9x1 ½"&nbsp;&nbsp;&nbsp;12x1 ½"&nbsp;&nbsp;&nbsp;12x1"</div>\r\n<br>บรรจุ 1 ลัง มี 20 กล่องเล็ก\r\nกล่องเล็กมีน้ำหนัก 1 กิโลกรัม ', '', '', 'ph-products-dconcretenail.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Eagle Concrete Nail', 'ตะปูคอนกรีตตราเหยี่ยว', 'High-quality concrete nail. There are 8 sizes: \r\n<br>7x4"&nbsp;&nbsp;&nbsp;7x3"\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8x2 ½"\r\n&nbsp;&nbsp;&nbsp;&nbsp;9x2"\r\n<br>9x1"&nbsp;&nbsp;&nbsp;9x1 ½"&nbsp;&nbsp;&nbsp;12x1 ½"\r\n&nbsp;&nbsp;12x1"\r\n<br>Packing:  20 cartons/box.', 'ตะปูคอนกรีตคุณภาพสูง มีทั้งหมด 8 ขนาด ได้แก่\r\n<div style="font-family:Roboto Light;font-size:20px;">7x4"&nbsp;&nbsp;&nbsp;7x3"\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8x2 ½"\r\n&nbsp;&nbsp;&nbsp;&nbsp;9x2"\r\n<br>9x1"&nbsp;&nbsp;&nbsp;9x1 ½"\r\n&nbsp;&nbsp;&nbsp;12x1 ½"\r\n&nbsp;&nbsp;&nbsp;12x1"</div>\r\n<br>บรรจุ 1 ลัง มี 20 กล่องเล็ก', '', '', 'ph-products-econcretenail.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Lion Concrete Nail', 'ตะปูตอกไม้ตราสิงโต', 'There are 5 sizes:\r\n<br>4x7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3x10\r\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2 ½ x12\r\n<br>2x13&nbsp;&nbsp;&nbsp;&nbsp;1 ½ x14\r\n<br>Packing: 18kg/box.', 'ตะปูตอกไม้ มีทั้งหมด 5 ขนาด ได้แก่\r\n<div style="font-family:Roboto Light;font-size:20px;">4x7"&nbsp;&nbsp;&nbsp;3x10"&nbsp;&nbsp;&nbsp;&nbsp;2 ½ x12"\r\n<br>2x13"&nbsp;&nbsp;1 ½ x14"</div>\r\n<br>บรรจุลังละ 18 กิโลกรัม', '', '', 'ph-products-woodennail.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 'Black Annealed Wire', 'ลวดอบดำ', 'Annealed Wire#18  is used for weaving, baling in general. Applied for \r\nhome use and the construction. \r\n3 kg/coil (can be customized).', 'ลวดผูกเหล็กเบอร์ 18 ใช้ผูกเหล็กเส้นเพื่อเทพื้นคอนกรีต หรือมัดสิ่งของต่างๆ\r\n1 ขดหนักประมาณ 3 กิโลกรัม (สามารถสั่งทำตามน้ำหนักได้)', '', '', 'ph-products-blackwire.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Steel Wire', 'ลวดเหล็ก', 'Made from high -quality wire rod, We provide wire straightening & \r\ncutting service by hi-tech machine.', 'ให้บริการรีดลวดตามขนาดที่ต้องการ \r\nผลิตจากเหล็กลวดคุณภาพสูง <br>นำมารีดและดึงด้วยเครื่องจักรที่ทันสมัย', '', '', 'ph-products-silverwire.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Wire Mesh (Coming Soon)', 'ตะแกรงเหล็ก', 'Made from cold drawn steel wire, we offer quality Wire Mesh which \r\nused as a reinforcing material in concrete instead of conventional steel bars, and many construction works.', 'ผลิตจากลวดเหล็กรีดเย็น (Cold Drawn Steel Wire) ทอติดกันเป็นผืน \r\nใช้ในงานคอนกรีตเสริมเหล็ก แทนการผูกเหล็กเส้นธรรมดา', '', '', 'ph-products-wiremesh.png', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
