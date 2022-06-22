import {Link, useNavigate} from 'react-router-dom';

function ComponentA(props) {

  const navigate = useNavigate();

  const toComponentB=()=>{
navigate('/componentB',{state:{id:1,name:'sabaoon'}});
  }

  return (
   <>
<div> <a onClick={()=>{toComponentB()}}>Component B<a/></div>
</>
  );


}


export default ComponentA;











import {useLocation} from 'react-router-dom';

 function ComponentB() {

    const location = useLocation();
   
        return (

            <>
               
<div>{location.state.name}</div>

            </>
        )
    }

export default ComponentB;
