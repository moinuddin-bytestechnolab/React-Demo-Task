export interface ICardInterface {
    details : {
        id : number
        model : string,
        year : string,
        color : string,
    },
    handleColorChange : (color : string, index : number) => void
}

export interface IHeading {
    title : string
}

export interface IInputValue {
    value : Array<number>
}