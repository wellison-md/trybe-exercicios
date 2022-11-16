echo 'UNIX & SHELL : Exercício 2\n\n'

timer=1

sleep $timer
echo 'Criando pasta unix_tests_skills'
mkdir unix_tests_skills

sleep $timer
echo 'Acessando pasta unix_tests_skills'
cd unix_tests_skills

sleep $timer
touch skills2.txt
echo 'Criando Arquivo skills2.txt'
echo "internet" >> skills2.txt
echo 'unix' >> skills2.txt
echo 'bash' >> skills2.txt

#cat > skills2.txt
# comando cat > arquivo.ext - permite add linhas diretamente no arquivo pelo terminal (substitui o conteudo)
# comando cat >> arquivo.ext - permite add linhas ao final do arquivo, preservando o conteúdo original
# adicione as palavras 'internet', 'unix' e 'bash' um em cada;
# para finalizar utilize ctrl+c ou ctrl+d


sleep $timer
echo 'Adicionando mais 5 linhas ao arquivo skills2.txt'
echo '\nAdicionando mais 5 linhas' >> skills2.txt
echo 'Javascript' >> skills2.txt
echo 'NodeJS' >> skills2.txt
echo 'React/React-native' >> skills2.txt
echo 'mongoDB' >> skills2.txt
echo 'Jest' >> skills2.txt


sleep $timer
numberLines=`wc --lines < skills2.txt`
numberWords=`wc --word < skills2.txt`
echo "Quantidade de linhas em skills2.txt : $numberLines"
echo "Quantidade de palavras em skills2.txt : $numberWords\n"

sleep $timer
echo 'Criando arquivo top_skills.txt com as 3 primeiras skills de skills2 em ordem alfabetica'
head -3 skills2.txt | sort > top_skills.txt 

sleep $timer
contemBR=`grep -ic br skills2.txt`
naoContemBR=`grep -ic !br skills2.txt`
echo "Número de linhas que contem as letras br: $contemBR"
echo "Número de linhas que não contem as letras br: $naoContemBR"



sleep $timer
touch skills3.txt
echo 'Criando Arquivo skills3.txt'
echo "titulo arquivo skills3" >> skills3.txt
echo 'mySql' >> skills3.txt
echo 'bash' >> skills3.txt

sleep $timer
touch skills4.txt
echo 'Criando Arquivo skills4.txt'
echo "titulo arquivo skills4" >> skills4.txt
echo 'API Rest' >> skills4.txt
echo 'HTTPs' >> skills4.txt


# Buscas e concatenação de comandos




sleep $timer
echo 'Finalizando exercicio...'
cd ..
rm -rf unix_tests_skills
exit
