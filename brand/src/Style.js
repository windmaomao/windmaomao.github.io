import styled from 'styled-components'
import Var, { background, foreground } from './variables'

const Div = styled.div`
  -webkit-font-smoothing: antialiased;
  font-family: ${Var.fontFamily.default};
  display: flex;
  flex-direction: ${props => props.direction};
  .book-nav {
    font-family: ${Var.fontFamily.light};
    background-color: ${Var.color.gray2};
    color: ${Var.color.gray7};
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 150px;
    flex-direction: column;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 40px;
    min-height: 100vh;

    .book-logo {
      margin-bottom: 60px;
      order: 10;
    }

    .book-title {
      font-family: ${Var.fontFamily.headline};
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 0.5px;
      line-height: 25px;
      margin-top: 40px;
      order: 0;
    }

    .theme-list {
      display: none;
    }

    .topic-list {
      flex: 1 0 auto;
      flex-direction: column;
      flex-wrap: wrap;
      margin-top: 20px;
      cursor: pointer;
      span {
        line-height: 22px;
        &.separator {
          display: block;
          font-size: 12px;
          margin-top: 15px;
          opacity: 0.6;
          .symbol {
            display: none;
          }
        }
      }
    }

  }

  .book-topic {
    flex: 1 1 auto;
    background-color: ${background};
    color: ${foreground};
    padding: ${props => props.cover ? '0' : '20px'};
    position: relative;
    margin: 0 auto;
    .story-next {
      display: none;
    }
    .story-head {
      display: ${props => props.cover ? 'none' : 'flex'};
      align-items: baseline;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 20px;
      .story-text {
        display: none;
      }
      .story-list {
        flex: 1 0 100%;
        display: flex;
        border-bottom: 1px solid #888;
        span {
          cursor: pointer;
          margin-right: 15px;
          line-height: 30px;
          &.active {
            font-weight: bold;
            font-family: ${Var.fontFamily.bold};
            border-bottom: 1px solid ${foreground};
          }
        } 
      }
    }
    .story-body {
      padding-bottom: 80px;
      color: ${foreground};
      max-width: 40em;
      padding: 20px;
      margin: 0 auto;
      font-size: 18px;
      line-height: 30px;
      font-weight: 300;
      hyphens: auto;
    }
  }

  .book-separator {
    flex: 1 1 auto;
    background-color: ${background};
    color: ${foreground};
    padding: 20px;
    position: relative;
    .story-title {
      font-family: ${Var.fontFamily.headline};
      cursor: pointer;
      position: absolute;
      top: 40vh;
      width: 100%;
      text-align: center;
      font-size: 20px;
    }
  }
`

export default Div