import React, { useState, useEffect } from "react";
import { Nav } from "./components/Nav";
import { Cards } from "./components/Cards";
import ptfile from './assets/tdraw-girl.webp' 

const App = () => {
  const [userInput, setUserInput] = useState('')
  const [users, setUsers] = useState([])
  const [filtredMostStared , setFiltredMostStared] = useState(false)
  
  //recieve the input change  from child Nav
  const handleDataFromNavChild = (data) => {
    setUserInput(data);
  }

  useEffect(() => {
    if(!userInput)return ;

    fetch(`https://api.github.com/users/${userInput}/repos`).then(
      response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setUsers([])
        return response.json();
      }
    ).then(repos => {
      const repositoriesData = repos.map(repo => ({
        userName: repo.owner.login,
        description: repo.description || 'No description available',
        stars: repo.stargazers_count,
        issues: repo.open_issues_count,
        email: 'skdlsk@live.fr',
        avatar: repo.owner.avatar_url || ptfile, 
        reposName: repo.name
      }));
      console.log(repositoriesData);
      setUsers( repositoriesData )
      
      
    }
    ).catch(err => console.error('Error fetching repositories:', err))
    
  }, [userInput]);
   
  //recieve the check status from the Nav child

  const handleChildCheck = (data) => {
      // set the  data from child to the state 
      setFiltredMostStared(data)
  }

  return (
    <div className="px-16 gap-10 py-12 flex flex-col justify-center items-center h-full">
      {/* set the callBacks functions as props in the Nav child and the recieve the data*/}
      <Nav sentToParent={handleDataFromNavChild} sentCheckStateToParent={handleChildCheck} user={users}/>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/*send the data from the state to the Cards child*/}
        <Cards checked={filtredMostStared} user={users} />
      </div>
    </div>
  );
};

export default App;
