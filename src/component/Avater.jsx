
function Avatar({name,size}) {
    return (
        <>
        <h1>{name}</h1>
        {/* <h1>{size}</h1> */}
      <img
        className="avatar"
        src="https://i.imgur.com/1bX5QH6.jpg"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
      </>
    );
  }
  export default Avatar