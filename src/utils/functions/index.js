export const transformInitialSkills = (initialSkills) => {
  let skills = [];
  initialSkills.map((skill) => {
    Object.entries(skill).forEach(([key, value]) => {
      let skillLevel = key.match(/\d+/);
      value.forEach((v) => {
        skills.push({ skillId: v, level: skillLevel[0] });
      });
    });
    return null;
  });
  return skills;
};
