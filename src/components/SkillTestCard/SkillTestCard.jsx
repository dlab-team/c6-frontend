
const SkillTestCard = ({ test }) => {
    return (
        <div id={test.name} className='w-44 h-72 p-4 shadow rounded mb-2'>
            <img src={test.imagenUrl} className='pl-4 object-contain h-32 w-32' />
            <h3 className="text-center text-black text-xl my-3">{test.name}</h3>
            <p className="text-black p-2">{test.description}</p>
            <a href={test.url}><p className="text-center my-3 text-primary">Empezar test</p></a>
        </div>
    );
}

export default SkillTestCard;