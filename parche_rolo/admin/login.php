<?php
require dirname(__DIR__).'/db.php';
if (!empty($_SESSION['admin_id'])) { header('Location: index.php'); exit; }
$err='';
if ($_SERVER['REQUEST_METHOD']==='POST') {
 csrf_check(); $now=time(); $_SESSION['login_attempts']=$_SESSION['login_attempts']??[]; $_SESSION['login_attempts']=array_values(array_filter($_SESSION['login_attempts'],fn($t)=>$t>$now-600));
 if(count($_SESSION['login_attempts'])>=8){$err='Demasiados intentos. Espera 10 minutos antes de volver a intentar.';}
 else { $q=$pdo->prepare('SELECT id,username,password_hash FROM admins WHERE username=? LIMIT 1');$q->execute([trim($_POST['username']??'')]);$a=$q->fetch();
  if($a && password_verify($_POST['password']??'',$a['password_hash'])) { session_regenerate_id(true); $_SESSION['admin_id']=$a['id'];$_SESSION['admin_name']=$a['username'];$_SESSION['login_attempts']=[];$pdo->prepare('UPDATE admins SET last_login_at=NOW() WHERE id=?')->execute([$a['id']]);header('Location: index.php');exit; }
  $_SESSION['login_attempts'][]=$now;$err='Usuario o contraseña incorrectos.';
 }
}
?><!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Inicio de sesión · Parché Rolo</title><link rel="stylesheet" href="admin.css"></head><body><main class="login-wrap"><div class="login-card"><div class="login-logo">♛ PARCHÉ <span>ROLO</span></div><h1>Inicio de sesión</h1><p class="sub">Acceso privado al panel del creador</p><?php if(isset($_GET['created'])):?><div class="notice">Administrador creado. Inicia sesión.</div><?php endif;?><?php if($err):?><div class="notice error"><?=h($err)?></div><?php endif;?><form method="post" autocomplete="on"><input type="hidden" name="csrf_token" value="<?=h(csrf_token())?>"><label for="username">Usuario administrador</label><input class="field" id="username" name="username" required maxlength="80" autocomplete="username" autofocus><label for="password">Contraseña</label><input class="field" id="password" type="password" name="password" required autocomplete="current-password"><button class="btn primary" type="submit">🔐 Entrar al panel</button></form><p class="sub" style="font-size:11px;margin-top:22px">Solo personal autorizado · Parché Rolo</p><p style="text-align:center"><a href="../index.html">← Volver al juego</a></p></div><div class="foot">Creador: keromato</div></main></body></html>
