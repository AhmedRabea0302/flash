import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '100px auto',
    }
  return (
    <ClipLoader 
        color='#2C2C84'
        loading={loading}
        cssOverride={override}
        size={30}
    />
  )
}

export default Spinner