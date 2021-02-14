<!--

document.write ("<center><br><br>");
document.write ("<table border cellpadding=3 cellspacing=0 width=70% bordercolor=blue bordercolorlight=blue>");
document.write ("<tr>");
document.write ("<td bgcolor=blue>");
document.write ("<p align=left>");
document.write ("<font face=Arial size=1 color=white><b>CITA&Ccedil;&Atilde;O RAND&Ocirc;MICA</b></font></td>");
document.write ("</tr><tr><td bgcolor=white align=left>");


total_frases = 216;   // <-------- Numero total de frases disponíveis para exibição


caminho = 'frases/';
nomebase = 'frase';
extensao = '.js';
var num_frase = Math.floor(Math.random() * total_frases) + 1;

total_zeros = '000';

if (num_frase > 9){total_zeros = '00'};
if (num_frase > 99){total_zeros = '0'};
if (num_frase > 999){total_zeros = ''};

document.write ("<SCRIPT language='JavaScript' SRC='"+caminho+nomebase+total_zeros+num_frase+extensao+"'><\/SCRIPT>");





 // -->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 