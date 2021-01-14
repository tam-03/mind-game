#!/usr/bin/env node
const Enquirer = require('enquirer');

(async () => {
  const game = ['導き出した数字を当てます', '選んだ数字を当てます', '選んだものを当てます']
  const question = {
    type: 'select',
    name: 'game',
    message: 'どのゲームにしますか？',
    choices: game
  }
  const answer = await Enquirer.prompt(question)
  return answer.game
})().then((gameName) => {
  if (gameName === '導き出した数字を当てます') { numberQuestion() }
  if (gameName === '選んだ数字を当てます') { calculationQuestion() }
  if (gameName === '選んだものを当てます') { mindControlQuestion() }
})

const mindControlQuestion = async () => {
  const mindControlQuestions =
  {
    firstQuestion: ['スキー', '鼻水', 'コップ', '温泉', 'ゴミ箱', 'コーヒー', '冬', 'お土産'],
    secondQuestion: ['電卓', '雪', '針', 'ティッシュ', '米', 'まんじゅう', '牛乳', '電話'],
    thirdQuestion: ['大きい', '遅い', '白い', '鋭い', '暗い', '甘い', '赤い', '狭い']
  }
  const mindControlMessages =
  {
    firstMessage: 'この8つの中から1つ選んで下さい',
    secondMessage: '次に、さっき選んだものと「関係あるものと思うもの」をこの８つの中から１つだけ選んでください。',
    thirdMessage: '次に、先ほど選んだものの「特徴」をこの８つの中から１つだけ選んでください。',
    forthMessage: '最後に、「その特徴に当てはまるもの」をこの８つの中から１つだけ選んで、頭に思い浮かべて下さい。\n「ナイフ」 「ピラミッド」 「砂糖」 「亀」 「犬小屋」 「宇宙」 「血」 「深海」'
  }
  const question =
   [
     { type: 'select', message: mindControlMessages.firstMessage, choices: mindControlQuestions.firstQuestion },
     { type: 'select', message: mindControlMessages.secondMessage, choices: mindControlQuestions.secondQuestion },
     { type: 'select', message: mindControlMessages.thirdMessage, choices: mindControlQuestions.thirdQuestion },
     { type: 'confirm', message: mindControlMessages.forthMessage }
   ]

  await Enquirer.prompt(question)
  console.log('\nあなたの選んだ答えは 『砂糖』 ではありませんか？')
}

const calculationQuestion = async () => {
  const question =
     [
       { type: 'confirm', message: '簡単な計算をして頂きたいと思います。\n頭をフラットにして、何気なく行ってください。' },
       { type: 'input', message: '2 + 2 = ?' },
       { type: 'input', message: '4 + 4 = ?' },
       { type: 'input', message: '8 + 8 = ?' },
       { type: 'input', message: '16 + 16 = ?' },
       { type: 'confirm', message: '12 と 5 の間で思いつく数字を思い浮かべて下さい。' }
     ]
  await Enquirer.prompt(question)
  console.log('\n「7」ではありませんか？')
}

const numberQuestion = async () => {
  const question =
       [
         { type: 'confirm', message: '好きな数字を思い浮かべて下さい。' },
         { type: 'confirm', message: 'その数を2倍して下さい。' },
         { type: 'confirm', message: 'その数に10を足して下さい。' },
         { type: 'confirm', message: 'その数を2で割って下さい。' },
         { type: 'confirm', message: '最初に思い浮かべた数を引いて下さい。' }
       ]
  await Enquirer.prompt(question)
  console.log('\n「5」ではありませんか？')
}
