interface ParagraphProps{
    texto: string,
    className?: string
}


function Paragraph(props:ParagraphProps) {
    return (
        <>
            <p>{props.texto}</p>
        </>
    )
}

export default Paragraph