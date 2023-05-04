
export default function main(){
let point: any = {
  maingrade: 300,
  sidegrade: 300,
}

function gradecalc(maingrade: number, sidegrade: number){
  if (maingrade + sidegrade >= 550){
    console.log("Note 1!")
  }else{
    console.log("Failure")
  }
}

gradecalc(point.maingrade, point.sidegrade)
}
