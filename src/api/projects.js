import project from "./baseURL";

export const requestProjects = async () => {
    const res = await project.get("/projects");
  return res.data;
}

// export const requestProject = (id) => project.get(`/projects/${id}`).then((res) => {
//   return res.data;
// });