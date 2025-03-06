# Como Rodar um Projeto React Native Localmente

## Requisitos
Antes de começar, certifique-se de ter os seguintes requisitos instalados:

### 1. Node.js e npm/yarn
- Baixe e instale o [Node.js](https://nodejs.org/)
- Após a instalação, verifique as versões executando:
  ```sh
  node -v
  npm -v
  ```

### 2. React Native CLI
- Instale o React Native CLI globalmente:
  ```sh
  npm install -g react-native-cli
  ```

### 3. Ambiente de Desenvolvimento
Para executar o aplicativo no Android:
- Instale o [Android Studio](https://developer.android.com/studio)
- Configure o SDK do Android e adicione as variáveis de ambiente `ANDROID_HOME` e `PATH`
- Ative a Depuração USB no seu dispositivo ou use um emulador configurado

Para executar no iOS (apenas em macOS):
- Instale o Xcode na App Store
- Instale o [CocoaPods](https://cocoapods.org/) executando:
  ```sh
  sudo gem install cocoapods
  ```

---

## Configuração do Projeto
1. **Clone o repositório**
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn install
   ```

3. **Instale as dependências do iOS (se necessário)**
   ```sh
   cd ios
   pod install
   cd ..
   ```

---

## Executando o Aplicativo
### No Android
1. Conecte um dispositivo Android via USB ou inicie um emulador
2. Execute o seguinte comando:
   ```sh
   npx react-native run-android
   ```

### No iOS (macOS)
1. Abra o Xcode e selecione um simulador
2. Execute o seguinte comando:
   ```sh
   npx react-native run-ios
   ```

---

## Depuração
- Para abrir o menu de desenvolvedor no emulador/dispositivo, pressione:
  - **Android:** `Cmd + M` (Mac) ou `Ctrl + M` (Windows/Linux)
  - **iOS:** `Cmd + D`

- Para iniciar o Metro Bundler manualmente:
  ```sh
  npx react-native start
  ```

- Se houver erros, tente limpar o cache:
  ```sh
  npx react-native start --reset-cache
  ```

---

## Dependências Utilizadas no Projeto
- `react-native`: Framework principal do React Native
- `react-navigation`: Para navegação entre telas
- `@react-navigation/native`: Biblioteca principal de navegação
- `@react-navigation/stack`: Para navegação do tipo Stack
- `react-native-maps`: Para exibição de mapas

Instale essas dependências com:
```sh
npm install react-native-maps react-navigation @react-navigation/native @react-navigation/stack
```

Para configurar o `react-native-maps`, siga as instruções oficiais: [Guia de Instalação](https://github.com/react-native-maps/react-native-maps)

---

## Conclusão

Agora você pode rodar seu aplicativo React Native localmente sem a necessidade de ferramentas web. Se encontrar problemas, consulte a documentação oficial do [React Native](https://reactnative.dev/docs/getting-started).

