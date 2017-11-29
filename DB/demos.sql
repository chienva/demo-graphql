-- phpMyAdmin SQL Dump
-- version 3.4.10.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 29, 2017 at 03:32 PM
-- Server version: 5.5.54
-- PHP Version: 5.5.37-1+deprecated+dontuse+deb.sury.org~precise+1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `graphql`
--

-- --------------------------------------------------------

--
-- Table structure for table `demos`
--

CREATE TABLE IF NOT EXISTS `demos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `caption` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=6 ;

--
-- Dumping data for table `demos`
--

INSERT INTO `demos` (`id`, `caption`, `content`, `createdAt`, `updatedAt`) VALUES
(1, 'chienva', 'test ma', '2017-11-03 00:00:00', '2017-11-03 00:00:00'),
(2, 'test', 'hahaha', '2017-11-03 04:21:39', '2017-11-03 04:21:39'),
(4, 'my name', 'thich gi', '2017-11-29 07:54:10', '2017-11-29 07:54:10'),
(5, 'thu xem nao', 'tesst de', '2017-11-29 08:25:06', '2017-11-29 08:25:06');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
