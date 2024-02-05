/* eslint-disable react/prop-types */
function OIcon ({ className }) {
  const classes = `text-black text-4xl ${className}`

  return (
    <div className={classes}>
      <i className="fa-solid fa-o"></i>
    </div>
  )
}

export default OIcon;