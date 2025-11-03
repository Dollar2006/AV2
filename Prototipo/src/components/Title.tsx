interface TitleProps{
    titulo: string
    className?: string
}


function Title(props:TitleProps) {
    return (
        <>
            <h1>{props.titulo}</h1>
        </>
    )
}

export default Title