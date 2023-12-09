import {THEME} from "./2048"

export function themed_style(theme : THEME, val : number) : any {
  var classic = (t : {[key : string] : string}, val : number) => {
    var colors : {[key : number] : string}= {
      0: "rgb(204, 192, 179)", 2: "rgb(238, 228, 218)", 4: "rgb(237, 224, 200)",
      8: "rgb(242, 177, 121)", 16: "rgb(245, 149, 99)", 32: "rgb(246, 124, 95)",
      64: "rgb(246, 94, 59)", 128: "rgb(237, 207, 114)", 256: "rgb(237, 204, 97)",
      512: "rgb(237, 200, 80)", 1024: "rgb(237, 197, 63)", 2048: "rgb(237, 194, 46)"}

    t.alignItems = 'center'
    t.justifyContent = 'center'
    t.verticalAlign = 'middle'
    t.flexDirection = 'column'
    t.margin = '3px'
    t.backgroundColor = colors[val]
  }

  var amongus = (t : {[key : string] : string}, val : number) => {
    var images : {[key : number] : string} = {
      0: "Space.png", 2: "Red.png", 4: "Blue.png",
      8: "Green.png", 16: "Pink.png", 32: "Yellow.png",
      64: "Black.png", 128: "White.png", 256: "Purple.png",
      512: "Brown.png", 1024: "Cyan.png", 2048: "Rose.png"}

    t.backgroundPosition = 'center'
    t.backgroundSize = 'contain'
    t.backgroundColor = 'black'
    t.backgroundRepeat = 'no-repeat'

    t.flex = "1"
    t.justifyContent = 'flex-end'
    t.alignItems = 'flex-start'
    t.textAlignVertical = 'bottom'
    t.paddingTop = '40px'
    t.margin = '3px'

    t.backgroundImage = 'url("/img/amongus/' + images[val] + '")'
  }  

  var zipper = (t : {[key : string] : string}, val : number) => {
    var images : {[key : number] : string} = {
      0: "", 2: "z1.jpg", 4: "z8.jpg",
      8: "z3.jpg", 16: "z4.jpg", 32: "z5.jpg",
      64: "z6.jpg", 128: "z12.jpg", 256: "z2.jpg",
      512: "z9.jpg", 1024: "z10.jpg", 2048: "z11.jpg"}

    t.backgroundPosition = 'center'
    t.backgroundSize = 'cover'
    t.backgroundColor = 'rgb(204, 192, 179)'
    t.backgroundRepeat = 'no-repeat'

    t.flex = "1"
    t.justifyContent = 'flex-end'
    t.alignItems = 'flex-start'
    t.textAlignVertical = 'bottom'
    t.paddingTop = '40px'
    t.margin = '3px'

    t.backgroundImage = 'url("/img/zipper/' + images[val] + '")'
  }  


  const themes : {[key : string] : Function} = {
    Classic: classic,
    Amongus: amongus,
    Zipper: zipper
  }

  var ret : {[key : string] : string} = {
    display: 'flex',
    width: '80px',
    height: '80px',
    borderColor: "#ffffff",
    borderWidth: '2px',
  }

  themes[theme](ret, val)

  return ret;
}

export function themed_text(theme : THEME) : any{
  const text : {[key : string] : string} = {}
  if(theme === THEME.Classic) {
    text.fontSize = '40px'
    text.paddingTop = '10px'
    text.textAlign = 'center'
    text.alignItems = 'center'
  }

  else if (theme == THEME.Amongus || theme == THEME.Zipper) {
    text.fontSize = '25px'
    text.color = 'white'
    text.paddingRight = '5px'
  }
  return text
}

export const BOARD_STYLE: any = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '3px',
}

export const ROW_STYLE: any = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

export const GAME_STYLE: any = {
  outline: 'none', overscrollBehaviorY: 'contain',
  overflow: 'hidden', overflowY: 'hidden', overscrollBehavior: 'contain',
  display: 'flex', flexDirection: 'column', alignItems: "center",
  justifyContent: "center", height: '70vh'
}

export const STATS_STYLE: any = {
  display: "flex", flexDirection: 'row', padding: '5px', 
  alignItems: 'center', justifyContent: 'space-between',
}

