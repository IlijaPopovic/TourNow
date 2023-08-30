-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 30, 2023 at 10:27 AM
-- Server version: 5.7.34
-- PHP Version: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `turist`
--
CREATE DATABASE IF NOT EXISTS `turist` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `turist`;

-- --------------------------------------------------------

--
-- Table structure for table `accommodation`
--

CREATE TABLE `accommodation` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `stars` int(11) NOT NULL,
  `image` varchar(100) NOT NULL,
  `about` text NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accommodation`
--

INSERT INTO `accommodation` (`id`, `name`, `stars`, `image`, `about`, `enabled`) VALUES
(8, 'hotel 1', 3, 'images/h1.webp', 'ovo je neki hotel', 1),
(9, 'Hotel 2', 4, 'images/64ed7ba2902950.76245173.jpeg', 'ovo je kao dobroasdakwdjklawjkddwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw', 1);

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `password`) VALUES
(1, 'adminadmin', '$2y$10$DoAjLcYPiGo4iVgq.nrv5eW7jPjUBVfspOGDtpZgm72YWWn4BUFfi');

-- --------------------------------------------------------

--
-- Table structure for table `attraction`
--

CREATE TABLE `attraction` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `image` varchar(100) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `description` text NOT NULL,
  `price` varchar(45) NOT NULL,
  `max_people` int(11) NOT NULL,
  `destination_id` int(10) UNSIGNED NOT NULL,
  `reserved` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `attraction`
--

INSERT INTO `attraction` (`id`, `name`, `image`, `date_start`, `date_end`, `description`, `price`, `max_people`, `destination_id`, `reserved`) VALUES
(1, 'bioskop', '', '2023-08-17 15:16:15', '2023-08-17 00:00:00', 'bdhgsdgdgdsfgsdfgsdfLorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry\'s standard dummy text ever\n        since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book. It has survived not only\n        five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with\n        the release of Letraset sheets containing Lorem Ipsum passages, and\n        more recently with desktop publishing software like Aldus PageMaker\n        including versions of Lorem Ipsum.', '100', 4, 5, 4),
(2, 'Setnja Novi Sad 2', '123', '2023-08-18 00:00:00', '2023-08-19 00:00:00', 'adawdawdawLorem Ipsum is simply dummy text of the printing and typesetting\r\n        industry. Lorem Ipsum has been the industry\'s standard dummy text ever\r\n        since the 1500s, when an unknown printer took a galley of type and\r\n        scrambled it to make a type specimen book. It has survived not only\r\n        five centuries, but also the leap into electronic typesetting,\r\n        remaining essentially unchanged. It was popularised in the 1960s with\r\n        the release of Letraset sheets containing Lorem Ipsum passages, and\r\n        more recently with desktop publishing software like Aldus PageMaker\r\n        including versions of Lorem Ipsum.', '100', 6, 3, 3),
(3, 'pozoriste', '', '2023-08-17 15:17:43', '2023-08-17 00:00:00', 'sgsgrs rsgsrefgserfesLorem Ipsum is simply dummy text of the printing and typesetting\n        industry. Lorem Ipsum has been the industry\'s standard dummy text ever\n        since the 1500s, when an unknown printer took a galley of type and\n        scrambled it to make a type specimen book. It has survived not only\n        five centuries, but also the leap into electronic typesetting,\n        remaining essentially unchanged. It was popularised in the 1960s with\n        the release of Letraset sheets containing Lorem Ipsum passages, and\n        more recently with desktop publishing software like Aldus PageMaker\n        including versions of Lorem Ipsum.', '100', 2, 4, 2),
(4, 'Ime atrakcije', 'images/64ee2f78647878.74243129.jpg', '2023-08-17 00:00:00', '2023-08-12 00:00:00', 'Atrakcija atrakcija atrackija', '1234', 3, 4, 0),
(5, 'atrakcija', 'images/64ee2fda40dcf2.97690849.jpg', '2023-08-10 00:00:00', '2023-08-06 00:00:00', 'atrakcija atrakcija aktrakcija ', '1234', 5, 4, 0);

-- --------------------------------------------------------

--
-- Table structure for table `attraction_reservation`
--

CREATE TABLE `attraction_reservation` (
  `id` int(10) UNSIGNED NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(10) UNSIGNED NOT NULL,
  `attraction_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `attraction_reservation`
--

