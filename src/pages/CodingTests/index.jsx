import React, { useState } from 'react';
import { Introduction, SearchBar, SkillsList, TestsList } from './components';
import { useFetch } from '../../CustomHooks/useAxiosFetch';

function CodignTests() {
  const [search, setSearch] = useState('');

  // const { data: skills, isLoading: skillsLoading } = useFetch(
  //   process.env.REACT_APP_BACKEND_URL + '/skills'
  // );

  const skillsTests = [{ id: 1, name: 'Frontend' }, { id: 2, name: 'Backend' }]

  const tests = [{ id: 1, name: "React", skills: [1], time: '30 min', status: "Empezar test", thumbnail: 'https://reactjs.org/logo-og.png' }, { id: 2, name: "Node", skills: [2], time: '30 min', status: "Empezar test", thumbnail: 'https://midu.dev/images/tags/node.png' }, { id: 3, name: "JavaScript", skills: [1, 2], time: "30 min", status: "Empezar test", thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTab05l3ndGtZqyqxgTeOkmB7g2eDGyYrQp60gRu108tIEXOLQTl8tf9Jpx90UiNJEIv1Q&usqp=CAU' }]

  const filteredSkills = skillsTests?.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  const filterTests = (search) => {
    const skill = skillsTests.find(skill => skill.name.toLowerCase().includes(search.toLowerCase().trim()));
    const filteredTests = tests.filter(test => test.skills.some(e => e === skill.id));
    return filteredTests
  }

  return (
    <main className='bg-white mx-80 min-h-[100vh] w-[60%]'>
      <Introduction />
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <SkillsList
        skills={filteredSkills}
        // skillsLoading={skillsLoading}
        search={search}
        setSearch={setSearch}
      />
      <TestsList tests={search ? filterTests(search) : tests} />
    </main>
  );
}

export default CodignTests;
