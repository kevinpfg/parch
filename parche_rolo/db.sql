CREATE DATABASE IF NOT EXISTS parche_rolo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE parche_rolo;
CREATE TABLE IF NOT EXISTS admins (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 username VARCHAR(80) NOT NULL UNIQUE,
 password_hash VARCHAR(255) NOT NULL,
 last_login_at DATETIME NULL,
 created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS app_settings (
 setting_key VARCHAR(100) PRIMARY KEY,
 setting_value LONGTEXT NOT NULL,
 updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS game_sessions (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 session_token CHAR(64) NOT NULL,
 event_type VARCHAR(80) NOT NULL,
 payload JSON NOT NULL,
 ip_hash CHAR(64) NULL,
 created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 INDEX idx_game_token(session_token), INDEX idx_game_created(created_at), INDEX idx_game_type(event_type)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS custom_cards (
 id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 category ENUM('verdad','reto','castigo') NOT NULL,
 intensity ENUM('suave','picante','pesada') NOT NULL DEFAULT 'picante',
 card_text TEXT NOT NULL,
 enabled TINYINT(1) NOT NULL DEFAULT 1,
 created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 INDEX idx_cards_category(category,enabled), INDEX idx_cards_intensity(intensity)
) ENGINE=InnoDB;
CREATE TABLE IF NOT EXISTS music_tracks (
 id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
 title VARCHAR(150) NOT NULL,
 filename VARCHAR(255) NOT NULL,
 enabled TINYINT(1) NOT NULL DEFAULT 1,
 sort_order INT NOT NULL DEFAULT 0,
 updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 UNIQUE KEY uq_music_filename(filename)
) ENGINE=InnoDB;
INSERT IGNORE INTO music_tracks(title,filename,enabled,sort_order) VALUES
 ('Música 1','musica-parche.m4a',1,1),('Música 2','musica-parche-2.m4a',1,2),('Música 3','musica-parche-3.m4a',1,3),('Música 4','musica-parche-4.m4a',1,4),('Música 5','musica-parche-5.m4a',1,5),
 ('Guaracha nueva','musica-parche-6.m4a',1,6),
 ('Nerea - Leeb & Manco - The Sound','musica-parche-7.m4a',1,7);
INSERT IGNORE INTO app_settings(setting_key,setting_value) VALUES ('app_name','Parché Rolo'),('maintenance_mode','0'),('allow_custom_cards','1');
