#READ ME

------

## テスト環境

FTP パッシブモード

```
works2.ranaextractive.jp
jimbeam
G6wT4WV9
```

url: http://dev2.jimbeam.ranaextractive.jp/  
id / pass  
jim / beam

----


## gitのルール
- 各社、ソースファイルごとプッシュをお願いします
- リモートブランチは各社用意をお願いします
- masterブランチへあげる際は、テスト環境と同じ状態のものをmasterにあげてください。
- コンフリクトが起きた際は、ご一報ください。


## ディレクトリルール
コンパイル後のフォルダ基本構造は下記のようになる想定です。

```
hoge
├── assets
│   ├── css
│   ├── img
│   └── js
└── index.html
```
全体図

```
public
├── assets
│   ├── css
│   ├── img
│   └── js
├── hoge
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   └── js
│   └── index.html
├── hoge2
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   └── js
│   └── index.html
├── hoge3
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   └── js
│   └── index.html
└── index.html
```

topのassetsの中に共通jsと共有cssが入ります。

各ページで共通jsと共有cssを読み込んでください。
