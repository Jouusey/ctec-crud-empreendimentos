# SCTEC - Gestão de Empreendimentos SC

Projeto desenvolvido em React para o cadastro e gestão de empreendimentos. A aplicação é uma Single Page Application (SPA) que conta com um CRUD completo e salva os dados direto no navegador do usuário.

## Tecnologias Utilizadas

* **React + Vite:** Para construir a interface de forma rápida e dividida em componentes.
* **Tailwind CSS:** Para a estilização da página. Permitiu criar um visual limpo e responsivo direto nas classes do HTML, sem precisar de arquivos CSS separados.
* **JavaScript:** Usando recursos essenciais como `.map()` e `.filter()` para manipular a lista de cadastros.

## Decisões Técnicas

* **Formulários Controlados:** O formulário foi construído para que o React tenha controle total sobre o que é digitado. Um único estado (`formData`) gerencia os inputs em tempo real, mantendo os dados e a tela sempre sincronizados.
* **Divisão de Estados (`useState`):** Separei os estados da aplicação em três partes lógicas: a lista de cadastros, os dados atuais do formulário e um estado (`editandoId`) apenas para controlar se o usuário está criando um item novo ou editando um existente.
* **Gerador de IDs:** Para não ter problemas na hora de editar ou excluir itens, usei o `crypto.randomUUID()` nativo do navegador para criar um ID único para cada empreendimento cadastrado.
* **Salvar no Navegador (`localStorage` + `useEffect`):** Para evitar que os dados sumam ao recarregar a página (F5), usei o `localStorage`. O `useState` inicial procura os dados salvos ao abrir a tela, e o `useEffect` trabalha em segundo plano salvando a lista atualizada sempre que há alguma mudança.

## Como rodar o projeto localmente

1. Faça o clone deste repositório.
2. Abra a pasta do projeto no terminal.
3. Rode o comando `npm install` para instalar as dependências.
4. Rode o comando `npm run dev` para iniciar o servidor.
5. Abra o link gerado no seu navegador (normalmente `http://localhost:5173`).