INSERT INTO `attraction_reservation` (`id`, `created`, `user_id`, `attraction_id`) VALUES
(11, '2023-08-30 08:44:43', 50, 3),
(13, '2023-08-30 10:20:24', 50, 3);

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(10) UNSIGNED NOT NULL,
  `sender` enum('user','organisation') NOT NULL,
  `message` text NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(11) UNSIGNED NOT NULL,
  `organisation_id` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(10) UNSIGNED NOT NULL,
  `grade` int(11) NOT NULL,
  `opinion` varchar(100) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` int(10) UNSIGNED NOT NULL,
  `destination_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `destination`
--

CREATE TABLE `destination` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `coordinates` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `destination`
--

INSERT INTO `destination` (`id`, `name`, `coordinates`, `country`, `description`, `image`) VALUES
(3, 'Novi sad je lep', '45.2396,19.8227', 'Serbia', 'ovo je kao dobroasdakwdjklawjkddwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw', 'images/ns.jpg'),
(4, 'Subotica', '46.0970,19.6576', 'Serbia', 'ovo je kao dobroasdakwdjklawjkddwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 'images/su.jpg'),
(5, 'Beograd', '44.8125,20.4612', 'Serbia', 'dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 'images/bg2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `location_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organisation`
--

CREATE TABLE `organisation` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `about` text NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `verified` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `organisation`
--

INSERT INTO `organisation` (`id`, `name`, `mail`, `password`, `image`, `about`, `enabled`, `verified`) VALUES
(13, 'Lasta', 'ilijapro555@gmail.com', '$2y$10$.8ozp95potQy.JwgEhrSvOtk4PiajooQXjc/EmXWWQkZnY98n5AgK', 'images/lasta.jpg', 'dwadawdawdawdwa 222222222222222dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw', 1, 1),
(14, 'Jez1', 'jez@gmail.com', '1234512345', 'images/jez.jpeg', 'dwadawdawdawdwa 222222222222222dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 1, 0),
(15, 'Kokoska', 'kokoska@gmail.com', '112312312312312321', 'images/kokoska.jpeg', 'dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 1, 0),
(16, 'Lisica', 'lisica@gmail.com', '112312312312312321', 'images/lisica.jpeg', 'dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 1, 0),
(17, 'Medved', 'medved@gmail.com', '112312312312312321', 'images/medved.jpg', 'dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(10) UNSIGNED NOT NULL,
  `checked` tinyint(1) DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tour_group` int(11) DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `tour_id` int(10) UNSIGNED NOT NULL,
  `transport_id` int(10) UNSIGNED DEFAULT NULL,
  `room_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `reservation`
--

INSERT INTO `reservation` (`id`, `checked`, `created`, `tour_group`, `user_id`, `tour_id`, `transport_id`, `room_id`) VALUES
(5, 0, '2023-08-29 09:50:22', 1, 50, 30, NULL, NULL),
(6, 0, '2023-08-30 08:44:36', 1, 50, 30, 4, 2),
(7, 0, '2023-08-30 08:44:52', 1, 50, 36, NULL, NULL),
(8, 0, '2023-08-30 09:14:21', 1, 50, 31, NULL, NULL),
(9, 0, '2023-08-30 09:14:31', 1, 50, 36, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) UNSIGNED NOT NULL,
  `beds_number` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `kid_number` int(11) NOT NULL,
  `service` enum('polu pansion','nocenje sa doruckom','pun pansion','all inclusive','najam apartmana') NOT NULL,
  `booked` tinyint(1) NOT NULL,
  `tour_id` int(10) UNSIGNED NOT NULL,
  `accommodation_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `beds_number`, `name`, `kid_number`, `service`, `booked`, `tour_id`, `accommodation_id`) VALUES
(1, 3, 'Soba 1', 2, 'polu pansion', 0, 30, 8),
(2, 2, 'Soba 2', 0, 'nocenje sa doruckom', 1, 30, 8),
(3, 3, 'Soba 33', 2, 'pun pansion', 0, 30, 9);

-- --------------------------------------------------------

--
-- Table structure for table `statistics`
--

CREATE TABLE `statistics` (
  `id` int(10) UNSIGNED NOT NULL,
  `organisation_id` int(11) UNSIGNED NOT NULL,
  `tour_id` int(11) UNSIGNED NOT NULL,
  `number_of_clicks` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `statistics`
--

INSERT INTO `statistics` (`id`, `organisation_id`, `tour_id`, `number_of_clicks`) VALUES
(1, 14, 30, 527),
(10, 13, 31, 68),
(232, 15, 36, 22);

-- --------------------------------------------------------

--
-- Table structure for table `tour`
--

CREATE TABLE `tour` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(45) NOT NULL,
  `date_start` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `description` text NOT NULL,
  `max_people` int(11) NOT NULL,
  `type` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `organisation_id` int(10) UNSIGNED NOT NULL,
  `destination_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tour`
--

INSERT INTO `tour` (`id`, `name`, `date_start`, `date_end`, `description`, `max_people`, `type`, `price`, `enabled`, `created`, `organisation_id`, `destination_id`) VALUES
(30, 'Izlet Beograd', '2023-08-17 18:09:31', '2023-08-17 18:09:31', 'dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw dwadawdawdawdwa dawd awd awd aw awd aw daw d aw awd awd aw dawd aw wd aw daw daw daw aw daw daw daw ', 10, '1', '100', 1, '2023-08-17 20:09:59', 14, 5),
(31, 'Poseta Zoo vrt', '2023-08-24 08:10:41', '2023-08-24 10:10:41', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\n', 4, 'zoo vrt', '100', 1, '2023-08-23 10:34:59', 13, 4),
(36, 'Obilazenje Novog Sada', '2023-08-15 00:00:00', '2023-08-15 00:00:00', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including version', 3, 'Setnja', '100', 1, '2023-08-29 09:43:12', 15, 3);

-- --------------------------------------------------------

--
-- Table structure for table `tour_image`
--

CREATE TABLE `tour_image` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `link` varchar(100) NOT NULL,
  `tour_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tour_image`
--

INSERT INTO `tour_image` (`id`, `name`, `link`, `tour_id`) VALUES
(9, 'images/bg.jpg', '1', 30),
(10, 'images/bg.jpg', 'dawdawd', 30),
(11, 'images/s1.jpg', '123', 31),
(35, 'images/64eda190526b21.12365356.jpg', 'ne', 36);

-- --------------------------------------------------------

--
-- Table structure for table `transport`
--

CREATE TABLE `transport` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` enum('bus','car','plane','ship','train','own') NOT NULL,
  `price` int(100) NOT NULL DEFAULT '100',
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `tour_id` int(10) UNSIGNED NOT NULL,
  `booked` tinyint(4) NOT NULL DEFAULT '0',
  `max_people` int(11) NOT NULL DEFAULT '10'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `transport`
--

INSERT INTO `transport` (`id`, `name`, `type`, `price`, `start`, `end`, `tour_id`, `booked`, `max_people`) VALUES
(1, 'primer 1', 'bus', 100, '2023-08-19 04:02:37', '2023-08-19 04:02:37', 30, 16, 10),
(3, 'primer 22', 'plane', 100, '2023-08-19 04:02:37', '2023-08-19 04:02:37', 30, 0, 10),
(4, 'primer 3', 'ship', 100, '2023-08-19 04:02:37', '2023-08-19 04:02:37', 30, 1, 10),
(5, 'primer 4', 'train', 100, '2023-08-19 04:05:24', '2023-08-19 04:05:24', 30, 1, 10),
(6, 'primer 5', 'plane', 100, '2023-08-19 06:24:00', '2023-08-19 06:24:00', 30, 1, 10),
(7, 'primer 6\r\n', 'car', 100, '2023-08-19 06:24:00', '2023-08-19 06:24:00', 30, 0, 10);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `identity_number` varchar(100) NOT NULL,
  `country` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `mobile_number` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `verified` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `surname`, `identity_number`, `country`, `address`, `mail`, `password`, `mobile_number`, `image`, `created`, `verified`) VALUES
(50, 'test user', 'user', '7654321', 'Serbia', 'Adress number 2', 'ilijapro555@gmail.com', '$2y$10$1GJCBWxXlg.BhmWHZbxY..rInn4BC7gRr/TRlGUOaJWgKBgeeixlW', '1234567', 'images/64ed5a26bc5267.29319715.jpeg', '2023-08-29 04:38:31', 1),
(53, 'Ilija', 'Popovic', '12345', 'Austria', 'julius raab strasse', 'popovic.ilija.99@gmail.com', '$2y$10$nlgxdWWS2LrcIl/ks21eAeTdt/JeaY2hXv0hbTbKmOfK1VFVMn39m', '+4367764417067', 'images/64eda463787fb9.26239744.jpg', '2023-08-29 09:55:16', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accommodation`
--
ALTER TABLE `accommodation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attraction`
--
ALTER TABLE `attraction`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_attraction_destination` (`destination_id`);

--
-- Indexes for table `attraction_reservation`
--
ALTER TABLE `attraction_reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_attraction_ticket_user` (`user_id`),
  ADD KEY `fk_attraction_ticket_attraction` (`attraction_id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_chat_organisation` (`organisation_id`),
  ADD KEY `fk_chat_user` (`user_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_commnet_user1_idx` (`user_id`),
  ADD KEY `fk_commnet_tour1_idx` (`destination_id`);

--
-- Indexes for table `destination`
--
ALTER TABLE `destination`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_favorite_user1` (`user_id`),
  ADD KEY `fk_favorite_location1_idx` (`location_id`);

--
-- Indexes for table `organisation`
--
ALTER TABLE `organisation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_reservation_user1_idx` (`user_id`),
  ADD KEY `fk_reservation_tour1_idx` (`tour_id`),
  ADD KEY `fk_reservation_transport1` (`transport_id`),
  ADD KEY `fk_reservation_room1` (`room_id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_accommodation_tour1_idx` (`tour_id`),
  ADD KEY `fk_room_accommodation1` (`accommodation_id`);

--
-- Indexes for table `statistics`
--
ALTER TABLE `statistics`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_tour_organization` (`tour_id`),
  ADD KEY `fk_Statisstics_organisation` (`organisation_id`);

--
-- Indexes for table `tour`
--
ALTER TABLE `tour`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tour_organisation_idx` (`organisation_id`),
  ADD KEY `fk_tour_location1_idx` (`destination_id`);

--
-- Indexes for table `tour_image`
--
ALTER TABLE `tour_image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tour_image_tour1_idx` (`tour_id`);

--
-- Indexes for table `transport`
--
ALTER TABLE `transport`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_Transport_tour1_idx` (`tour_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accommodation`
--
ALTER TABLE `accommodation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `attraction`
--
ALTER TABLE `attraction`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `attraction_reservation`
--
ALTER TABLE `attraction_reservation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `destination`
--
ALTER TABLE `destination`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `organisation`
--
ALTER TABLE `organisation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `statistics`
--
ALTER TABLE `statistics`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=542;

--
-- AUTO_INCREMENT for table `tour`
--
ALTER TABLE `tour`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `tour_image`
--
ALTER TABLE `tour_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `transport`
--
ALTER TABLE `transport`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `attraction`
--
ALTER TABLE `attraction`
  ADD CONSTRAINT `fk_attraction_destination` FOREIGN KEY (`destination_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `attraction_reservation`
--
ALTER TABLE `attraction_reservation`
  ADD CONSTRAINT `fk_attraction_ticket_attraction` FOREIGN KEY (`attraction_id`) REFERENCES `attraction` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_attraction_ticket_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `chat`
--
ALTER TABLE `chat`
  ADD CONSTRAINT `fk_chat_organisation` FOREIGN KEY (`organisation_id`) REFERENCES `organisation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_chat_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `fk_commnet_destination1` FOREIGN KEY (`destination_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_commnet_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favorite`
--
ALTER TABLE `favorite`
  ADD CONSTRAINT `fk_favorite_location1` FOREIGN KEY (`location_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_favorite_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `fk_reservation_room1` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservation_tour1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservation_transport1` FOREIGN KEY (`transport_id`) REFERENCES `transport` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservation_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `fk_room_accommodation1` FOREIGN KEY (`accommodation_id`) REFERENCES `accommodation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_room_tour1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `statistics`
--
ALTER TABLE `statistics`
  ADD CONSTRAINT `fk_Statisstics_organisation` FOREIGN KEY (`organisation_id`) REFERENCES `organisation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Statisstics_tour` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tour`
--
ALTER TABLE `tour`
  ADD CONSTRAINT `fk_tour_destination1` FOREIGN KEY (`destination_id`) REFERENCES `destination` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tour_organisation` FOREIGN KEY (`organisation_id`) REFERENCES `organisation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tour_image`
--
ALTER TABLE `tour_image`
  ADD CONSTRAINT `fk_tour_image_tour1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `transport`
--
ALTER TABLE `transport`
  ADD CONSTRAINT `fk_Transport_tour1` FOREIGN KEY (`tour_id`) REFERENCES `tour` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
