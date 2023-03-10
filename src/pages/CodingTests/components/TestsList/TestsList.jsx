import SkillTestCard from "../../../../components/SkillTestCard/SkillTestCard";
import {
    Edit,
    Bin
} from '../../../../assets/SVG/profile/index';

const TestsSkills = ({ tests, testsLoading }) => {
    return (
        <>
            <div className="flex justify-end gap-2 mb-3">
                <button className='bg-[#89CFD9] text-black rounded p-2'>+ Agregar prueba</button>
                <button className='bg-[#89CFD9] text-black rounded p-2 flex items-center'>
                    <img src={Edit} alt='edit' className='pr-2 h-4' />
                    Modificar prueba
                </button>
                <button className='bg-[#AC231B] text-white rounded p-2 flex items-center'>
                    <img src={Bin} alt='edit' className='pr-2 h-4' />
                    Eliminar prueba
                </button>
            </div>
            <ul className="flex flex-row flex-wrap w-[100%] gap-4">
                {
                    testsLoading ? (
                        <li className='text-black'>Loading...</li>
                    ) : (
                        tests?.map(test => <SkillTestCard key={test.name} test={test} />)
                    )
                }
            </ul>
        </>
    );
}

export default TestsSkills;