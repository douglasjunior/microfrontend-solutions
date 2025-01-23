# Um estudo para soluções de microfrontends com Vite, React e TypeScript

Com o crescimento de aplicações front-end complexas, a arquitetura de microfrontends tem se tornado uma escolha popular para equipes que buscam maior escalabilidade, independência de deploy e flexibilidade tecnológica. 
Quando combinamos essa abordagem com tecnologias modernas como React, Vite e TypeScript, surgem desafios específicos, como o compartilhamento de dependências, configuração de ambientes de desenvolvimento e deploys independentes. 

Neste post, vos trago o resultado de um estudo em cima de três das principais soluções para implementar microfrontends: Module Federation, Single-SPA e GarfishJS. 

Embora essas ferramentas sejam fortemente baseadas em Webpack (e Rspack no caso do GarfishJS), entendo que é possível utilizá-las com sucesso em projetos baseados em Vite, aproveitando suas vantagens de build rápido e experiência aprimorada para desenvolvedores. 

Vamos explorar os prós, contras e casos de uso ideais para cada framework:

## Module Federation

### Prós
- **Compatibilidade com Vite**: O plugin oficial `@module-federation/vite` facilita a integração com Vite, suportando ES Modules e TypeScript diretamente, sem dependência de terceiros.
- **Compatibilidade com React**: Suporte robusto ao React, permitindo o compartilhamento de componentes e bibliotecas como React e ReactDOM.
- **Compartilhamento de dependências**: Permite compartilhar dependências via pacotes NPM ou URLs externas, com suporte a singletons para evitar múltiplas instâncias de bibliotecas comuns.
- **Configuração flexível**: Configuração centralizada no `vite.config.ts`, com suporte a remotes dinâmicos e runtime integration.
- **Documentação**: A documentação é bem estruturada e atualizada, com exemplos práticos para diferentes cenários[11][13].
- **Developer Experience**: Integração fluida com o ambiente de desenvolvimento do Vite, permitindo builds rápidos e hot module replacement eficiente para o host[7][13].
- **Deploy independente**: Microfrontends podem ser implantados de forma independente do host. Alterações nos remotes são refletidas no host sem necessidade de redeploy do host.

### Contras
- **Modo de desenvolvimento limitado**: Ao executar múltiplos projetos conectados, apenas o host pode rodar diretamente em modo de desenvolvimento; remotes precisam ser previamente construídos.
- **Complexidade inicial**: Configurar remotes e shared dependencies pode ser confuso para iniciantes, especialmente em projetos grandes.

---

## Single-SPA

### **Prós**
- **Compatibilidade com React**: Suporte oficial ao React via `single-spa-react`, facilitando a integração de lifecycles.
- **Flexibilidade tecnológica**: Permite combinar múltiplos frameworks (React, Angular, Vue) em uma única aplicação, útil para migrações ou equipes heterogêneas.
- **Developer Experience**: Suporte ao desenvolvimento isolado de microfrontends individuais, sem necessidade de executar toda a aplicação.
- **Deploy independente**: Cada microfrontend pode ser implantado independentemente do host. O uso de import maps permite que o host consuma versões atualizadas dos remotes sem redeploy.

### **Contras**
- **Integração não oficial com Vite**: Depende de um plugin mantido por terceiros (`vite-plugin-single-spa`), que adapta projetos Vite às especificações do Single-SPA.
- **Compartilhamento de dependências**: Utiliza import maps com URLs externas para compartilhar dependências entre microfrontends, inviabilizando um controle de versão via NPM dessas dependências.
- **Documentação limitada**: Embora abrangente em alguns aspectos, a documentação pode ser confusa para iniciantes e não cobre todos os casos práticos.
- **Configuração complexa**: Requer configuração manual dos ciclos de vida e mapas de importação para módulos compartilhados, o que pode ser trabalhoso em projetos grandes.

---

## **GarfishJS**

### **Prós**
- **Compatibilidade com Vite**: Suporte a ES Modules permite integração básica com Vite; no entanto, mas não há documentação específica sobre uso avançado com Vite.
- **Compatibilidade com React**: Suporta React por meio de APIs modulares oficiais.
- **Isolamento forte**: Oferece sandboxing para isolar microfrontends, prevenindo conflitos globais entre aplicações.
- **Configuração modular**: Permite configurações granulares para carregamento e comunicação entre microfrontends.
- **Deploy independente**: Microfrontends podem ser implantados de forma independente do host. Alterações nos remotes são refletidas automaticamente no host sem necessidade de redeploy.

### **Contras**
- **Documentação limitada e desatualizada**: A maior parte da documentação está disponível apenas em chinês, dificultando o uso por desenvolvedores globais.
- **Problemas no modo desenvolvimento**: Microfrontends remotos só funcionam quando compilados; não é possível rodar diretamente no modo desenvolvimento conectado ao host.
- **Compartilhamento de dependências limitado**: Não há suporte nativo para compartilhamento via NPM; depende exclusivamente da configuração manual ou URLs externas. (A não ser que esteja utilizando ModernJS ou Rspack)

---

## Comparação Geral

| Critério                              | Module Federation                       | Single-SPA                              | GarfishJS                               |
|---------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| Compatibilidade com Vite              | Alta (plugin oficial)                   | Moderada (plugin de terceiros)          | Moderada (suporte básico a ES Modules)  |
| Compatibilidade com React             | Alta                                    | Alta                                    | Alta                                    |
| Configuração                          | Moderada (ajustes manuais necessários)  | Complexa (ciclos de vida + import maps) | Moderada (sandbox + APIs específicas)   |
| Compartilhamento de deps              | Via NPM ou URLs externas                | Apenas URLs externas                    | Com Vite é limitada, depende de configuração específica do Bundler |
| Documentação                          | Atualizada e abrangente                 | Limitada em alguns aspectos             | Limitada apenas em chinês               |
| Developer Experience                  | Boa (é possível rodar os projetos de forma independente em desenvolvimento, mas quando conectados só é possível rodar compilado) | Excelente (Permite rodar os projetos de forma independente ou conectados em modo de desenvolvimento) | Boa (é possível rodar os projetos de forma independente em desenvolvimento, mas quando conectados só é possível rodar compilado) |
| Modo dev com remoto conectado ao host | Não                                     | Funciona                                | Não funciona                            |

---

## Conclusão

Embora os três frameworks sejam fortemente baseados em Webpack (e o GarfishJS no Rspack), todos podem ser utilizados em projetos que utilizam Vite + React + TypeScript, graças a plugins de terceiros ou suporte nativo para ES Modules. 
Isso permite aproveitar as vantagens do Vite, como builds rápidos e hot module replacement, sem sacrificar os benefícios das arquiteturas de microfrontends.

Recomendações:

1. Use o **Module Federation (@module-federation/vite)** se busca alta performance no desenvolvimento, compartilhamento robusto de dependências, suporte oficial ao Vite e deploys independentes sem complicações.
2. Prefira o **Single-SPA** se precisa integrar múltiplos frameworks e gerenciar lifecycles complexos, mas esteja ciente da curva inicial mais íngreme.
3. Considere o **GarfishJS** se isolamento forte for essencial e deploys independentes forem prioridade, mas esteja ciente das limitações no modo desenvolvimento e na documentação. Mais recomendado para projetos baseados em ModernJS ou Rspack.
