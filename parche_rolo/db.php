<?php
declare(strict_types=1);
if (session_status() !== PHP_SESSION_ACTIVE) {
  session_set_cookie_params(['httponly'=>true,'samesite'=>'Lax','secure'=>!empty($_SERVER['HTTPS'])]);
  session_start();
}
$configFile = __DIR__.'/config.php';
if (!is_file($configFile)) { http_response_code(500); exit('Falta config.php. Copia config.example.php como config.php y configura MySQL.'); }
$c = require $configFile;
try {
  $pdo = new PDO('mysql:host='.$c['db_host'].';dbname='.$c['db_name'].';charset=utf8mb4', $c['db_user'], $c['db_pass'], [PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC, PDO::ATTR_EMULATE_PREPARES=>false]);
} catch (Throwable $e) { error_log('Parche Rolo DB: '.$e->getMessage()); http_response_code(500); exit('No se pudo conectar a MySQL. Revisa config.php y que MySQL esté iniciado.'); }
// Actualiza columnas nuevas de forma compatible con instalaciones anteriores.
try {
  $pdo->exec("CREATE TABLE IF NOT EXISTS app_settings (setting_key VARCHAR(100) PRIMARY KEY, setting_value LONGTEXT NOT NULL, updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP) ENGINE=InnoDB");
  $migrations = [
    'admins' => ['last_login_at' => 'DATETIME NULL'],
    'game_sessions' => ['ip_hash' => 'CHAR(64) NULL'],
    'custom_cards' => ['updated_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'],
    'music_tracks' => ['updated_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP']
  ];
  foreach ($migrations as $table => $columns) {
    foreach ($columns as $column => $definition) {
      $check = $pdo->prepare('SELECT COUNT(*) FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?');
      $check->execute([$table, $column]);
      if (!(int)$check->fetchColumn()) $pdo->exec('ALTER TABLE `'.$table.'` ADD COLUMN `'.$column.'` '.$definition);
    }
  }
  $pdo->exec("INSERT IGNORE INTO app_settings(setting_key,setting_value) VALUES ('app_name','Parché Rolo'),('maintenance_mode','0'),('allow_custom_cards','1')");
  $pdo->exec("INSERT IGNORE INTO music_tracks(title,filename,enabled,sort_order) VALUES ('Guaracha nueva','musica-parche-6.m4a',1,6),('Nerea - Leeb & Manco - The Sound','musica-parche-7.m4a',1,7)");
} catch (Throwable $e) { error_log('Parche Rolo schema update: '.$e->getMessage()); }
function admin_required(): void { if (empty($_SESSION['admin_id'])) { header('Location: login.php'); exit; } }
function json_body(): array { $v=json_decode(file_get_contents('php://input'),true); return is_array($v)?$v:[]; }
function h($v): string { return htmlspecialchars((string)$v, ENT_QUOTES|ENT_SUBSTITUTE, 'UTF-8'); }
function csrf_token(): string { if (empty($_SESSION['csrf_token'])) $_SESSION['csrf_token']=bin2hex(random_bytes(32)); return $_SESSION['csrf_token']; }
function csrf_check(): void { $sent=(string)($_POST['csrf_token']??''); if (!$sent || !hash_equals(csrf_token(),$sent)) { http_response_code(403); exit('La sesión del formulario venció. Regresa y vuelve a intentarlo.'); } }
