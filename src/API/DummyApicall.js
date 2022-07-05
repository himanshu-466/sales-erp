const Token = JSON.parse(localStorage.getItem("user-info"));
export const fetchData = async () => {
  const response = await fetch(
    "http://hr.flickerp.com:3000/api/v1/services/projects/project_form_data/",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Token}`,
      },
    }
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
};
