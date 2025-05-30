function CoreConcept(props) {
  return (
    <ul>
      <li>
        <img src={props.image} alt="..." />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </li>
    </ul>
  );
}

export default CoreConcept;
