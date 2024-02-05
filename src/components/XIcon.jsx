/* eslint-disable react/prop-types */
function XIcon({ className }) {
  const classes = `text-black text-[2.5rem] ${className}`
  
	return (
    <div className={classes}>
      <i key='X' className="fa-solid fa-xmark"></i>
    </div>
  )
}

export default XIcon;
