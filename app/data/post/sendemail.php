<?php
$anyerrfind = 0;
$errmsg = array();

function finderror($kod, $name){
	global $anyerrfind;
	global $errmsg;
	$anyerrfind = 1;
	$text[1] = 'Please check field '.$name;
	$errmsg[] = $text[$kod];
}

		$name =  substr(htmlspecialchars(trim($_POST['name'])), 0, 60); 
		$email = substr(htmlspecialchars(trim( $_POST['email'])), 0, 60); 
		$text = substr(htmlspecialchars(trim( $_POST['text'])), 0, 1000); 
	
		if( !$name ) { finderror(1,'Name'); }
		if(( !$email) or (!eregi("^([0-9a-z]([-_.]?[0-9a-z])*@[0-9a-z]([-.]?[0-9a-z])*\\.[a-wyz][a-z](fo|g|l|m|mes|o|op|pa|ro|seum|t|u|v|z)?)$", $email) and $email != "")){ 
			finderror(1,'Еmail');
		}     
		if( !$text ) { finderror(1,'Text'); }
        
		if ( $anyerrfind ){
		
			echo (implode('<br />', $errmsg));
			
		} else {
			
			$message = "<html><head><title>Новый запрос</title></head><body><h1>Новый запрос</h1>";
			$message .= "<h4>Заинтересованное лицо: {$name}</h4>";
			
			$message .= "<div><h4>текст сообщения:</h4><br /> {$text}</div></body></html>"; 
			$message .= "</body></html>"; 

			$to = "a_gavrosh@mail.ru"; 
			$subject = "Новый запрос на LMWS"; 	
			$from=$email;
			$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
			$headers .= "From: LuckyMallet workshop <{$email}>\r\n"; 
			
			mail($to, $subject, $message, $headers); 
			
			echo "Thank you for your message. If it requires a response, I will contact you within 1 business day";	
		
		}
?>