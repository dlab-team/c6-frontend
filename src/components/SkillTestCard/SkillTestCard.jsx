
const SkillTestCard = ({ test }) => {
    return (
        <div id={test.id} className='w-44 h-72 p-4 shadow rounded'>
            <img src={test.thumbnail} className='w-36 h-32'/>
            <h3 className="text-center text-black text-xl my-3">{test.name}</h3>
            <p className="text-black">{test.time}</p>
            <p className="text-primary text-center my-3">{test.status}</p>
        </div>
    );
}

export default SkillTestCard;