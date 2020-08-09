# Atomic Design Tutorial

## 開発環境

プロジェクト作成段階
- OS - UBUNTU 18.04LTS
- テキストエディタ - Visual Studio Code
- Node - v12.18.0
- yarn - 1.22.4
- React - 16.13.1
- Material-UI/core - 4.10.2

開発段階

- OS - macOS Catalina(10.15.5)
- テキストエディタ - Visual Studio Code
- Node - 12.18.1
- yarn - 1.22.4
- npm - 6.14.5
- React - 16.13.1
- Material-UI/core - 4.10.2
## 制作理由
Atomic Designを用いた開発の学習<br>
Atomic Designを用いた開発に関心があり、実践してみたいと思ったのでAtomicDesignを用いて開発をしてみました。

## Atomic Designについて
アメリカのWebデザイナーのBrad Fronst氏により考えられたデザインシステム。UIを5段階に分割し、組み合わせることで画面のUIを制作することができる。<br>
[参考サイト](https://www.weblab.co.jp/staff/design/7352.html#:~:text=%E3%82%A2%E3%83%88%E3%83%9F%E3%83%83%E3%82%AF%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%A8%E3%81%AF&text=%E3%82%A2%E3%83%88%E3%83%9F%E3%83%83%E3%82%AF%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AF%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E3%81%AE,UI%E3%81%8C%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82)

![AtomicDesign](https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png)
[atomicdesign.bradfrost.com](atomicdesign.bradfrost.com)

## 各要素について
### ・Atoms
UIの最小単位。<br>
UIを分解して、これ以上分解できない状態のUI<br>

例) Icon
### ・Molecules
Atomsを結合したUI <br>
2つ以上の複数のAtomsを結合し作成されたUIで機能を持つ。<br>

例) Form
### ・Organisms

AtomsとMoleculesが組み合わされて作成されたUI。
Organismsは単体で機能を持つ。<br>

例) Header

### ・Templates
Atoms Molecules Organismsを組み合し作成されたUI<br>
Templatesは事前に作成したワイヤーフレームのように骨組みの段階

### ・Pages
アプリケーションの画面となるUI<br>
ユーザーが利用する際に目にする画面

## Atomic Designのメリット
- メンテナンスが行いやすい
- コンポーネントの再利用が高まる
- 機能を持つコンポーネントがよりわかりやすくなる


## 参考サイト
[ウェブラボ（株）スタッフブログ](https://www.weblab.co.jp/staff/design/7352.html#:~:text=%E3%82%A2%E3%83%88%E3%83%9F%E3%83%83%E3%82%AF%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%A8%E3%81%AF&text=%E3%82%A2%E3%83%88%E3%83%9F%E3%83%83%E3%82%AF%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AF%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E3%81%AE,UI%E3%81%8C%E4%BD%9C%E3%82%89%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82)<br>
[Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/#atoms)