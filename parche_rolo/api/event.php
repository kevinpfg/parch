<?php
require dirname(__DIR__).'/db.php';
header('Content-Type: application/json; charset=utf-8');header('Cache-Control: no-store');
if($_SERVER['REQUEST_METHOD']!=='POST'){http_response_code(405);header('Allow: POST');echo json_encode(['ok'=>false,'error'=>'method_not_allowed']);exit;}
$raw=file_get_contents('php://input');if(strlen($raw)>12000){http_response_code(413);echo json_encode(['ok'=>false,'error'=>'payload_too_large']);exit;}
$d=json_decode($raw,true);if(!is_array($d)){http_response_code(400);echo json_encode(['ok'=>false,'error'=>'invalid_json']);exit;}
$type=preg_replace('/[^a-zA-Z0-9_-]/','',substr((string)($d['type']??'event'),0,80));
$token=preg_replace('/[^a-f0-9]/','',substr((string)($d['session']??''),0,64));if(strlen($token)!==64)$token=bin2hex(random_bytes(32));
$payload=json_encode($d['data']??new stdClass(),JSON_UNESCAPED_UNICODE|JSON_INVALID_UTF8_SUBSTITUTE);if($payload===false)$payload='{}';
$ipHash=hash('sha256',(string)($_SERVER['REMOTE_ADDR']??'unknown'));
$q=$pdo->prepare('INSERT INTO game_sessions(session_token,event_type,payload,ip_hash) VALUES(?,?,?,?)');$q->execute([$token,$type?:'event',$payload,$ipHash]);
echo json_encode(['ok'=>true,'session'=>$token]);
