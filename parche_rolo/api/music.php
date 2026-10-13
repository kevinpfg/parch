<?php
require dirname(__DIR__).'/db.php';header('Content-Type: application/json; charset=utf-8');header('Cache-Control: no-store');
try{$rows=$pdo->query('SELECT title,filename FROM music_tracks WHERE enabled=1 ORDER BY sort_order,id')->fetchAll();echo json_encode($rows,JSON_UNESCAPED_UNICODE|JSON_INVALID_UTF8_SUBSTITUTE);}catch(Throwable $e){http_response_code(500);echo json_encode(['error'=>'music_unavailable']);}
