import SkillTestCard from "../../../../components/SkillTestCard/SkillTestCard";

const TestsSkills = ({ tests }) => {
    return (
        <>
        <div className="flex justify-end">
        <button className='bg-[#89CFD9] text-black rounded p-2'>+ Agregar prueba</button>
        </div>
            <div className="flex gap-4">
                {
                    tests.map(test => <SkillTestCard key={test.id} test={test} />)
                }
            </div>
        </>
    );
}

export default TestsSkills;