# Publicação pelo GitHub Pages

## Estado atual
A tentativa anterior por Sites/Netlify foi cancelada a pedido do usuário. Nenhuma versão chegou a ser publicada. A pasta `hospedagem/` é somente um registro local dessa tentativa e está excluída do Git.

O destino solicitado é a conta **gabriel7SENAI**, com repositório proposto **operacao-zero**. A conta precisa ser autorizada pela conexão GitHub antes de criar ou enviar o repositório. O e-mail e o nome de usuário não são credenciais. Não envie senhas ou tokens pelo chat.

O projeto está preparado com `.github/workflows/pages.yml`. Cada envio para `main` verifica a sintaxe do JavaScript, executa os testes matemáticos, prepara os seis arquivos do jogo em `dist/` e publica o resultado pelo GitHub Pages. Documentação, arquivos de diagnóstico, e a tentativa anterior de hospedagem não entram no site.

Endereço esperado **somente depois de publicação confirmada**: `https://gabriel7senai.github.io/operacao-zero/`. Esse endereço não comprova que o site esteja ativo.

## Autorização pendente
Foi encontrada uma integração GitHub disponível, mas ela ainda não está conectada nesta conversa. Autorize a conta gabriel7SENAI e informe quando terminar. É necessário verificar a conta autenticada e a existência do repositório antes de publicar, preservando qualquer conteúdo remoto existente.

A conexão direta desta sessão também foi testada:
- `git ls-remote https://github.com/gabriel7SENAI/operacao-zero.git` falhou com `Failed to connect to github.com port 443 after 41 ms: Could not connect to server`.
- `fetch('https://api.github.com/users/gabriel7SENAI', {signal: AbortSignal.timeout(10000)})` falhou com `TypeError: fetch failed / EACCES`.
- O executável `gh` não foi encontrado. As falhas de conexão ocorreram antes da autenticação; fazer login sozinho não garante que a restrição de rede do terminal seja resolvida.

## Configuração no GitHub
Quando houver acesso autorizado, crie ou reutilize o repositório correto na conta gabriel7SENAI. Para usar GitHub Pages no plano gratuito, use um repositório público. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. Envie os arquivos para `main` e acompanhe a execução **Publicar Operação Zero**. O endereço confirmado sai do passo `deploy-pages`, e só deve ser compartilhado após sucesso.

Se o repositório proposto já existir, confira seu conteúdo e sua branch padrão antes de qualquer alteração. Não use force push.

## Preparar e verificar localmente
Na raiz do projeto:

```text
node tests/tests.js
node scripts/preparar-publicacao.js
node tests/servidor-pages.js
```

O servidor imprime uma URL local terminada em `/operacao-zero/`, reproduzindo o prefixo do Pages. Para testar esse endereço no PowerShell, em outro terminal:

```powershell
$env:ZERO_TEST_URL = 'URL LOCAL IMPRESSA PELO SERVIDOR'
node tests/tests-browser.js
```

O mesmo jogo continua funcionando ao abrir `index.html`, sem servidor. As referências a CSS, JavaScript e ícone são relativas, compatíveis com o caminho de um projeto do Pages. Cada jogador mantém o próprio progresso; salvamentos do arquivo local não são transferidos automaticamente para o novo domínio.

## Responsividade
A interface se reorganiza em telas estreitas, os gráficos acompanham a largura disponível e as tabelas podem rolar dentro de seus próprios painéis. Controles de toque têm pelo menos 44 px, e o cabeçalho quebra de linha quando necessário. O jogo respeita movimento reduzido e não precisa de mouse.

A suíte verifica 320, 360, 390, 430, 768, 1.024 e 1.440 px, além de rótulos, teclado e controles representativos. Isso é emulação no Edge, não teste em celulares físicos.

## Referências oficiais verificadas em 23/10/2026
- [GitHub — Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages): permissões, ambiente e publicação de artefatos.
- [GitHub — Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site): seleção de GitHub Actions em Pages.

## Preparação do Git local
`git init -b main` foi executado. O Git detectou diferença de proprietário da pasta e do usuário da sessão. Com a exceção `git -c safe.directory=<pasta deste projeto>` limitada a cada comando, a leitura do status funcionou. A tentativa de configurar a identidade local falhou: `error: could not lock config file .git/config: Permission denied`. Nenhum commit, repositório remoto ou envio foi criado nesta sessão. A identidade global do Git não foi alterada.

## Atualização do tema e tentativa de commit
A versão atual usa o tema de caderno de campo e está preparada em `dist/`, além dos arquivos da raiz. Para atualizar o site enviado manualmente, substitua `index.html` e a pasta `assets` no repositório, mantendo os caminhos. Os mesmos arquivos estão em `entrega/Operacao-Zero-publicar.zip`.

O commit solicitado foi tentado nesta sessão. `git add` falhou com `fatal: Unable to create '.../.git/index.lock': Permission denied`, por falta de permissão de escrita na área de controle do Git. Nenhum commit ou push foi criado. Se for usar o terminal do seu computador, fora da sessão restrita, você pode adicionar e commitar os arquivos na raiz do projeto. Isso não exige conectar o GitHub ao ChatGPT; autenticação será necessária apenas no envio ao GitHub.
