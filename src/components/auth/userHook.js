import { useQuery } from "@tanstack/react-query";

 const login=async()=>{
  const token=localStorage.getItem("token");
  try {
    const res=await fetch(`${import.meta.env.VITE_API_URL}/user/access`,{method:"GET", headers:{"Authorization":`Bearer ${token}`}, credentials:"include",});
   if (!res.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
    const result = await res.json();
    return result.user;
  } catch (error) {
    throw error; 
  }
}

const useUser=()=>{
    return useQuery({
      queryKey:["user"],
      queryFn:login,
      retry:false
    })
  }
  export default useUser;