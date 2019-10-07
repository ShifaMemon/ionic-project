-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 30, 2019 at 12:15 PM
-- Server version: 5.7.26-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temp`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(10) UNSIGNED NOT NULL,
  `survey_id` int(11) NOT NULL,
  `ques_id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `answer` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `c_id` int(10) UNSIGNED NOT NULL,
  `c_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_of_emp` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`c_id`, `c_name`, `password`, `email`, `address`, `phone_no`, `no_of_emp`, `status`, `token`, `created_at`, `updated_at`) VALUES
(14, 'PQR', '$2y$10$U5ImWIN7yL2xhIE3IuOJb.UKyGXIJlIvFWxlWOYpwUXcbkQLMV6HG', 'pqr@gmail.com', 'fjjg,jkfjg,ghjghghhghgh', '21212121', '2', 'pending', NULL, '2019-09-03 03:28:46', '2019-09-21 00:10:03'),
(15, 'my_company', '$2y$10$rUJOW1uk31S6JjOaYv2oOeiOheQvG2RORnp8b3jpFj66FZGBIwrt6', 'myCompany@gmail.com', 'fbhjerbuhboweh', '6453423387', '3', 'pending', NULL, '2019-09-21 00:10:53', '2019-09-21 00:10:53'),
(16, 'my_company111', '$2y$10$0MXki.yynG8j/uV46XBBsuv42S9xgB9g7mO77.WlOURjH3TTgGKDm', 'mycompany111@gmail.com', 'c-202,bhakti appt,anand-388120', '6453423387', '3', 'pending', NULL, '2019-09-28 01:52:20', '2019-09-28 01:52:20'),
(17, 'shivansh', '$2y$10$Iu42qo4YXRCxIwNRUDrdm.HseXu1Q.UwYEqcek9RiRJOe6L4xvDZy', 'shivansh@gmail.com', 'c-202,bhakti appt,anand-388120', '6453423387', '2', 'aproved', NULL, '2019-09-28 02:01:16', '2019-09-28 02:01:16'),
(19, 'shivansh', '$2y$10$wY967SXTF8oQdHYQgQ38HeBA5AKqopjfV02TpTnKFYSwa59/hjqNO', 'shivansh1@gmail.com', 'c-202,bhakti appt,anand-388120', '6453423387', '2', 'pending', NULL, '2019-09-28 02:02:18', '2019-09-28 02:02:18'),
(20, 'PQR', '$2y$10$5tNJxBxcH8M0pXe5/8KQ9u70n1NVS8uNS3RbxbjGnJsSDOrFWAF.G', 'PQR111@gmail.com', 'c-202,bhakti appt,anand-388120', '6453423387', '3', 'running', NULL, '2019-09-28 03:38:47', '2019-09-28 03:38:47');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `msg` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `phone_no`, `msg`, `remember_token`, `created_at`, `updated_at`) VALUES
(7, 'abcd', 'abcd@gmail.com', '1234443', 'dfggff ghh', NULL, '2019-08-03 01:08:52', '2019-09-21 00:09:45'),
(8, 'fgjgl', 'dfgjdg@gmail.com', '232324', 'dfgdgk', NULL, '2019-08-03 01:09:45', '2019-08-03 01:09:45'),
(9, 'fgf', 'fgfg@gmail.com', '43434343', 'fgg', NULL, '2019-08-03 01:14:38', '2019-08-03 04:18:57'),
(11, 'abc', 'abc@gmail.com', '1223334', 'dfd', NULL, '2019-08-03 04:17:28', '2019-08-03 04:17:28'),
(12, 'fgfg', 'aaa@gmail.com', '2323', 'fdfd', NULL, '2019-08-03 04:17:57', '2019-08-03 04:17:57'),
(13, 'purvadi', 'purvadi@gmail.com', '123456', 'fkgfg', NULL, '2019-08-06 00:37:40', '2019-08-06 00:37:40'),
(14, 'tes', 'test@gmail.com', 'test', 'test', NULL, '2019-08-07 00:34:24', '2019-08-07 00:34:24'),
(15, 'purvaben', 'emp1@gmail.com', '435343431212', ',lko', NULL, '2019-09-06 04:05:33', '2019-09-06 04:05:33'),
(16, 'ghg', 'ttt@gmail.com', '345678932', 'vcbb', NULL, '2019-09-21 00:03:37', '2019-09-21 00:03:37');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(10) UNSIGNED NOT NULL,
  `d_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `d_name`, `status`, `token`, `created_at`, `updated_at`, `company_id`) VALUES
(9, 'gekko', 'pending', NULL, '2019-09-03 03:28:57', '2019-09-21 00:10:16', 14),
(10, 'sssF', 'pending', NULL, '2019-09-06 04:06:48', '2019-09-06 04:06:57', 14),
(11, 'emp2', 'pending', NULL, '2019-09-21 00:11:13', '2019-09-21 00:11:13', 15);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(10) UNSIGNED NOT NULL,
  `e_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dept_id` int(11) DEFAULT NULL,
  `comp_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `e_name`, `password`, `email`, `address`, `phone_no`, `status`, `token`, `created_at`, `updated_at`, `dept_id`, `comp_id`) VALUES
