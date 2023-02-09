export function Form(props) {

    const { handleSubmit, handleChange, task } = props;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe..." onChange={handleChange} value={task} />
            <input type="submit" className="btn" value="Añadir" onClick={handleSubmit} />
        </form>
    )
}

