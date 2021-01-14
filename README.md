## mind-game

It's a simple psychological game.

## install

```bash
npm install -g mind-game
```

## usage

### 1, Choose a Game

```bash
$ mind-game
? どのゲームにしますか？ …
❯ 導き出した数字を当てます
  選んだ数字を当てます
  選んだものを当てます
```

### 2, Press enter to start the game

```bash
$ mind-game
✔ どのゲームにしますか？ · 導き出した数字を当てます
✔ 好きな数字を思い浮かべて下さい。 (y/N) · true
? その数を2倍して下さい。 (y/N) › false
```

Use the arrow keys (up ⬆️ and down 　 ⬇️) on the keyboard and press enter. ⏎

### 3, While playing games, there are 3 ways to enter.

#### 1. Yes / No

```bash
✔ 好きな数字を思い浮かべて下さい。 (y/N) · true
✔ その数を2倍して下さい。 (y/N) · false
```

Pressing "y" on the keyboard displays "true" and pressing "n" displays "false".

"enter" will continue, but "false" will be displayed.

#### 2. Input

```bash
$ mind-game
✔ どのゲームにしますか？ · 選んだ数字を当てます
✔ 簡単な計算をして頂きたいと思います。
頭をフラットにして、何気なく行ってください。 (y/N) · true
? 2 + 2 = ? ›
```

Please enter the corresponding number as it will be waiting for input.

#### 3. Select

```bash
$ mind-game
✔ どのゲームにしますか？ · 選んだものを当てます
? この8つの中から1つ選んで下さい …
❯ スキー
  鼻水
  コップ
  温泉
  ゴミ箱
  コーヒー
  冬
  お土産
```

Use the arrow keys (up ⬆️ and down ⬇️) on the keyboard and press enter. ⏎
