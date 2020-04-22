# Docker Studies

```bash

# construir imagem de nome "pandora" a partir do Dockerfile da pasta raiz 
docker build -t pandora .

# listar imagens 
docker images

# criar container de nome "cool-pandora" com base na imagem "pandora", mapeando a porta 3000 do container para 3000 do computador
docker run -p 3000:3000 --name cool-pandora pandora 

# listar containers
docker ps 

# matar container
docker kill

# sobe serviço apollo em background (-d), isso sobe o container docker-project_apollo_1
docker-compose up -d apollo

# roda psql no container docker-project_apollo_1
# em termos práticos, esse comando acessa o postegres
docker exec -it docker-project_apollo_1 psql -U pacoca

``` 