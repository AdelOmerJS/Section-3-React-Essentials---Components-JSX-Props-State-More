const Examples = ({ ex }) => {
  return (
    <>
      <h3>{ex.title}</h3>
      <p>{ex.description}</p>
      <pre>
        <code>{ex.code}</code>
      </pre>
    </>
  );
};

export default Examples;