(1, 'khushi', '$2y$10$EDHskjQBVG8JlLIuVn8QP.rakKByM7N4m4IDyaXKRhaN3ZvNTtGVK', 'khushi@gmail.com', 'fbhjerbuhboweh', 645346, 'running', NULL, '2019-09-07 04:55:03', '2019-09-07 04:55:03', 9, 14),
(2, 'nitin', '$2y$10$jLKP7P9f/rDfRoI10wegaOusQxvpRcWcJgaC59jCv2r4JRS5hwjoq', 'nitin@gmail.com', 'dfdf', 23456789, 'pending', NULL, '2019-09-21 00:12:20', '2019-09-21 00:12:20', 9, 15);

-- --------------------------------------------------------

--
-- Table structure for table `employee_sizes`
--

CREATE TABLE `employee_sizes` (
  `id` int(10) UNSIGNED NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `employee_sizes`
--

INSERT INTO `employee_sizes` (`id`, `size`, `created_at`, `updated_at`) VALUES
(1, '0-100', NULL, NULL),
(2, '100-500', NULL, NULL),
(3, '500-1000', NULL, NULL),
(4, '1000-5000', NULL, NULL),
(5, '5000-10000', NULL, NULL),
(6, '10000-50000', NULL, NULL),
(7, '50000+', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_07_10_061255_contact_table', 2),
(4, '2019_08_06_102135_company_registers', 3),
(5, '2019_08_06_102153_employee_registers', 3),
(6, '2019_08_06_102205_departments', 3),
(7, '2019_08_06_102215_surveys', 3),
(8, '2019_08_06_102235_questionaries', 3),
(9, '2019_08_06_102253_survey_answers', 3),
(10, '2019_08_06_103851_rename_table_company_to_companies', 4),
(11, '2019_08_08_064032_nothing', 5),
(12, '2019_08_08_064146_employee_register', 6),
(13, '2019_08_08_104428_departments', 7),
(14, '2019_08_08_104553_departments', 8),
(15, '2019_08_26_100845_employee_size', 9),
(16, '2019_08_28_054435_alert_department', 10),
(17, '2019_08_28_065430_dept_i_d_employee', 11),
(18, '2019_09_04_061730_survey', 12),
(19, '2019_09_05_055350_question_type', 13),
(20, '2019_09_05_055809_questionaries', 13),
(21, '2019_09_05_055945_answers', 13),
(22, '2019_09_05_060810_question_type', 14);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('purva@gmail.com', '$2y$10$GNzV/JM4l4uF7DMsocfxM.lmhPLXs2mIkUKY3t8UrbUyjf5psACSy', '2019-09-28 00:33:14'),
('purvathakkar111@gmail.com', '$2y$10$ljwSKQn4Vx4rR.YLS.iHQuLOaW/Gmn4rw70hTNmxe.o7jsnioL94q', '2019-09-28 00:35:29');

-- --------------------------------------------------------

--
-- Table structure for table `questionaries`
--

CREATE TABLE `questionaries` (
  `id` int(10) UNSIGNED NOT NULL,
  `survey_id` int(11) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `question_types`
--

CREATE TABLE `question_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `question_types`
--

INSERT INTO `question_types` (`id`, `type_name`, `token`, `created_at`, `updated_at`) VALUES
(1, 'Open_Ended', NULL, NULL, NULL),
(2, 'multiline_open_end', NULL, NULL, NULL),
(3, 'selection', NULL, NULL, NULL),
(4, 'textarea', NULL, NULL, NULL),
(5, 'checkbox\r\n', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` int(10) UNSIGNED NOT NULL,
  `comp_id` int(11) DEFAULT NULL,
  `s_start_date` date DEFAULT NULL,
  `s_end_date` date DEFAULT NULL,
  `survey_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `desc` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `comp_id`, `s_start_date`, `s_end_date`, `survey_title`, `desc`, `status`, `token`, `created_at`, `updated_at`) VALUES
(5, 14, '2019-09-18', '2019-09-03', 'fdfdf', 'dfdfdf', 'aproved', NULL, '2019-09-05 05:23:43', '2019-09-05 05:23:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` text COLLATE utf8mb4_unicode_ci,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(5, 'purva', 'puruthakkar.99@gmail.com', 'admin', '$2y$10$cfYoOQ4dg2TI3OeCOsBKHeiyzeto4QPbkFeAJNR1ijY.bU4bjyaIS', 'QP0ihpBlFyKEoOKXfkrC0XjizW5vAdnr3ViRkzU3dEW0PSlstU0tpspY5ikf', '2019-08-06 00:36:41', '2019-09-28 01:54:40'),
(6, 'shifa', 'shifa@gmail.com', 'admin', '$2y$10$uWjmJfiABhY1ImPBYD569OUrHDJbDKdc8TgOx/4aTanSdxDxmcYp2', 'd2bu6THHILPPuz3OUN8G6K4aQt9nZ4DAiv1u5YQkW5lcKJb8QcnVanmpN2GV', '2019-08-06 01:12:22', '2019-08-06 01:12:22'),
(7, 'parth', 'parth@gmail.com', 'company', '$2y$10$lgNl6HCYgtvjuGu72S099eIANeJ3WBkaYaR1i5ZD24FrSco6JDNPG', NULL, '2019-08-06 01:42:12', '2019-08-06 01:42:12'),
(8, 'parth1', 'parthchokshi@gmail.com', 'company', '$2y$10$a7vxUagM.mioVuZhzEtPw.WmQ2CWra1f9Y5JAsfMkoV0Mlmn2BVk6', 'r0qIXxWXla8enhBltb7j8cNIzp42mEvSc5gYjAoERzvfrWshlHglIy5x24GU', '2019-08-21 00:23:26', '2019-08-21 00:23:26'),
(9, 'ABCDEF', 'ABCDEF@gmail.com', NULL, '$2y$10$PXk5wcjPIpgEvNqyncUpleFTS9yrEp.pRrZdknosXmakMNC/pqNC2', 'FHsGglwxI95l7mCMnj7YWtnhDqnKN94hVhEEpn1N1HZZL72DNmKVg1dcr6Lv', '2019-09-28 03:37:44', '2019-09-28 03:37:44'),
(10, 'PQR', 'PQR111@gmail.com', NULL, '$2y$10$NtkVz7/3I/InLU/7zLwZ1eyOEfWl2FnD6f5k7RaNVkfP/hodShzFW', 'oBSk8LsF55ypfoIhNgiwn1okNa53mfKYiQsEH9En3ZaT7hneiihup0ibDqa4', '2019-09-28 03:38:48', '2019-09-28 03:38:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`c_id`),
  ADD UNIQUE KEY `company_email_unique` (`email`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contacts_email_unique` (`email`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employees_email_unique` (`email`);

--
-- Indexes for table `employee_sizes`
--
ALTER TABLE `employee_sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `questionaries`
--
ALTER TABLE `questionaries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `question_types`
--
ALTER TABLE `question_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `surveys_survey_title_unique` (`survey_title`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `c_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `employee_sizes`
--
ALTER TABLE `employee_sizes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `questionaries`
--
ALTER TABLE `questionaries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `question_types`
--
ALTER TABLE `question_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
