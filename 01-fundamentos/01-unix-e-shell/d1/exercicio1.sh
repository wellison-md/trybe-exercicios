# Ecercícios dia 01
# Data: 07/10/2022


timer=2

echo '=========================================\n\n'
echo 'Exercicios - criacao de arquivos e pastas\n\n'
echo '=========================================\n\n'
sleep $timer

#clear
echo 'Criando pasta unix_tests'
mkdir unix_tests
sleep $timer


#clear
echo 'Acessando pasta'
cd unix_tests
sleep $timer

#clear
echo 'Criando arquivo trybe.txt'
touch trybe.txt
sleep $timer

#clear
echo 'Copiando trybe.txt como trybe_backup.txt'
cp trybe.txt trybe_backup.txt
sleep $timer


#clear
echo 'Criando diretorio backup'
mkdir backup
sleep $timer


#clear
echo 'Movendo trybe_backup.txt para backup'
mv trybe_backup.txt backup/

#clear
echo 'Criando novo diretorio backup2'
mkdir backup2
sleep $timer

#clear
echo 'Movendo trybe_backup.txt para backup2'
mv backup/trybe_backup.txt ../backup2
sleep $timer

#clear
echo 'Apagando diretorio backup'
rmdir backup
sleep $timer

#clear
echo 'Renomeando diretorio backup2 para backup'
mv backup2 backup
sleep $timer

#clear
echo 'Path completo'
pwd
sleep $timer

#clear
echo 'Exibindo todos arquivos e diretorios'
ls *
sleep $timer

#clear
echo 'Apagando backup'
rm -rf backup2
sleep $timer

#clear
echo 'Limpando terminal e saindo'
sleep $timer
#clear
exit
