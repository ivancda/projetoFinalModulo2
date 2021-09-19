# <h1>TARANTFLIX</h1>

## Orientações para os desenvolvedores:
#
## Favor não mexa na main sem prévia concordancia de todos os membros do grupo!
#
### Comandos git para o desenvolvimento por ramos!
#
#
#### Fazer antes mesmo de começar a mexer no projeto:

1 - git checkout [nome da sua branch] (entra na branch referente a sua parte no projeto) </br>
#
#
#### Fazer depois cada mudança relevante nos arquivos durante o desenvolvimento:

1 - git add . (para o git enxergar todas as mudanças feitas nos arquivos) </br>
2 - git commit - m "escreva aqui a mensagem do commit" (para adicionar comentários do que foi modificado e confirmar as mudanças) </br>
3 - git push (para deixar a sua branch sempre atualizada no github e facilitar o trabalho em conjunto com o coleguinha.) </br>
#
#
#### Fazendo o merge da sua branch(local) para main(local e github):

1 - git checkout main (vai para a main branch)</br>
2 - git pull (pega as alterações prévias para a sua main local)</br>
3 - git merge [nome da sua branch] (pegando os arquivos de sua branch(local) para sua main(local))</br>
4 - git push (salva as alterações na main(github))</br>
5 - git checkout [nome da sua branch] (volta para sua branch)</br>
#
#
#### Pegando todos os arquivos da main(do github) e salvando em sua branch (local e github):</br>
  
1 - git checkout main (vai para a main branch)</br>
2 - git pull (pega as alterações prévias para a sua main local)</br>
3 - git checkout [nome da sua branch] (volta para sua branch)</br>
4 - git merge main (pega os arquivos de sua main(local) e coloca na sua branch(local)</br>
5 - git push (salva as alterações no seu repo(do github))</br>
#
#
