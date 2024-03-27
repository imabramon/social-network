import styled from 'styled-components';

const makePivotTree = (objectsWithKeyNames, makeLeaf, acc = []) =>{
    if(objectsWithKeyNames.length === 0){
        return makeLeaf(acc)
    }

    const [current, ...rest] = objectsWithKeyNames;

    const root = {}

    for(const [key, value] of Object.entries(current)){
        root[key] = makePivotTree(rest, makeLeaf, [...acc, value])
    }

    return root
}

export const makeComponentTree = (originComponent, modifiers) => {
    return  makePivotTree(modifiers, (mixins)=>{
        return styled(originComponent)`
            ${[...mixins]}
        `
    })  
}


