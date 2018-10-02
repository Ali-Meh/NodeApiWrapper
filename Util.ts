

export interface Cell{
    x:number;
    y:number;
}

export function PrepareAnswer(vertex:Cell):string{//todo
    return vertex.x+'-'+vertex.y;
}

export function PrepareMap(data:string){
    //todo
}

export function onAnswerListener(data:Buffer):string[][]{
    let map:string[][];
    data.reduce()

    return map;
}
