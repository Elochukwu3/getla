import useRegister from "./useRegister";
const id = Math.floor(Math.random() * (1 - 100 + 1));

const useSubmit = () => {
  const { responseData, error, isLoading, sendData } = useRegister();

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const team = (e.target as HTMLFormElement).team.value;
    const Project = (e.target as HTMLFormElement).Project.value;
    const email = (e.target as HTMLFormElement).Email.value;
    const phone = (e.target as HTMLFormElement).phone.value;
    const category = (e.target as HTMLFormElement).category.value;
    const group = (e.target as HTMLFormElement).group.value;
    const check = (e.target as HTMLFormElement).checked.checked;

    const data = {
      id: Number(id),
      email: email,
      team_name: team,
      phone_number: phone,
      project_topic: Project,
      group_size: group,
      privacy_poclicy_accepted: check,
      category: Number(category),
    };

    if (email && team && Project && category && check && group && phone) {
      sendData(data);
      (e.target as HTMLFormElement).reset();
    }
  };
  return { responseData, error, isLoading, submitForm };
};

export default useSubmit;
