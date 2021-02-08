const Alumni = ({ data }) => {
  return (
    <div>
      {data.map((alumna) => (
        <img
          src={alumna.acf.profile_image}
          style={{ width: "20%", display: "block", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default Alumni;
