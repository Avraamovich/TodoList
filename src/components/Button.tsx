type ButtonTypeProps = {
    title: string
    onClick?: () => void
}

export const Button = ({title, onClick}: ButtonTypeProps) => {
    return(
        <button onClick={onClick}>{title}</button>
    )
}