
const colors=["#e1ecf1","rgb(255, 229, 235)"];
export const ColorChanger=(index)=>{
    console.log("bbbbb",index);
    if(colors.length === 0){
        colors[0]=Math.random();
        return colors[0]
    }
    else if(colors.length >0 && index%6 === 0) {
        console.log("bbbbb",colors) 
        colors[colors.length]=Math.random();
        console.log(colors);
        return colors[colors.length];
    }
    else if(colors.length !== 0 && index%6 !== 0){
        console.log("bbbbb",colors,Math.floor(index/6));
        return colors[Math.floor(index/6)]
    }
  
}