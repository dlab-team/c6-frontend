import React, { useEffect, useState } from 'react';

function SkillsList({ skills, skillsLoading, search }) {
  const [showAllSkills, setShowAllSkills] = useState(search === '');

  useEffect(() => {
    setShowAllSkills(search === '');
  }, [search]);
  return (
    <ul className='flex flex-row flex-wrap w-[60%]'>
      {skillsLoading ? (
        <p className='text-black'>Loading...</p>
      ) : (
        <>
          {showAllSkills && (
            <p className='text-white border-solid border rounded-lg p-2 mr-3 mb-3 bg-[#2738F5] font-extralight'>
              Todos
            </p>
          )}
          {skills?.map((skill) => (
            <li
              key={skill.id}
              className='text-black border-solid border rounded-lg p-2 mr-3 mb-3 border-[#2738F5] font-extralight'
            >
              {skill.name}
            </li>
          ))}
        </>
      )}
    </ul>
  );
}

export default SkillsList;
