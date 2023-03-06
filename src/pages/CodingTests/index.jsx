import React, { useState } from 'react';
import { Introduction, SearchBar, SkillsList } from './components';
import { useFetch } from '../../CustomHooks/useAxiosFetch';

function CodignTests() {
  const [search, setSearch] = useState('');

  const { data: skills, isLoading: skillsLoading } = useFetch(
    process.env.REACT_APP_BACKEND_URL + '/skills'
  );

  const filteredSkills = skills?.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase().trim())
  );
  return (
    <main className='bg-white mx-80 min-h-[100vh] w-[60%]'>
      <Introduction />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <SkillsList
        skills={filteredSkills}
        skillsLoading={skillsLoading}
        search={search}
      />
    </main>
  );
}

export default CodignTests;
