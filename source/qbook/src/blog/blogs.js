import React from 'react'
import { Blog } from '../components'
import artOfWar from './md/art-of-war'
import adventOfCode from './md/advent-of-code'
import fortuneTelling from './md/fortune-telling'
import tradeWar from './md/trade-war'
import sixDynasty from './md/six-dynasty'
// import investmentLog from './md/investment-log'

const addlines = txt => {
  return txt.split(/\r?\n/).map(n => `${n}  `).join('\r')
}

const blogs = [
  { title: 'Reading', separator: true },
  {
    title: 'Advent of Code', stories: [{
      title: 'Topological Sorting',
      body: <Blog src={adventOfCode[0]} />
    }]
  },
  {
    title: '孙子兵法', stories: [
      '始计', '作战', '谋攻', '军形', '兵势', '虚实', '军争',
      '九变', '行军', '地形', '九地', '火攻', '用间', '心得'
    ].map((title, i) => ({
      title,
      body: <Blog src={artOfWar[i]} />
    }))
  },
  {
    title: '水墨先生', stories: [
      '犯太岁:马', '冲太岁:羊'
    ].map((title, i) => ({
      title,
      body: <Blog src={fortuneTelling[i]} />
    }))
  },
  {
    title: '中美关系', stories: [
      '中美贸易战', '世界是红的', '人民币'
    ].map((title, i) => ({
      title,
      body: <Blog src={tradeWar[i]} />
    }))
  },
  {
    title: '六朝清羽记', stories: [
      '1', '2', '3', '4'
    ].map((title, i) => ({
      title,
      body: <Blog src={addlines(sixDynasty[i])} />
    }))
  }
  // {
  //   title: 'Stock Watchlist', stories: [{
  //     title: 'Watchlist',
  //     body: <Body src={investmentLog[0]} />
  //   },{
  //     title: 'News',
  //     body: <Body src={investmentLog[1]} />
  //   }]
  // },
]

export default blogs
