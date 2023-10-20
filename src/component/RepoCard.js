
function RepoCard({ repo }) {

    return (
      <div className="card" style={{textOverflow:"initial",borderRadius:"10px",overflow:"auto"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}}>
        <img src={repo.owner.avatar_url} alt="Avatar" style={{width:"50%",height:"50%",display:"flex",justifyContent:"center"}}/>

        </div>
        <h3>{repo?.name?.toUpperCase()}</h3>
        <p>Stars: {repo.stargazers_count}</p>
        <p>Description: {repo.description}</p>
        <p>Language: {repo.language}</p>
       
      </div>
    );
  }


  export default RepoCard;