## ESLint 그리고 Prettier

### ESLint

ESLint는 Javascript, Typescript의 커스텀 룰에 대한 실시간 스파잉을 제공하는 툴이다. <br />
작성한 자바스크립트코드가 `ECMAScript Specification`에 부합하는지 검사하며<br />
협업 또는 엄격한 환경에서 코드를 작성할때, 미리 약속한 가이드 라인을 준수하지 않을 경우 사후에 발생할 수 있는<br />
치명적이거나 잠재적 문제를 방지하는 목적으로 활용한다.<br />

```
 pnpx eslint --init
```

<br />

```javascript
// .eslintrc.js
// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    // eslint의 포매팅 기능을 prettier로 사용함. 항상 마지막에 세팅 되어야 함.
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // 최신 문법 지원
    sourceType: 'module', // 모듈 시스템 사용시
    ecmaFeatures: {
      jsx: true, // 리액트의 JSX 파싱을 위해서
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect', // eslint-plugin-react가 자동 리액트버전탐지
    },
  },
};
```

<br />

<b>1. parser(파서)</b>

<br />

ESLint는 구문 분석을 위해 기본적으로 Espree 파서를 사용한다.

이외에도, Babel과 함께 사용되는 babel-eslint, TS 구문 분석을 위해 사용되는 @typescript-eslint/parser 등이 있다.<br />

<b>2. parserOptions(파서 옵션)</b>

<br />
ESLint 사용을 위해 지원하려는 Javascript 언어의 옵션을 지정할 수 있다. 버전 및 모듈사용 여부 등을 설정한다.
<br />
ecmaVersion : 사용할 ECMAScript 버전 설정<br />
sourceType : parser의 export 형태를 설정<br />
ecmaFeatures : ECMAScript 언어 확장 기능을 설정<br />
globalReturn - 전역 스코프 사용 여부 (node, common.js 환경에서 최상위 스코프는 module)<br />
impliedStric - strict mode 사용 여부<br />
jsx - ECMAScript 규격의 JSX 사용 여부<br />

<br />

<b>3. plugins(플러그인)</b>

<br />
ESLint 문법이 정의된 npm 모듈이다. 통상, eslint-plugin-[플러그인 이름] 으로 명명된다.<br />
<br />

<b>4. extends(확장)</b>

<br />
   extends는 추가한 플러그인을 사용할 규칙을 설정한다.
   <br />
   플러그인은 일련의 규칙의 집합이며, 플러그인을 추가하여도 모든 규칙이 적용되지 않는다.
   <br />
   그렇기에, 플러그인에 속한 규칙을 사용하기 위해 extends에서 설정해줘야하는 것이다.
   <br />

```javascript
// ex) react 플러그인
{
  "plugins": [
    "react"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
}
```
  <br />
  
<b>5. rules(규칙)</b>
   <br />
    <br />
   ESLint에는 프로젝트에서 사용하는 규칙을 수정할 수 있다. 규칙은 기본적으로 아래 옵션과, 추가옵션은 배열 리터럴 구문으로 지정한다.
   <br />
   "off" 또는 0 : 규칙을 사용하지 않음<br />
   "warn" 또는 1 : 규칙을 경고로 사용<br />
   "error" 또는 2 : 규칙을 오류로 사용
   <br />

```javascript
{
  "rules": {
    // 세미콜론은 사용하지 않으며 사용할시 경고를 띄움
    "semi": ["warn", "never"]
	  // 더블쿼터(")만을 사용하며 백틱(TemplateLiterals)은 허용됨. 어길시 에러를 발생시킴.
    "quotes": ["error", "double", { "allowTemplateLiterals": true }]
  }
}
```

<b>6. env(환경)</b>
 
<br />

   env는 global 객체를 ESLint가 인식하게 하는 부분으로, 대표적으로 "browser": true 로 설정하면 window 혹은 document 로 할당되는 것이다.<br />
<br />

<b>7. settings</b>

<br />

모든 규칙에 의해 공유되는 설정을 하는 부분이며, 대표적으로는 절대경로를 src 폴더에서 사용하기 위해 설정하는 경우가 있다.
<br />

```javascript
{
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
```
