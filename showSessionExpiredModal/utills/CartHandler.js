import { useDispatch,useSelector } from "react-redux";
import { addTOCart,removeFromCart } from "../redux/DiagnosisModule/DiagnosisCart/DiagnosisCartSlice";
const dispatch=useDispatch();

const handleaddtocart = (product) => {
    console.log(product);
    dispatch(addTOCart(product));
  }
  const handleremovefromcart = (product) => {
    console.log("remove", product);
    dispatch(removeFromCart(product));
  }

export  {handleaddtocart,handleremovefromcart}
